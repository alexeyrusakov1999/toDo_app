import "./TasksList.css";
import TaskItem from "../TasksItem/TaskItem";


function TasksList( {priority, setTasks, tasks} ) {
  
  const changeStatus = (name) => {

    const newTasks = tasks.map(
      (task)=> task.name === name ? {...task, isDone: !task.isDone} : task);

      setTasks(newTasks);
  }

  const deleteTask = (name) => {
    setTasks(tasks.filter((task) => task.name !== name));
  }

  const priorityTasks = tasks.filter((task) => task.priority === priority)
  

  return (
    <ul className="tasks-list">
      {priorityTasks.map((task) =>
      <TaskItem
      key={Math.random()}
      isDone={task.isDone}
      value={task.name}
      deleteTask={deleteTask}
      changeStatus={changeStatus}
      />
      )}
    </ul>
  );
}

export default TasksList;