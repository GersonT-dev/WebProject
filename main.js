document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  cars.forEach(car => {
    const section = document.createElement("section");
    section.classList.add("car-section");
    section.innerHTML = `
      <h2 class="section-title">${car.name}</h2>
      <div class="car-content-grid">
        <img src="${car.imageUrl}" alt="${car.altText}" class="car-image" />
        <p class="section-text">${car.description}</p>
      </div>
    `;
    main.appendChild(section);
  });

  // Add footer info
  const footer = document.querySelector("footer");
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
});
Sent from my iPhone

> On Oct 15, 2025, at 6:50 PM, Gerson Turcios <turciosg@cua.edu> wrote:
>
> ﻿// Individual car objects
