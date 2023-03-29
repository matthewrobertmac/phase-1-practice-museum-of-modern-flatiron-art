fetch("http://localhost:3000/current-exhibits")
  .then((response) => response.json())
  .then((data) => populateData(data[0]))

function populateData(data) {
  console.log(data),
  exhibitTitle = document.getElementById("exhibit-title")
  exhibitTitle.textContent = data.title
  exhibitDescription = document.getElementById("exhibit-description")
  exhibitDescription.textContent = data.description
  exhibitImage = document.getElementById("exhibit-image")
  exhibitImage.src = data.image

}