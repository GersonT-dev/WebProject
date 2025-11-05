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
    // main.js

[span_0](start_span)// 1. Get the element using a DOM access method[span_0](end_span)
const myButton = document.getElementById("myButton");
const messageElement = document.getElementById("message");

[span_1](start_span)[span_2](start_span)// 2. Define the action (using a Named Function or Anonymous Function)[span_1](end_span)[span_2](end_span)
function handleClick() {
    [span_3](start_span)// Set the text content[span_3](end_span)
    messageElement.textContent = "I was clicked!";
}

// 3. Attach the event listener (DOM Scripting method)
myButton.addEventListener("click", handleClick);

});
