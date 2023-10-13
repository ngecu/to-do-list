var my_tasks = [
    { activity: "Check emails and prioritize tasks", complete: false },
    { activity: "Attend meetings and complete projects", complete: true },
];


var tasksContainer = document.querySelector('.tasks');
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');


function addTaskToDOM(taskText) {

    const newTask = { activity: taskText, complete: false };

    // Add the task to the array
    my_tasks.push(newTask);


    var taskElement = document.createElement('div');
    taskElement.classList.add('task');
    if (newTask.complete) {
        taskElement.classList.add('complete');
    }

    var actualTaskElement = document.createElement('div');
    actualTaskElement.classList.add('actual_task');
    if (newTask.complete) {
    actualTaskElement.innerHTML = `<ion-icon name="checkmark-done-circle"></ion-icon> ${newTask.activity}`;
    }
    else{
        actualTaskElement.innerHTML = `<ion-icon name="alert-circle"></ion-icon> ${newTask.activity}`;
    }
 
    var editDeleteContainerElement = document.createElement('div');
    editDeleteContainerElement.classList.add('edit_delete_container');

    var editContainerElement = document.createElement('div');
    editContainerElement.classList.add('edit_container');
    editContainerElement.innerHTML = '<ion-icon name="create"></ion-icon>';

    var cancelContainerElement = document.createElement('div');
    cancelContainerElement.classList.add('cancel_container');
    cancelContainerElement.innerHTML = '<ion-icon name="close-circle"></ion-icon>';

    editDeleteContainerElement.appendChild(editContainerElement);
    editDeleteContainerElement.appendChild(cancelContainerElement);
    taskElement.appendChild(actualTaskElement);
    taskElement.appendChild(editDeleteContainerElement);

    tasksContainer.appendChild(taskElement);


}

taskForm.addEventListener('submit', (event) =>{
    event.preventDefault(); 
    const taskText = taskInput.value.trim(); 

    if (taskText !== '') {
        addTaskToDOM(taskText);
        console.log(my_tasks);
        taskInput.value = '';
    }
});

my_tasks.forEach( (task) =>{

    var taskElement = document.createElement('div');
    taskElement.classList.add('task');
    if (task.complete) {
        taskElement.classList.add('complete');
    }

    var actualTaskElement = document.createElement('div');
    actualTaskElement.classList.add('actual_task');
    if (task.complete) {
    actualTaskElement.innerHTML = `<ion-icon name="checkmark-done-circle"></ion-icon> ${task.activity}`;
    }
    else{
        actualTaskElement.innerHTML = `<ion-icon name="alert-circle"></ion-icon> ${task.activity}`;
    }
 
    var editDeleteContainerElement = document.createElement('div');
    editDeleteContainerElement.classList.add('edit_delete_container');

    var editContainerElement = document.createElement('div');
    editContainerElement.classList.add('edit_container');
    editContainerElement.innerHTML = '<ion-icon name="create"></ion-icon>';

    var cancelContainerElement = document.createElement('div');
    cancelContainerElement.classList.add('cancel_container');
    cancelContainerElement.innerHTML = '<ion-icon name="close-circle"></ion-icon>';

    editDeleteContainerElement.appendChild(editContainerElement);
    editDeleteContainerElement.appendChild(cancelContainerElement);
    taskElement.appendChild(actualTaskElement);
    taskElement.appendChild(editDeleteContainerElement);

    tasksContainer.appendChild(taskElement);
});



