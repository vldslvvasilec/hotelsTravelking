import { setupBackButton, renderAmenities, getImages } from './functions';
import { openImageModal } from './openImageModal';
import '../styles/renderRoom.scss';

export function renderRoom(room) {
    // Create the main container for the room
    const roomElement = document.createElement("div");
    roomElement.classList.add("room-card");

    // Get the pictures data from the getImages function
    const pictures = getImages(room);
    const listAmenities = room._embedded.amenities;
    const roomSize = room.room_size_max;

    // Generate the amenities element using the helper function
    const amenitiesElement = renderAmenities(roomSize, listAmenities);

    // Prepare the secondary images logic
    let secondaryImagesHtml = '';
    const displayedSecondaryImages = pictures.slice(1, 3); // Limit to the next 2 images after the main one
    const hasMoreThanTwoImages = pictures.length > 3;

    // Render the first two secondary images
    displayedSecondaryImages.forEach(image => {
        secondaryImagesHtml += `
            <section class="room-image-thumbnail">
                <img src="${image.url}" alt="${image.alt}" />
            </section>
        `;
    });

    // If there are more than 2 secondary images, show the SVG arrow
    if (hasMoreThanTwoImages) {
        secondaryImagesHtml += `
            <section class="room-image-thumbnail more-images-indicator">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M507-480 384-357l56 57 180-180-180-180-56 57 123 123ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                </svg>
            </section>
        `;
    }

    // Set the inner HTML structure of the room element
    roomElement.innerHTML = `
        <h3>${room.name}</h3>
        <div class="room-content">
            <section class="room-image">
                <section class="room-main">
                    <img src="${pictures[0].url}" alt="${pictures[0].alt}" /> <!-- Main image is now the first image -->
                </section>
                <section class="room-image-thumbnails">
                    ${secondaryImagesHtml} <!-- Add the secondary images and SVG here -->
                </section>
            </section>
            <section class="room-description">
                <p class="room-description-p">${room.description}</p>
            </section>
            <section class="room-price">
                <p class="room-price-eur">${room.full_formatted_price}</p>
                <p class="room-price-cap">Up to ${room.max_capacity} people</p>
                <button class="room-price-but">Book Now</button>
            </section>
        </div>
    `;

    // Append the amenities list to the room description block
    const descriptionElement = roomElement.querySelector(".room-description");
    descriptionElement.appendChild(amenitiesElement);

    // Event handler for image click (either main or secondary)
    const images = roomElement.querySelectorAll('.room-main img, .room-image-thumbnail img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            const clickedImageAlt = image.alt || 'default alt';
            const allImages = pictures.map(pic => ({url: pic.url, alt: pic.alt})); // Pass all images to the modal
            openImageModal(allImages, clickedImageAlt); // Pass all images and alt of the clicked image
        });
    });

    // Event handler for clicking on the SVG icon
    const svgIcon = roomElement.querySelector('.room-image-thumbnail.more-images-indicator svg');
    if (svgIcon) {
        svgIcon.addEventListener('click', () => {
            // When SVG is clicked, pass the alt of the main image (first image)
            const mainImageAlt = pictures[0].alt;
            const allImages = pictures.map(pic => ({url: pic.url, alt: pic.alt})); // Pass all images to the modal
            openImageModal(allImages, mainImageAlt); // Pass all images and alt of the main image
        });
    }

    return roomElement; // Return the completed room element
}



// Function to render rooms
export function renderRooms(rooms) {
    const container = document.getElementById('rooms-container');
    const backButton = document.querySelector('#back-button');
  
    container.innerHTML = ''; // Clear the container's content
  
    // Make the "Back" button visible
    setupBackButton();
  
    // Add rooms
    const fragment = document.createDocumentFragment(); // Optimization for adding elements
  
    rooms.forEach((room) => {
      const roomElement = renderRoom(room);
      fragment.appendChild(roomElement);
    });
  
    container.appendChild(fragment); // Add rooms to the container
}

