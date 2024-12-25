import { createBackButton, renderAmenities } from './functions';
import '../styles/renderRoom.scss';

// Function to render a single room
export function renderRoom(room) {
    // Create the main container for the room
    const roomElement = document.createElement("div");
    roomElement.classList.add("room-card");

    // Get the first picture and the amenities list from the room data
    const picture = room._embedded.pictures[0];
    const listAmenities = room._embedded.amenities;
    const roomSize = room.room_size_max;

    // Generate the amenities element using the helper function
    const amenitiesElement = renderAmenities(roomSize, listAmenities);

    // Set the inner HTML structure of the room element
    roomElement.innerHTML = `
        <h3>${room.name}</h3>
        <div class="room-content">
            <div class="room-image">
                <img src="${picture.raw}" alt="${room.name}" />
            </div>
            <div class="room-description">
                <p class="room-description-p">${room.description}</p>
            </div>
            <div class="room-price">
                <p class="room-price-eur">${room.full_formatted_price}</p>
                <p class="room-price-cap">Up to ${room.max_capacity} people</p>
                <button class="room-price-but">Book Now</button>
            </div>
        </div>
    `;

    // Append the amenities list to the room description block
    const descriptionElement = roomElement.querySelector(".room-description");
    descriptionElement.appendChild(amenitiesElement);

    return roomElement; // Return the completed room element
}

// Function to render multiple rooms
export function renderRooms(rooms) {
    // Select the container element where rooms will be rendered
    const container = document.getElementById("rooms-container");

    // Clear any existing content in the container
    container.innerHTML = "";

    // Create and add a "Back" button to the container
    const backButton = createBackButton();
    container.appendChild(backButton);

    // Loop through the rooms array and render each room
    rooms.forEach((room) => {
        const roomElement = renderRoom(room); // Render the individual room
        container.appendChild(roomElement); // Append the room element to the container
    });
}
