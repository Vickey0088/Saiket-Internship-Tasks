function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return alert("Please enter a task");
  
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
  
    const buttons = document.createElement("div");
    buttons.classList.add("task-buttons");
  
    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.classList.add("complete");
    completeBtn.onclick = () => {
      li.classList.toggle("completed");
    };
  
    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.classList.add("edit");
    editBtn.onclick = () => {
      const newText = prompt("Edit your task:", span.textContent);
      if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
      }
    };
  
    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => {
      taskList.removeChild(li);
    };
  
    buttons.appendChild(completeBtn);
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
  
    li.appendChild(span);
    li.appendChild(buttons);
    taskList.appendChild(li);
  
    input.value = "";
  }
  