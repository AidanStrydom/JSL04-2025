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
];
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

    // Close modal
    // closeBtn.onclick = () => modal.style.display = "none";
    // window.onclick = (e) => {
    //   if (e.target === modal) modal.style.display = "none";
    // };

    function displayModal(id) {
      const task = initialTasks.find(t => t.id === id);
      console.log(task);

      // populate the dialog with task details
      const dialog = document.getElementById("taskDialog");
      let titleInput = dialog.querySelector('input[name="task-title"]');
      titleInput.value = task.title;
      let descInput = dialog.querySelector('textarea[name="task-description"]');
      descInput.value = task.description;
      let statusSelect = dialog.querySelector('select[name="task-status"]');
      statusSelect.value = task.status;
      dialog.showModal();
    }