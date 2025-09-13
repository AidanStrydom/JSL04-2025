/*const initialTasks = [
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
];*/
// test code
 // Array to store submitted tasks
    const tasks = [];

    const trigger = document.getElementById("popupTrigger");

    trigger.onclick = () => {
      // Create overlay
      const overlay = document.createElement("div");
      overlay.className = "popup-overlay";

      // Create popup
      const popup = document.createElement("div");
      popup.className = "popup";
      popup.innerHTML = `
        <h2>Add a Task</h2>
        <label for="taskName">Name</label>
        <input type="text" id="taskName" placeholder="Enter task name">

        <label for="taskDesc">Description</label>
        <textarea id="taskDesc" placeholder="Enter task description"></textarea>

        <label for="taskStatus">Status</label>
        <select id="taskStatus">
          <option value="todo">To Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>

        <button id="submitForm">Submit</button>
        <button id="closePopup">Close</button>
      `;

      overlay.appendChild(popup);
      document.body.appendChild(overlay);

      // Close button
      popup.querySelector("#closePopup").onclick = () => {
        overlay.remove();
      };

      // Handle submit button
      popup.querySelector("#submitForm").onclick = () => {
        const name = popup.querySelector("#taskName").value.trim();
        const desc = popup.querySelector("#taskDesc").value.trim();
        const status = popup.querySelector("#taskStatus").value;

        if (!name) {
          alert("Please enter a task name.");
          return;
        }

        // Store as an object
        const task = { name, description: desc, status };
        tasks.push(task);

        // Log array to console
        console.log("Tasks:", tasks);

        overlay.remove(); // close popup after submit
      };

      // Click outside closes
      overlay.onclick = (e) => {
        if (e.target === overlay) {
          overlay.remove();
        }
      };
    };