import { useState } from "react"

function Conditional() {
    const [listTask, setListTask] = useState([
        { id: 1, task: "Makan", isChecked: false },
        { id: 2, task: "Belajar", isChecked: false }
    ])

    const handleChecked = (id) => {
        const updateChecked = listTask.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isChecked: !todo.isChecked }
            }
            return todo
        })


        setListTask(updateChecked)
    }

    return <div>
        {listTask.map((task) => {

            return (<li key={task.id}>
                <ul style={{ textDecoration: task.isChecked ? "line-through" : "none" }}>{task.task}</ul>
                <input type="checkbox" onChange={() => handleChecked(task.id)}
                />
            </li>)
        })}
    </div>


}
export default Conditional