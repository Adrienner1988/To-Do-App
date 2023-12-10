import { ChangeEvent, useState, MouseEvent } from "react"
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

interface Task {
    todoTask: string
}

const ToDo = () => {
    const [task, setTask] = useState<string>('');
    const [todoList, setTodoList] = useState<Task[]>([]);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
        if (event.target.name === 'task')
        setTask(event.target.value);
    }

    const addTask = (event: MouseEvent) => {
        event.preventDefault()
        const newTask = {todoTask: task};
        setTodoList([...todoList, newTask]);
        setTask('');
    }

    const removeTask = (itemToRemove: string) => {
        setTodoList(todoList.filter((item) => {
            return item.todoTask !== itemToRemove}));
    }

  return (
    <>
    <h2 className="funny-header">"Never put off till tomorrow what you can do the day after tomorrow just as well." - Mark Twain</h2>
    <div className="task-container">
        <form className="input-form">
            <input className="input" type="text" placeholder="Task" name="task" value={task} onChange={handleChange}/>

            <button className="add-btn" onClick={addTask}>Add <MdOutlineAddCircleOutline /></button>
        </form>
    </div>

    <div className="list-container">
    {todoList.length > 0 ? (
    todoList.map((item , index) => {
        return <div className="todo-item" key={index}>{item.todoTask}

        <button className="remove-btn" onClick={() =>{removeTask(item.todoTask)}}>Remove <GoChecklist /></button>
        </div>
    })
    ) : (
        <div className="no-task">
          <h3 className="empty">No Task Yet!</h3>
        </div> )}
    </div>
</>
  )
}
export default ToDo