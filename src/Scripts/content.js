export function getModalContent() {
  return `
    <div id="calendar-content">
      <h2 class="select-tittle">Select date</h2>
      <div id="calendar-container"></div>
    </div>
    <div id="rooms-container" class="rooms-container"></div>
    <div id="date-info">
      <div id="fixed-panel">
        <div class="panel-content">
          <section class="panel-date">
            <div class="panel-item">
              <p><strong>Start:</strong></p>
              <div class="data-cell" id="start-date">Not selected</div>
            </div>
            <div class="panel-item">
              <p><strong>End:</strong></p>
              <div class="data-cell" id="end-date">Not selected</div>
            </div>
          </section>
          <section class="panel-info">
            <div class="panel-item">
              <p><strong>Nights:</strong></p>
              <div class="data-cell" id="total-nights">0</div>
            </div>
            <div class="panel-item">
              <p><strong>Total Cost:</strong></p>
              <div class="data-cell" id="total-cost">0 $</div>
            </div>
            <div class="panel-item">
              <button id="book-now" disabled>Book Now</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
}