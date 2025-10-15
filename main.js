// JavaScript source code
console.log("Hello World!" + `    this 


id  so fun ${34}`);

console.log(3 / 2);

if (true) {
    let x = 6;
    const y = 8;
    var z = 8;
    console.log(x + y + z);

    console.log("This is true");
}

document.addEventListener("DOMContentLoaded", () => {
  document.title = pageData.title;
  const main = document.querySelector("main");

  // Clear existing content
  main.innerHTML = "";

  // Add each car section
  pageData.sections.forEach(car => {
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

  // Footer contact and social image
  const footer = document.querySelector("footer");
  footer.innerHTML = `
    <div class="contact-info">
      <p>Email: ${pageData.contact.email}</p>
      <p>Phone: ${pageData.contact.phone}</p>
    </div>
    <div class="social-links">
      <p>Socials:</p>
      <img src="${pageData.socialImage.imageUrl}" alt="${pageData.socialImage.altText}" class="social-icon" />
    </div>
  `;
});
