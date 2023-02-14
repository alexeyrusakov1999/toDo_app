import React from "react";
import "./App.css";
import { tasks, PRIORITY } from "../Tasks/Tasks";
import PrioritySection from "../PrioritySection/PrioritySection";
import { useState, useEffect } from "react";

const taskList = [{title: 'High', priority: PRIORITY.HIGH}, {title: 'Low', priority: PRIORITY.LOW}];




function App() {

  const [stateTasks, setStateTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || tasks);

  useEffect(()=> {
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify(stateTasks))
    }
  }, [stateTasks]);


  const addTask = (task) => {
    setStateTasks([...stateTasks, task]);
    localStorage.setItem('tasks', JSON.stringify(stateTasks))
  }


  return (
    <section className="container">
    <div className="to-do-list">
    {taskList.map(({title, priority})=>
    <PrioritySection
    title={title}
    priority={priority}
    addTask={addTask}
    tasks={stateTasks}
    setTasks={setStateTasks}
    key={Math.random()}
    />)}
    </div>
  </section>
  );
}

export default App;