document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const unordered = document.querySelector("#tasks")

  const newTask = document.querySelector("#create-task-form")
  newTask.addEventListener("submit", (event) => {
    event.preventDefault()
    const newTask2 = event.target['new-task-description'].value

    const newElement = document.createElement("li")
    newElement.textContent = newTask2
    unordered.append(newElement)


  })
});
