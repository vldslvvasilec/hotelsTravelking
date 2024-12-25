import { renderRooms } from "./renderRooms";

// Function to format a given date into "YYYY-MM-DD" format
function formatDate(date) {
    const d = new Date(date); // Convert input to a Date object
    const year = d.getFullYear(); // Extract the year
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Extract the month and pad with zero if needed
    const day = String(d.getDate()).padStart(2, "0"); // Extract the day and pad with zero if needed
    return `${year}-${month}-${day}`; // Return the formatted date string
}

// Function to send check-in and check-out dates to the API
export function sendDatesToApi(checkinDate, checkoutDate) {
    // Base API URL for fetching room quotes
    const apiBase = "https://api.travelcircus.net/hotels/15823/quotes";

    // Format the provided dates into the required API format
    const formattedCheckinDate = formatDate(checkinDate);
    const formattedCheckoutDate = formatDate(checkoutDate);

    // Construct the API request URL with parameters for locale, dates, party, and domain
    const url = `${apiBase}?locale=de_DE&checkin=${formattedCheckinDate}&checkout=${formattedCheckoutDate}&party=%7B%22adults%22:2,%22children%22:[]%7D&domain=de`;

    // Send the API request using the GET method
    fetch(url, { method: "GET" })
        .then((response) => {
            // Check if the response is not OK (e.g., 4xx or 5xx status codes)
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`); // Throw an error with status information
            }
            return response.json(); // Parse the JSON response
        })
        .then((data) => {
            // Extract the list of rooms from the API response
            const rooms = data._embedded?.hotel_quotes || []; // Use an empty array as a fallback if no data is available
            renderRooms(rooms); // Render the rooms using the provided function
        })
        .catch((error) => {
            // Log any errors that occurred during the API request or data handling
            console.error("Error while making the API request:", error);
        });
}
