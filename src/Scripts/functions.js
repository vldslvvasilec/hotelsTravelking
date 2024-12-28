export function setupBackButton() {
    const backButton = document.querySelector('#back-button');
  
    // Ensure the button has the necessary class
    backButton.classList.add('showBackButton');
  
    // Add event listener to the back button
    backButton.addEventListener('click', () => {
        const modalContent = document.querySelector('.modal-content');
        const calendarContent = document.querySelector('#calendar-content');
        const container = document.getElementById('rooms-container');
  
        // Adjust the modal styles if the modal content exists
        if (modalContent) {
            adjustModalStyles(modalContent); // Modify the modal window styles
        }
  
        // Clear the container content if the container exists
        if (container) {
            container.innerHTML = ''; // Clear the rooms container
        }
  
        // Display the calendar content if it exists
        if (calendarContent) {
            calendarContent.style.display = 'flex'; // Show the calendar
        }
  
        // Hide the back button after the action is completed
        backButton.classList.remove('showBackButton'); // Hide the back button
    });
}
  
// Helper function to adjust the styles of the modal window
function adjustModalStyles(modalContent) {
    modalContent.style.transition = 'width 0.5s ease, transform 0.5s ease';
  
    if (window.innerWidth <= 580) {
        modalContent.style.width = '98%';
        modalContent.style.minHeight = '98vh';
    } else if (window.innerWidth <= 768) {
        modalContent.style.width = '80%';
    } else if (window.innerWidth <= 1024) {
        modalContent.style.width = '70%';
    } else {
        modalContent.style.width = '50%';
    }
  
    modalContent.style.transform = 'scale(0.9)';
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

export function getImages(room) {
    // Initialize an empty array to store all images, including the main and secondary images
    const images = [];

    // Add the first image (main image)
    const mainImage = room._embedded.pictures[0];
    images.push({ url: mainImage.raw, alt: mainImage.picture_id });

    // Add the secondary images (all except the first one)
    const secondaryImages = room._embedded.pictures.slice(1);
    secondaryImages.forEach(pic => {
        images.push({ url: pic.raw, alt: pic.picture_id });
    });

    // Add images from add-ons (if any)
    const addons = room._embedded.addons;
    if (Array.isArray(addons)) {
        addons.forEach(addon => {
            // Check if there is an image for each addon
            if (addon.picture && addon.picture.raw) {
                images.push({ url: addon.picture.raw, alt: addon.addon_id });
            }
        });
    }

    // Return the array containing all images
    return images;
}
