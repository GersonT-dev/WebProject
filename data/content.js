// This displays car images and text from `cars` array
const carList = document.getElementById('car-list');

cars.forEach(car => {
  const carDiv = document.createElement('div');
  carDiv.style.marginBottom = "2em"; // spacing between cars
  carDiv.innerHTML = `
    <h2>${car.name}</h2>
    <img src="${car.imageUrl}" alt="${car.altText}" style="max-width:300px;display:block;">
    <p>${car.description}</p>
  `;
  carList.appendChild(carDiv);
});
