const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById('addTask');

addTaskButton.addEventListener('click', function() {

    const tasktext = taskInput.value.trim();

    if(tasktext !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${tasktext}</span> 
            <button class="removeTask">ازالة</button>      
        `;
        taskList.appendChild(li);
        taskInput.value=""

        const removeTaskButton = document.querySelectorAll(".removeTask");
        removeTaskButton.forEach( function(button) {
            button.addEventListener("click", function() {
                li.remove();
            })
        })
    }
    
})

