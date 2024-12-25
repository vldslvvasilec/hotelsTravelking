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
      <span id="close-modal" class="close-button">&times;</span>
      <div id="modal-body"></div>
    </div>
  </div>
`;

// Select DOM elements for easier reference
const buttonwrap = document.querySelector('.calendar-wraper'); // The wrapper for the "Open calendar" button
const button = document.querySelector('#open-calendar'); // The "Open calendar" button
const modal = document.querySelector('#modal-window'); // The modal window itself
const closeButton = document.querySelector('#close-modal'); // The close button inside the modal
const modalBody = document.querySelector('#modal-body'); // The body of the modal
const modalContent = document.querySelector('.modal-content'); // The content area of the modal

// Function to adapt the modal size based on the window width
function adaptModalSize() {
  if (window.innerWidth <= 580) {
    modalContent.style.width = '98%'; // Set width to 98% for small screens
    modalContent.style.minHeight = '98vh'; // Set minimum height to 98% of viewport height
  } else if (window.innerWidth <= 768) {
    modalContent.style.width = '80%'; // Set width to 80% for medium screens
    modalContent.style.minHeight = 'auto'; // Let height adjust automatically
  } else if (window.innerWidth <= 1024) {
    modalContent.style.width = '70%'; // Set width to 70% for large screens
    modalContent.style.minHeight = 'auto'; // Let height adjust automatically
  } else {
    modalContent.style.width = '50%'; // Set width to 50% for very large screens
    modalContent.style.minHeight = 'auto'; // Let height adjust automatically
  }
}

// Open the modal when the "Open calendar" button is clicked
button.addEventListener('click', () => {
  buttonwrap.classList.add('hidden'); // Hide the button wrapper
  modalBody.innerHTML = getModalContent(); // Load the modal content dynamically
  initializeCalendar(); // Initialize the calendar within the modal
  adaptModalSize(); // Adjust the modal size based on the current window size
  modal.classList.remove('hidden'); // Show the modal by removing the "hidden" class
});

// Close the modal when the close button (×) is clicked
closeButton.addEventListener('click', () => {
  modal.classList.add('hidden'); // Hide the modal
  buttonwrap.classList.remove('hidden'); // Show the button wrapper again
});

// Close the modal when clicking outside the modal content (on the overlay)
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add('hidden'); // Hide the modal if clicked outside the content
    buttonwrap.classList.remove('hidden'); // Show the button wrapper again
  }
});

// Adapt the modal size when the window is resized
window.addEventListener('resize', adaptModalSize); // Adjust modal size dynamically when the window size changes
