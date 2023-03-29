let commentsSection = document.getElementById("comments-section")
let form = document.getElementById("comment-form")
let button = document.getElementById("buy-tickets-button")
let ticketsBought = document.getElementById("tickets-bought")
let buyTickets = 0;



fetch("http://localhost:3000/current-exhibits")
  .then((response) => response.json())
  .then((data) => {
    firstData = (data[0]),
    addComments(firstData),
    populateData(data[0])
    
  })

form.addEventListener("submit", (e) => {
  e.preventDefault(),
  console.log(e.target["comment-input"].value),
  newComment = document.createElement("p")
  newComment.textContent = e.target["comment-input"].value
  commentsSection.append(newComment)
  // commentsSection.append(`\n \t${newComment}\n`)
})

function populateData(data) {
  console.log(data),
  exhibitTitle = document.getElementById("exhibit-title")
  exhibitTitle.textContent = data.title
  exhibitDescription = document.getElementById("exhibit-description")
  exhibitDescription.textContent = data.description
  exhibitImage = document.getElementById("exhibit-image")
  exhibitImage.src = data.image

}

function addComments(firstData) {
  let commentsArray = firstData.comments
  commentsArray.forEach((comment) => {
    oldComment = document.createElement("p")
    oldComment.textContent = comment
    commentsSection.append(oldComment)
  })
}


function interactiveButton() {
  button.addEventListener("click", () => {
    buyTickets++
    ticketsBought.textContent = `${buyTickets} Tickets Bought`
    console.log(ticketsBought.textContent)
  }
  )}

interactiveButton();
/*
When someone clicks the `buy-tickets-button` it updates the `tickets-bought` element so that it increments the number of tickets. Make sure to retain the text, it shouldn't just say `1` but instead say `1 Tickets Bought`.
*/

