import React from 'react';
import "./PrioritySection.css";
import Form from '../Form/Form';
import TasksList from '../TasksList/TasksList';


function PrioritySection({title, priority, tasks, setTasks, addTask}) {
  return (
    <fieldset className="tasks-wrapper">
        <legend>{title}</legend>
      <Form 
        addTask={addTask}
        priority={priority}
      />
      <TasksList 
        priority={priority}
        setTasks={setTasks}
        tasks={tasks}
      /> 
    </fieldset>
  )
}

export default PrioritySection;