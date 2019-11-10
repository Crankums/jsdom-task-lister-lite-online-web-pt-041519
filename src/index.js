document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector.('#create-task-form').addEventListener("submit", addToList)

  function addToList(event) {
    event.preventDefault()
    let task = document.getElementById("new-task-description").value
    let li = `<li>${}`
  }
});
