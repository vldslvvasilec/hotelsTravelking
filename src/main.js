import './styles/global.scss';
import './styles/fixedPanel.scss';
import { getModalContent } from './Scripts/content.js';
import { initializeCalendar } from './Scripts/calendar.js';

// Inject HTML structure into the root element
document.querySelector('#root').innerHTML = `
  <div class="calendar-wraper">
    <button id="open-calendar">Open calendar</button>
  </div>
  <div id="modal-window" class="modal hidden">
    <div class="modal-content">
      <nav class="nav-menu">
        <span id="back-button" class="back-button">&#8656</span>
        <span id="close-modal" class="close-button">&times;</span>
      </nav>
      <div id="modal-body"></div>
    </div>
  </div>
`;

// Select DOM elements for easier reference
const buttonwrap = document.querySelector('.calendar-wraper'); // Wrapper for the "Open calendar" button
const button = document.querySelector('#open-calendar'); // "Open calendar" button
const modal = document.querySelector('#modal-window'); // Modal window
const closeButton = document.querySelector('#close-modal'); // Close button inside the modal
const modalBody = document.querySelector('#modal-body'); // Modal body to inject dynamic content
const modalContent = document.querySelector('.modal-content'); // Content area inside the modal
const backButton = document.querySelector('#back-button'); // Back button inside the modal

// Function to adapt the modal size based on the window width
function adaptModalSize() {
  if (window.innerWidth <= 580) {
    modalContent.style.width = '98%'; // Use almost full width for small screens
    modalContent.style.minHeight = '98vh'; // Set height to almost full viewport height
  } else if (window.innerWidth <= 768) {
    modalContent.style.width = '80%'; // Medium-sized modal for tablets
    modalContent.style.minHeight = 'auto'; // Auto height adjustment
  } else if (window.innerWidth <= 1024) {
    modalContent.style.width = '70%'; // Slightly smaller modal for larger screens
    modalContent.style.minHeight = 'auto'; // Auto height adjustment
  } else {
    modalContent.style.width = '50%'; // Default width for very large screens
    modalContent.style.minHeight = 'auto'; // Auto height adjustment
  }
}

// Open the modal when the "Open calendar" button is clicked
button.addEventListener('click', () => {
  buttonwrap.classList.add('hidden'); // Hide the "Open calendar" button wrapper
  modalBody.innerHTML = getModalContent(); // Dynamically load the content into the modal body
  initializeCalendar(); // Initialize the calendar functionality
  adaptModalSize(); // Adjust the modal size for the current window size
  modal.classList.remove('hidden'); // Show the modal by removing the "hidden" class
});

// Close the modal when the close button (×) is clicked
closeButton.addEventListener('click', () => {
  modal.classList.add('hidden'); // Hide the modal
  buttonwrap.classList.remove('hidden'); // Show the "Open calendar" button wrapper again
  backButton.classList.remove('showBackButton'); // Remove the back button's "visible" class
});

// Close the modal when clicking outside the modal content (on the overlay)
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add('hidden'); // Hide the modal
    buttonwrap.classList.remove('hidden'); // Show the "Open calendar" button wrapper again
    backButton.classList.remove('showBackButton'); // Remove the back button's "visible" class
  }
});

// Adapt the modal size when the window is resized
window.addEventListener('resize', adaptModalSize); // Dynamically adjust modal size when the window is resized
