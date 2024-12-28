import '../styles/imageModal.scss';

export function openImageModal(allImages, clickedImageAlt) {
    // Get the root element and modalStart element
    const root = document.querySelector('#root');
    const modalStart = document.querySelector('#modal-window');

    // Check if the modal window already exists
    let modal = document.querySelector('.full-image-modal');
    if (!modal) {
        // If the modal doesn't exist, create it
        modal = document.createElement("div");
        modal.classList.add("full-image-modal");

        // Create and add a close button for the modal
        const fullImgClose = document.createElement("button");
        fullImgClose.classList.add('modal-close');
        fullImgClose.textContent = 'x';

        // Add an event listener to the close button to hide the modal when clicked
        fullImgClose.addEventListener('click', () => {
            modal.style.display = "none"; // Hide the modal window
            if (modalStart) {
                modalStart.classList.remove('hidden'); // Show modalStart
            }
        });

        // Append the close button to the modal and the modal to the root
        modal.appendChild(fullImgClose);
        root.appendChild(modal);
    }

    // Check and clear the existing mainFullImage container if it exists
    let mainFullImage = modal.querySelector(".main-full-image");
    if (mainFullImage) {
        mainFullImage.innerHTML = ""; // Clear the old content
    } else {
        mainFullImage = document.createElement("section");
        mainFullImage.classList.add('main-full-image');
        modal.appendChild(mainFullImage);
    }

    // Check and remove the existing image container
    let existingImageContainer = modal.querySelector(".modal-images-list");
    if (existingImageContainer) {
        existingImageContainer.remove();
    }

    // Use the new function to render images
    const imageContainer = renderImages(allImages, clickedImageAlt, mainFullImage);

    // Append the new image container to the modal
    modal.appendChild(imageContainer);

    // Show the modal window
    modal.style.display = "flex";

    // Hide modalStart
    if (modalStart) {
        modalStart.classList.add('hidden');
    }

    // Add event listener to close the modal when the Esc key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = "none"; // Hide the modal window
            if (modalStart) {
                modalStart.classList.remove('hidden'); // Show modalStart
            }
        }
    });
}


function renderImages(allImages, clickedImageAlt) {
    const imageContainer = document.createElement("section");
    imageContainer.classList.add("modal-images-list");

    const mainFullImage = document.querySelector(".main-full-image");
    let currentIndex = allImages.findIndex(image => String(image.alt) === clickedImageAlt);
    if (currentIndex === -1) {
        currentIndex = 0; // If no match is found, set the first image as the default
    }

    // Function to update the main full image
    const updateMainFullImage = () => {
        if (allImages[currentIndex]) {
            mainFullImage.innerHTML = ""; // Clear the section content
            const fullImageElement = document.createElement("img");
            fullImageElement.src = allImages[currentIndex].url;
            fullImageElement.alt = allImages[currentIndex].alt;
            fullImageElement.classList.add("full-image");
            mainFullImage.appendChild(fullImageElement);

            // Update the active-image class
            const allImagesInContainer = imageContainer.querySelectorAll(".modal-image-item");
            allImagesInContainer.forEach((img, index) => {
                img.classList.toggle("active-image", index === currentIndex);
            });
        }
    };

    // Function to switch images based on direction (next or previous)
    const changeImage = (direction) => {
        currentIndex = (currentIndex + direction + allImages.length) % allImages.length; // Cyclical switching
        updateMainFullImage();
    };

    // Function to add keyboard navigation events
    const addKeyboardNavigation = () => {
        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") {
                changeImage(-1); // Switch to the previous image
            }
            if (e.key === "ArrowRight") {
                changeImage(1); // Switch to the next image
            }
        });
    };

    // Function to add touch navigation events
    const addTouchNavigation = () => {
        let touchStartX = 0;
        let touchEndX = 0;

        imageContainer.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        imageContainer.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                changeImage(1); // Switch to the next image when swiping left
            }
            if (touchEndX - touchStartX > 50) {
                changeImage(-1); // Switch to the previous image when swiping right
            }
        });
    };

    // Create the "Back" arrow (SVG)
    const leftArrowElement = document.createElement("section");
    leftArrowElement.classList.add("arrow", "arrow-left");
    leftArrowElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff">
            <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
    `;
    leftArrowElement.addEventListener("click", () => changeImage(-1)); // Switch to the previous image
    imageContainer.appendChild(leftArrowElement);

    // Create img elements for each image in the list
    allImages.forEach((image, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.url;
        imgElement.alt = image.alt;
        imgElement.classList.add("modal-image-item");

        // Check if the alt text matches the clickedImageAlt
        if (index === currentIndex) {
            imgElement.classList.add("active-image"); // Add the active-image class to the current image
        }

        // Add click event to change the current image when clicked
        imgElement.addEventListener("click", () => {
            currentIndex = index; // Set the new current index
            updateMainFullImage();
        });

        imageContainer.appendChild(imgElement);
    });

    // Create the "Forward" arrow (SVG)
    const rightArrowElement = document.createElement("section");
    rightArrowElement.classList.add("arrow", "arrow-right");
    rightArrowElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff">
            <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
    `;
    rightArrowElement.addEventListener("click", () => changeImage(1)); // Switch to the next image
    imageContainer.appendChild(rightArrowElement);

    // Initialize the main full image with the active image
    updateMainFullImage();

    // Add keyboard and touch navigation event handlers
    addKeyboardNavigation();
    addTouchNavigation();

    return imageContainer;
}
