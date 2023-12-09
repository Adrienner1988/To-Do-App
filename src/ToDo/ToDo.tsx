import { ChangeEvent, useState, MouseEvent } from "react"


interface Task {
    todoTask: string
    
}

const ToDo = () => {
    const [task, setTask] = useState<string>('');
    const [todoList, setTodoList] = useState<Task[]>([]);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
        if (event.target.name === 'task')
        setTask(event.target.value)
    }

    const addTask = (event: MouseEvent) => {
        event.preventDefault()
        const newTask = {todoTask: task}
        setTodoList([...todoList, newTask]);
        setTask('')
    }

    const removeTask = (itemToRemove: string) => {
        setTodoList(todoList.filter((item) => {
            return item.todoTask !== itemToRemove}))
        
    }

  return (
    <>
    <h2 className="funny-header">"Never put off till tomorrow what you can do the day after tomorrow just as well." - Mark Twain</h2>
    <div className="task-container">
        <form className="input-form">
            <input type="text" placeholder="Add Task" name="task" value={task} onChange={handleChange}/>
            <button onClick={addTask}>Add</button>
        </form>
    </div>

    <div className="list-container">
    {todoList.length > 0 ? (
    todoList.map((item , index) => {
        return <div key={index}>{item.todoTask}
        <button onClick={() =>{removeTask(item.todoTask)}}>Remove</button>
        </div>
    })
    ) : (
        <div className="no-task">
          <h3 className="empty">Nothing To Do Yet!</h3>
        </div> )}
    </div>
</>
  )
}
export default ToDo