import "./ButtonClose.css";

function ButtonClose({deleteTask, value}) {
  return (
    <button
      className="btn-exit"
      type="button"
      onClick = {() => deleteTask(value)}
    ></button>
  );
}

export default ButtonClose;

