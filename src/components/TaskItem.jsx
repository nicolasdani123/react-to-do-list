import styles from "./styles/taskItem.module.css"
function TaskItem({ todo, handleEdit, handleRemove }) {
  return (
    <li className= {styles.li}>
      <span  className= {styles.spanValue}>{todo.value}</span>

      <div className={styles.groupButtons}>
      <button  className={styles.buttonEdit} onClick={handleEdit}>editar</button>
      <button className={styles.buttonRemove} onClick={handleRemove}>remover</button>
      </div>
    </li>
  );
}

export default TaskItem;
