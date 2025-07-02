function TaskItem({ handleEdit, todo, handleRemove }) {

    return (
            <li>
                <span>{todo.value}</span>
                <div className="group-buttons">
                    <button onClick={handleEdit}>editar</button>
                    <button onClick={handleRemove}>remove</button>
                </div>
            </li>

    )

}
export default TaskItem