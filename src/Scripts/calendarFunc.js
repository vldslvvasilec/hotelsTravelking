import { getModalContent } from "./content";
import { initializeCalendar } from "./calendar";
import { sendDatesToApi } from "./sendDatesToApi";

// Formats the given date to "yyyy-mm-dd" format
export function formatDate(date) {
  if (!date) return ''; // Check for empty date
  const d = new Date(date);
  if (isNaN(d.getTime())) return ''; // Check for invalid date

  d.setHours(0, 0, 0, 0); // Normalize time to 00:00 for accurate comparison
  return d.toISOString().split("T")[0]; // Convert to "yyyy-mm-dd" format
}

// Generates date data including price, color, and minimum nights for each date
export function generateDateData(checkins) {
  const dateData = {}; 
  let globalMinNights = 1;

  // Iterate through each check-in record to create date data
  checkins.forEach(({ date, price, min_nights, price_position, cheapest }) => {
    let color;
    // Assign a color based on the price position
    switch (price_position) {
      case "low":
        color = "rgba(111, 174, 66, 0.4)"; // Low price
        break;
      case "middle":
        color = "rgba(242, 166, 60, 0.4)"; // Middle price
        break;
      case "high":
        color = "rgba(216, 93, 93, 0.4)"; // High price
        break;
      default:
        color = "rgba(200, 200, 200, 0.4)"; // Default color
    }

    // Store date data with price, color, and minimum nights
    dateData[date] = { price, color, min_nights };

    // Update the global minimum nights if the date is the cheapest
    if (cheapest) {
      globalMinNights = min_nights;
    }
  });

  return { dateData, globalMinNights }; // Return the date data and global minimum nights
}

// Formats a date into "dd.mm.yyyy" format for display
export function formatDateForDisplay(date) {
  if (!date) return ''; // Check for empty date
  const d = new Date(date);
  if (isNaN(d.getTime())) return ''; // Check for invalid date

  const day = d.getDate();
  const month = d.getMonth() + 1; // Adjust for 0-indexed months
  const year = d.getFullYear();
  return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`; // Format as "dd.mm.yyyy"
}

// Validates if the selected date range is available
export function isRangeValid(startDate, endDate, dateData) {
  const formatDate = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0); // Normalize time to 00:00
    return d.toISOString().split("T")[0]; // Convert to "yyyy-mm-dd" format
  };

  let isValid = true;

  // Check each date in the range to ensure it exists and has a price
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const currentFormattedDate = formatDate(d);
    if (!dateData[currentFormattedDate] || dateData[currentFormattedDate].price === undefined) {
      isValid = false; // Invalid if a date is missing or has no price
      break;
    }
  }

  return isValid; // Return validation result
}

// Updates the modal with selected dates, total nights, and cost
export function updateModalContent(startDate, endDate, diffInDays, dateData) {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate ? formatDate(endDate) : null;

  // Retrieve prices for the start and end dates (default to 0 if not available)
  const startPrice = dateData[formattedStartDate]?.price || 0;
  const endPrice = endDate ? dateData[formattedEndDate]?.price || 0 : 0;

  // Calculate total price and number of nights
  const totalPrice = startPrice * diffInDays;
  const totalNights = diffInDays;

  // Update modal elements with calculated values
  document.getElementById("start-date").textContent = formatDateForDisplay(startDate);
  document.getElementById("end-date").textContent = endDate ? formatDateForDisplay(endDate) : "Not selected";
  document.getElementById("total-nights").textContent = totalNights;
  document.getElementById("total-cost").textContent = `$${totalPrice}`;

  // Update the button with the selected data
  updateModalData(startDate, endDate, totalNights, totalPrice);
}

// Resets modal content to default when no dates are selected
export function resetModalContent() {
  document.getElementById("start-date").textContent = "Not selected"; // Reset start date
  document.getElementById("end-date").textContent = "Not selected"; // Reset end date
  document.getElementById("total-nights").textContent = "0"; // Reset nights
  document.getElementById("total-cost").textContent = "0 $"; // Reset cost

  // Reset button data
  updateModalData(null, null, 0, 0);
}

// Updates modal data based on the selected start and end dates, total nights, and total cost
export function updateModalData(startDate, endDate, totalNights, totalPrice) {
  const button = document.getElementById('book-now');
  const modalContent = document.querySelector('.modal-content');
  const calendarContent = document.querySelector('#calendar-content');

  if (!button) {
    console.error("Button with id 'book-now' not found");
    return;
  }

  if (startDate && endDate) {
    button.disabled = false;

    // Ensure previous event listeners are removed
    button.replaceWith(button.cloneNode(true));
    const newButton = document.getElementById('book-now');

    // Add event listener to the button
    newButton.addEventListener('click', () => {
      if (calendarContent) {
        calendarContent.style.display = 'none'; // Hide calendar
      }
      if (modalContent) {
        modalContent.style.transition = 'width 0.5s ease, transform 0.5s ease'; // Add smooth transition
        modalContent.style.width = '96%'; // Expand modal width
        modalContent.style.transform = 'scale(1)'; // Restore modal scale
      }
      sendDatesToApi(startDate, endDate); // Send selected dates to API
    });
  } else {
    button.disabled = true; // Disable button if dates are not selected
  }
}
