import { useState, useEffect } from "react";

const key = "toDoList"
function Input() {
    const [input, setInput] = useState("")
    const [todo, setTodo] = useState([])


    useEffect(() => {
     const save =  localStorage.getItem(key)
        setTodo(save? JSON.parse(save): [])
    },[])

    useEffect(()=>{
   localStorage.setItem(key,JSON.stringify(todo))
    },[todo])
    const addTask = () => {
        if (!input.trim()) return

        setTodo([...todo,
        {
            id: Date.now(),
            text: input,
        }
        ])
        setInput("")
    }
    function taskRemove(id) {
        const taskFiltered = todo.filter((item) => item.id !== id)
        setTodo(taskFiltered)
    }
    return (
        <div className="app">

            <h1>to-do-list</h1>

            <div className="app-container">
                <input type="text"
                    value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={addTask}>adicionar</button>

            </div>

            <div className="app-content">
                <ul>
                    {todo.map((item, index) => {
                        return <li key={item.id}>{index + 1} tarefa:{item.text} <button onClick={() => taskRemove(item.id)}>remover</button></li>
                    })}
                </ul>

            </div>



        </div>
    )

}
export default Input
