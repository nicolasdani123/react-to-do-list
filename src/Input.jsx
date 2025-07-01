import { useState, useEffect,useRef } from "react"
import "./assets/App.css"

function Input() {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])
  const [edit,setEdit] = useState(null)
  const isrender = useRef(true)
  const key = "toDoList"
  const handleChangeInput = (e)=>{

    setInput(e.target.value)

  }


  const createTask = () => {
    if (!input.trim()) return

    setTodo([...todo, {
      id: Date.now(),
      value: input,
    }
    ])
    setInput("")
  }
  const saveTask = ()=>{
    if(!input.trim()) return

    if(edit !== null){
      const updatedTask = todo.map((item)=> {
  return item.id === edit ? {...item,value: input} :item




      })

      setTodo(updatedTask)
      setEdit(null)
      setInput("")
    }
  }
  const taskEdit = (item)=>{
 setInput(item.value)
 setEdit(item.id)
  }

  const taskRemove = (taskId) => {
    
      const taskFiltred = todo.filter((item) => item.id !== taskId)
      setTodo(taskFiltred)
    
  }

  useEffect(()=>{

    const getTask = JSON.parse(localStorage.getItem(key) || "[]")
    setTodo(getTask)


  },[])
  useEffect(()=>{
  if(isrender.current) {
    isrender.current = false
    return
  }
    localStorage.setItem(key,JSON.stringify(todo))
    
  },[todo])

  return (
    <div className="container">

      <h1>to-do-list</h1>
      <div className="container-content">
        <input type="text" value={input}
     onChange={handleChangeInput}
placeholder="digite uma nova tarefa" />
      <button onClick={edit? saveTask:createTask}> {edit? "salvar":"adicionar"}</button>
      </div>
      <div className="container-list">
        <ul>

          {todo.map((item) => {
            return <li key={item.id}><span>{item.value}</span> 
              
            <div className="group-button">
              <button className="button-edit" onClick={ ()=> taskEdit(item)}>editar</button> 
            <button className="button-delete" onClick={() => taskRemove(item.id)}>deletar</button>
            </div>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}
export default Input