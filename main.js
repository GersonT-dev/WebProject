// main.js

document.addEventListener("DOMContentLoaded", () => {
  // Select the main content area
  const main = document.querySelector("main");
  
  // Use a string to build all the car sections
  let carHTML = ""; 

  // Loop through the 'cars' array (defined in data/content.js)
  if (Array.isArray(cars)) {
    cars.forEach(car => {
      // Build the HTML section for each car
      carHTML += `
        <section class="car-section">
          <h2 class="section-title">${car.name}</h2>
          <div class="car-content-grid">
            <img src="${car.imageUrl}" alt="${car.altText}" class="car-image" />
            <p class="section-text">${car.description}</p>
          </div>
        </section>
      `;
    });
    // Inject all car sections into the main element
    main.innerHTML = carHTML;
  }

  // Inject footer info
  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = `
      <div class="contact-info">
        <p>Email: ${contact.email}</p>
        <p>Phone: ${contact.phone}</p>
      </div>
      <div class="social-links">
        <p>Socials:</p>
        <img src="${socialImage.imageUrl}" alt="${socialImage.altText}" class="social-icon" />
      </div>
    `;
  }
});
