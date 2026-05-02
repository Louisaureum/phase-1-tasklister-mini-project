document.addEventListener("DOMContentLoaded", () => {
  // Get references to the form and tasks list
  const form = document.getElementById("create-task-form");
  const tasksList = document.getElementById("tasks");

  // Listen for form submission
  form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // Get the input value
    const input = document.getElementById("new-task-description");
    const taskDescription = input.value.trim();

    // Only add task if input is not empty
    if (taskDescription !== "") {
      // Create a new list item
      const li = document.createElement("li");
      
      // Create a span for the task text
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskDescription;
      
      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.marginLeft = "10px";
      
      // Add click event to delete button
      deleteButton.addEventListener("click", () => {
        li.remove();
      });
      
      // Add task text and delete button to the list item
      li.appendChild(taskSpan);
      li.appendChild(deleteButton);
      
      // Add the list item to the tasks list
      tasksList.appendChild(li);
      
      // Clear the input field
      input.value = "";
      input.focus();
    }
  });
});
