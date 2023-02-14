import "./TasksItem.css";
import ButtonClose from "../ButtonClose/ButtonClose";


function TaskItem({isDone, value, deleteTask, changeStatus}) {
    return (
      <li className={`task-item + ${isDone ? 'status-done' : ""}`}>
        <label>
          <input
            type='checkbox'
            name = "to_do"
            onClick={()=>changeStatus(value)}
            checked={isDone}
          />
          <p className="task-name">{value}</p>
        </label>
        <ButtonClose 
        value={value} 
        deleteTask={deleteTask} />
      </li>
    );
  }

  export default TaskItem;

  