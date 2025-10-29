// main.js

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Get the main content area and the template element
    const main = document.querySelector("main");
    const template = document.getElementById("car-template");

    // Check if the cars data and template are available
    if (Array.isArray(cars) && template) {
        
        // --- Car Content Injection using Template Cloning ---
        cars.forEach(car => {
            // Clone the content of the template
            const clone = template.content.cloneNode(true);

            // Access the elements inside the clone using querySelector
            const sectionTitle = clone.querySelector(".section-title");
            const carImage = clone.querySelector(".car-image");
            const sectionText = clone.querySelector(".section-text");

            // Update the cloned elements with the car data
            sectionTitle.textContent = car.name;
            carImage.src = car.imageUrl;
            carImage.alt = car.altText;
            sectionText.textContent = car.description;

            // Append the fully populated clone to the main element
            main.appendChild(clone);
        });
    }

    // --- Footer Injection ---
    const footer = document.querySelector("footer");
    if (footer && contact && socialImage) {
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
