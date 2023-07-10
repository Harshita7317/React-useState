import { useState } from "react";
const Taskmanagement = () => {
  const [tasks, settasks] = useState([]);
  const [tasktitle, settasktitle] = useState("");
  const [taskdescp, settaskdescp] = useState("");
  const [taskduedate, settaskduedate] = useState([new Date()]);
  const createTask = () => {
    const oldtasks = [...tasks];
    const newTask = {
      taskname: tasktitle,
      taskdescription: taskdescp,
      taskdueDate: taskduedate,
      taskstatus: "To Do",
    };
    oldtasks.push(newTask);
    settasks(oldtasks);
  };
  const updatetask = (c) => {
    const oldtasks = [...tasks];

    oldtasks[c].taskstatus = "In Progress";

    settasks(oldtasks);
  };

  const deleteTask = (c) => {
    let oldtasks = [...tasks];
    const deltask = oldtasks.filter((v, i) => i !== c);
    settasks(deltask);
  };
  return (
    <>
      <div style={{ backgroundColor: "skyblue" }}>
        <h1>Task Management Dashboard</h1>
        <label>Task title</label>
        <input
          value={tasktitle}
          onChange={(e) => settasktitle(e.target.value)}
          type="text"
          placeholder="Enter your task"
        />
        <label>Task Description </label>
        <textarea
          value={taskdescp}
          onChange={(e) => settaskdescp(e.target.value)}
          type="text"
          placeholder="Task Desciption here"
        />
        <br />

        <label>Task Due Date </label>
        <input
          value={taskduedate}
          onChange={(e) => settaskduedate(e.target.value)}
          type="date"
        />

        <br />
        <button onClick={() => createTask()}>Create Task</button>
      </div>
      {tasks.map((v, i) => {
        return (
          <div key={i}>
            <h2>New Task</h2>
            <ul>
              <li> Title: {v.taskname} </li>
              <li>Desciption: {v.taskdescription}</li>
              <li>Date: {v.taskdueDate}</li>
              <li>Status: {v.taskstatus}</li>
            </ul>
            <button onClick={() => deleteTask(i)} type="button">
              Delete
            </button>
            <button onClick={() => updatetask(i)} type="button">
              Start task
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Taskmanagement;
