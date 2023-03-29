let commentsSection = document.getElementById("comments-section")
let form = document.getElementById("comment-form")


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