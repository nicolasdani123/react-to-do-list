import { useEffect, useState, useRef } from "react"

import TaskInput from "./components/TaskInput"
import TaskItem from "./components/taskItem"
import TaskList from "./components/TaskList"

function App() {
  const [input, setInput] = useState("")
  const [edit, setEdit] = useState(null)
  const [todo, setTodo] = useState([])
  const isLocalStorage = useRef(true)

  const key = "todolist"

  const onChangeInput = (event) => {
    setInput(event.target.value)
  }

  const createTask = () => {
    if (!input.trim()) return

    const uptade = edit !== null ? todo.map((item) => item.id === edit ? { ...item, value: input } : item) :
      [...todo, { id: Date.now(), value: input }]


    setTodo(uptade)
    setInput("")
    setEdit(null)

  }

  const handleEdit = (item) => {

    setEdit(item.id)
    setInput(item.value)
  }

  const handleRemove = (idRemove) => {
    const taskFiltered = todo.filter((item) => item.id !== idRemove)
    setTodo(taskFiltered)
  }
  useEffect(() => {
    const saveLocalStorage = JSON.parse(localStorage.getItem(key) || "[]")
    setTodo(saveLocalStorage)
  }, [])

  useEffect(() => {
    if (isLocalStorage.current) {
      isLocalStorage.current = false
      return

    }
    localStorage.setItem(key, JSON.stringify(todo))
  }, [todo])


  return (
    <div className="container">
   
   <TaskInput 
   input={input}
   onChangeInput = {onChangeInput}
   edit = {edit}
   createTask = {createTask}
   
   
   />
<TaskList
 todo = {todo}
 handleEdit = {handleEdit}
 handleRemove = {handleRemove}
/>
   


    </div>
  )

}
export default App