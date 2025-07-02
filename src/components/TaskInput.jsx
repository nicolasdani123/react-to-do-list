function TaskInput({onChangeInput,input,createTask,handleEdit,edit}) {



 return (


 <div>
    <input type="text" value={input}
     onChange={onChangeInput} placeholder="digite uma nova tarefa" />
     <button onClick={createTask}>{edit? "salvar":"adicionar"}</button>
 </div>
 )
}
export default TaskInput