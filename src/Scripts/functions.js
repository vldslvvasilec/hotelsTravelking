export function createBackButton() {
  const backButton = document.createElement("button");
  backButton.classList.add("back-button");
  backButton.innerHTML = "&#8656;"; // Use an arrow symbol for the back button

  // Add an event listener for the back button
  backButton.addEventListener("click", () => {
      const modalContent = document.querySelector('.modal-content');
      const calendarContent = document.querySelector('#calendar-content');
      const container = document.getElementById("rooms-container");

      if (modalContent) {
          modalContent.style.transition = 'width 0.5s ease, transform 0.5s ease'; // Smooth transition

          // Adjust the modal size based on the screen width
          if (window.innerWidth <= 580) {
              modalContent.style.width = '98%';
              modalContent.style.minHeight = '98vh';
          } else if (window.innerWidth <= 768) {
              modalContent.style.width = '80%';
              modalContent.style.minHeight = 'auto';
          } else if (window.innerWidth <= 1024) {
              modalContent.style.width = '70%';
              modalContent.style.minHeight = 'auto';
          } else {
              modalContent.style.width = '50%';
              modalContent.style.minHeight = 'auto';
          }

          modalContent.style.transform = 'scale(0.9)'; // Scale down the modal window
      }

      // Clear the container and restore the calendar view
      container.innerHTML = "";
      if (calendarContent) {
          calendarContent.style.display = 'flex'; // Display the calendar
      }

      // Hide the back button
      backButton.style.display = 'none';
  });

  return backButton;
}

export function renderAmenities(size, amenities) {
  const amenitiesContainer = document.createElement("div");
  amenitiesContainer.classList.add("amenities-container");

  // Add the first span element to display the room size in square meters
  const sizeSpan = document.createElement("span");
  sizeSpan.classList.add("amenity-item");
  sizeSpan.textContent = `${size} m²`; // Display the size in square meters
  amenitiesContainer.appendChild(sizeSpan);

  // Create elements for each amenity
  amenities.forEach((amenity, index) => {
      const amenitySpan = document.createElement("span");
      amenitySpan.classList.add("amenity-item");
      amenitySpan.textContent = amenity.description;

      // Hide all amenities starting from the 5th one
      if (index >= 4) {
          amenitySpan.style.display = "none"; // Initially hide
          amenitySpan.classList.add("hidden-amenity"); // Add a class for hidden amenities
      }

      amenitiesContainer.appendChild(amenitySpan);
  });

  // If there are more than 4 amenities, add a "Show All" button
  if (amenities.length > 4) {
      const toggleButton = document.createElement("button");
      toggleButton.classList.add("toggle-button");
      toggleButton.textContent = "Show All";

      // Add an event listener for the toggle button
      toggleButton.addEventListener("click", () => {
          const hiddenAmenities = amenitiesContainer.querySelectorAll(".hidden-amenity");

          hiddenAmenities.forEach((span) => {
              if (span.style.display === "none") {
                  span.style.display = "inline"; // Show hidden amenities
              } else {
                  span.style.display = "none"; // Hide amenities
              }
          });

          // Change the button text depending on the current state
          if (toggleButton.textContent === "Show All") {
              toggleButton.textContent = "Hide";
          } else {
              toggleButton.textContent = "Show All";
          }
      });

      // Add the toggle button to the container
      amenitiesContainer.appendChild(toggleButton);
  }

  return amenitiesContainer;
}
