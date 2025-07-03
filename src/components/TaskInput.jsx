import styles  from "./styles/TaskInput.module.css"
const TaskInput = ({ input, onChangeInput, edit, createTask }) => {
  return ( <div className={styles.app}>

    <div className= {styles.container}>
        <h1>toDoList in <br />React Js V1.0</h1>
      <input className= {styles.taskInput}
        type="text"
        value={input}
        onChange={onChangeInput}
        placeholder="Digite uma nova tarefa"
        />
      <button className={edit ? styles.buttonEdit: styles.button} onClick={createTask}>
        {edit ? "salvar" : "adicionar"}
      </button>
    </div>
        </div>
  );
};

export default TaskInput;
