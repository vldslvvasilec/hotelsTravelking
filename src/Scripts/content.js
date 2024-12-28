export function getModalContent() {
  return `
    <div id="calendar-content">
      <h2 class="select-tittle">Select date</h2>
      <section id="calendar-container"></section>
    </div>
    <div id="rooms-container" class="rooms-container"></div>
    <div id="date-info">
      <div id="fixed-panel">
        <div class="panel-content">
          <section class="panel-date">
            <section class="panel-item">
              <p><strong>Start:</strong></p>
              <section class="data-cell" id="start-date">Not sel.</section>
            </section>
            <section class="panel-item">
              <p><strong>End:</strong></p>
              <section class="data-cell" id="end-date">Not sel.</section>
            </section>
          </section>
          <section class="panel-info">
            <section class="panel-item">
              <p><strong>Nights:</strong></p>
              <section class="data-cell" id="total-nights">0</section>
            </section>
            <section class="panel-item">
              <p><strong>Total Cost:</strong></p>
              <section class="data-cell" id="total-cost">0 $</section>
            </section>
            <section class="panel-item">
              <button id="book-now" disabled>Book Now</button>
            </section>
          </section>
        </div>
      </div>
    </div>
  `;
}