import TaskItem from "./TaskItem"
import styles from "./styles/TaskItem.module.css"

function TaskList({todo,handleEdit,handleRemove}){
return (
    <div>
        <ul className={styles.containerList} >

            {todo.map((item)=>{

                return (

                    <TaskItem
                    key={item.id}
                    todo = {item}
                    handleEdit = {()=> handleEdit(item)}
                    handleRemove = {()=> handleRemove(item.id) }
                    
                    />
                )
            })}
        </ul>
    </div>
)
}
export default TaskList