function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var tasksList = document.getElementById("tasks");
        var li = document.createElement("li");
        li.innerHTML = taskText + '<button class="deleteButton" onclick="deleteTask(this)">Delete</button>';
        tasksList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}

function deleteTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}