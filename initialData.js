const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },
  

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
  {
   id: 14,
   title: "Conquer Svelt ⚛️",
   description: 
    "Learn Svelt and build amazing web apps",
    status: "todo",
  },
  {
    id: 15,
    title: "Crush Frameworks🖼️",
    description: 
      "Get comfortable with React, Angular, and Vue",
    status: "todo",
  }
];

   // makes it visible
// test code
   

    const todoTasks = initialTasks.filter(t => t.status === "todo");

    // Generate tasks from array
    todoTasks.forEach(element => {
      const div = document.createElement("div");
      div.className = "task";
      div.textContent = element.title;
      div.onclick = () => displayModal(element.id);
      document.querySelector(".tasks-todo").appendChild(div);
    });

    const doingTasks = initialTasks.filter(t => t.status === "doing");

    // Generate tasks from array
    doingTasks.forEach(element => {
      const div = document.createElement("div");
      div.className = "task";
      div.textContent = element.title;
      div.onclick = () => displayModal(element.id);
      document.querySelector(".tasks-doing").appendChild(div);
    });

    const doneTasks = initialTasks.filter(t => t.status === "done");

    // Generate tasks from array
    doneTasks.forEach(element => {
      const div = document.createElement("div");
      div.className = "task";
      div.textContent = element.title;
      div.onclick = () => displayModal(element.id);
      document.querySelector(".tasks-done").appendChild(div);
    });

 

    document.addEventListener("DOMContentLoaded", () => {
      const closeIcon = document.getElementById("closeDialog");
      const dialog = document.getElementById("taskDialog");
      if (closeIcon && dialog) {
      closeIcon.onclick = () => dialog.close();
      }
    });

   


    function displayModal(id) {
      const task = initialTasks.find(t => t.id === id);
    
      // populate the dialog with task details

      const dialog = document.getElementById("taskDialog");
      let titleInput = dialog.querySelector('input[name="taskTitle"]');
      titleInput.value = task.title;
      let descInput = dialog.querySelector('textarea[name="taskDescription"]');
      descInput.value = task.description;
      let statusSelect = dialog.querySelector('select[name="taskStatus"]');
      statusSelect.value = task.status;
      dialog.showModal();
    }