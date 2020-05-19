//Task Class
class Task {
    constructor(taskName, taskCode, taskDueDate, writerAssigned, comments) {
        this.taskName = taskName;
        this.taskCode = taskCode;
        this.taskDueDate = taskDueDate;
        this.writerAssigned = writerAssigned;
        this.comments = comments;
    }
}

//UI Class
class UI {
    static displayTasks() {
        const Tasks = [
            {
                taskName: 'English',
                taskCode: "234FH67",
                taskDueDate: "16/05/20 04:59",
                writerAssigned: "John Doe",
                comments: "Use APA Style"
            },
            {
                taskName: 'Biology',
                taskCode: "68GH67",
                taskDueDate: "18/05/20 04:59",
                writerAssigned: "Jane Doe",
                comments: "Use MLA Style"
            },
            {
                taskName: 'Biology',
                taskCode: "68GH67",
                taskDueDate: "18/05/20 04:59",
                writerAssigned: "Jane Doe",
                comments: "Use MLA Style"
            },
            {
                taskName: 'Biology',
                taskCode: "68GH67",
                taskDueDate: "18/05/20 04:59",
                writerAssigned: "Jane Doe",
                comments: "Use MLA Style"
            }


        ];
        const tasks = Tasks;

        tasks.forEach((task) => UI.addTaskToList(task));
    }
    static addTaskToList(task) {
        // console.log(task.comments)
        const list = document.querySelector('#task-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${task.taskName}</td>
            <td>${task.taskCode}</td>
            <td>${task.taskDueDate}</td>
            <td>${task.writerAssigned}</td>
            <td>${task.comments}</td>
            <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
        `;
        list.appendChild(row);
    }
    static clearFields() {
        document.querySelector('#task-name').value = '';
        document.querySelector('#task-code').value = '';
        document.querySelector('#task-due-date').value = '';
        document.querySelector('#task-writer').value = '';
        document.querySelector('#task-comment').value = '';

    }
}
// Store Class

// Display Tasks
document.addEventListener('DOMContentLoaded', UI.displayTasks);
// Add a Task
document.querySelector('#task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = document.querySelector('#task-name').value;
    const taskCode = document.querySelector('#task-code').value;
    const taskDueDate = document.querySelector('#task-due-date').value;
    const writerAssigned = document.querySelector('#task-writer').value;
    const comments = document.querySelector('#task-comment').value;

    let newComment = comments;
    console.log(newComment)
    // Instantiate Task
    const task = new Task(taskName, taskCode, taskDueDate, writerAssigned, newComment)
    console.log(task.newComment)
    // Add Task to UI
    UI.addTaskToList(task)

    // Clear Fields
    UI.clearFields()
});
// Remove a Book