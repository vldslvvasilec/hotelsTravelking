export async function getAvailableCheckins(dateStart, dateEnd, adults, children = []) {
    // Construct the API URL with query parameters
    const url = `https://api.travelcircus.net/hotels/15823/checkins?E&party=${encodeURIComponent(JSON.stringify({ adults, children }))}&domain=de&date_start=${dateStart}&date_end=${dateEnd}`;

    try {
        // Make an API request to fetch available check-ins
        const response = await fetch(url);

        // Check if the response is not OK and throw an error if necessary
        if (!response.ok) {
            throw new Error('Error during request: ' + response.status);
        }

        // Parse the JSON response
        const data = await response.json();
        
        // Extract the relevant hotel availability data
        const frontData = data._embedded.hotel_availabilities;
        
        return frontData; // Return the extracted data
    } catch (error) {
        // Log the error to the console for debugging
        console.error('Error:', error);
        
        return null; // Return null in case of an error
    }
}
