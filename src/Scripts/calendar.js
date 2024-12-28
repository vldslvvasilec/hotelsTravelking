import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "../styles/calendar.scss";
import { getAvailableCheckins } from './getDates';
import { formatDate, generateDateData, isRangeValid, updateModalContent, resetModalContent } from './calendarFunc';

export async function initializeCalendar(selectedStartDate = null, selectedEndDate = null) {
  const today = new Date();
  const sixMonthsLater = new Date();
  sixMonthsLater.setMonth(today.getMonth() + 6);

  const startDate = formatDate(today);
  const endDate = formatDate(sixMonthsLater);

  // Fetch available check-in data for the range from today to six months later
  const checkins = await getAvailableCheckins(startDate, endDate, 2, []);
  const { dateData, globalMinNights } = generateDateData(checkins);

  // Use default values if no start or end dates are provided
  if (!selectedStartDate || !selectedEndDate) {
    selectedStartDate = null;
    selectedEndDate = null;
  } else {
    // Format provided dates if available
    selectedStartDate = formatDate(selectedStartDate);
    selectedEndDate = formatDate(selectedEndDate);
  }

  // Initialize the Flatpickr calendar
  flatpickr("#calendar-container", {
    enableTime: false, // Disable time selection
    dateFormat: "Y-m-d", // Format the date as Year-Month-Day
    locale: "en", // Set calendar locale to English
    inline: true, // Display the calendar inline
    minDate: "today", // Minimum selectable date is today
    maxDate: sixMonthsLater, // Maximum selectable date is six months later
    showMonths: 1, // Display only one month at a time
    mode: "range", // Enable range selection mode
    defaultDate: selectedStartDate && selectedEndDate ? [selectedStartDate, selectedEndDate] : null, // Set default range if provided
    onDayCreate: function (dObj, dStr, fp, dayElem) {
      // Customize each day in the calendar
      const rawDate = dayElem.getAttribute("aria-label");
      if (!rawDate) return;

      const parsedDate = new Date(rawDate);
      const formattedDate = formatDate(parsedDate);

      // Style the day if data is available for the date
      if (dateData[formattedDate]) {
        const { price, color } = dateData[formattedDate];
        dayElem.style.backgroundColor = color; // Set background color
        dayElem.setAttribute("data-bg-color", color); // Store background color in a custom attribute

        dayElem.textContent = ""; // Clear default text

        // Add day number
        const dayNumber = document.createElement("section");
        const day = parsedDate.getDate();
        dayNumber.textContent = day;
        dayElem.appendChild(dayNumber);

        // Add price label
        const priceLabel = document.createElement("section");
        priceLabel.classList.add("calendar-day-price");
        priceLabel.textContent = `$${price}`;
        dayElem.appendChild(priceLabel);

        dayElem.classList.add("calendar-day"); // Add custom class for additional styling
      }
    },
    onChange: function (selectedDates, dateStr, instance) {
      // Handle date range selection
      if (selectedDates.length === 2) {
        const [startDate, endDate] = selectedDates;
        const formattedStartDate = formatDate(startDate);
        const minNights = dateData[formattedStartDate]?.min_nights || globalMinNights;

        const diffInDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

        // Validate the selected date range
        if (diffInDays < minNights || !isRangeValid(startDate, endDate, dateData)) {
          instance.clear(); // Clear invalid selection
          instance.jumpToDate(startDate); // Jump back to the selected start date
        } else {
          updateModalContent(startDate, endDate, diffInDays, dateData); // Update modal content with valid range
        }
      } else if (selectedDates.length === 1) {
        // Handle single date selection
        const [startDate] = selectedDates;
        resetModalContent(); // Reset modal content
        updateModalContent(startDate, null, 0, dateData); // Update with only start date
      } else if (selectedDates.length === 0) {
        // Handle clearing of both dates
        resetModalContent();
      }
    },
    disable: [
      function (date) {
        // Disable unavailable dates
        const formattedDate = formatDate(date);
        const minNights = dateData[formattedDate]?.min_nights || globalMinNights;

        // Check if the date is valid and has pricing data
        if (!dateData[formattedDate] || dateData[formattedDate].price === undefined) {
          return true;
        }

        // Ensure dates are not too close to today
        const today = new Date();
        const diffInDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
        return diffInDays < minNights;
      },
    ],
  });

  // Update the modal content if both start and end dates are passed
  if (selectedStartDate && selectedEndDate) {
    const diffInDays = Math.ceil((new Date(selectedEndDate) - new Date(selectedStartDate)) / (1000 * 60 * 60 * 24));
    updateModalContent(selectedStartDate, selectedEndDate, diffInDays, dateData);
  }
}
