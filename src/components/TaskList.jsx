import TaskItem from "./taskItem"
function TaskList({todo,handleEdit,handleRemove}){
return (
    <div className="container">

        <ul>
            {todo.map((item)=> {
                return (

                    <TaskItem
                    
                    key={item.id}
                    todo={item}
                    handleEdit={()=> handleEdit(item)}
                    handleRemove={()=> handleRemove(item.id)}
                    
                    />
                )
            })}


        </ul>
         
    </div>
)
}
export default TaskList
