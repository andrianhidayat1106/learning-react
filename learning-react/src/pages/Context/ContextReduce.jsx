import { createContext, useContext, useReducer, useState } from "react";
import { useImmerReducer } from "use-immer";


const ReduceContext = createContext() 

let id=0
const initialTodos = [
    {
        id:id++,
        name:"Belajar"
    },
    {
        id:id++,
        name:"Main"
    }
]

function todosReduce(draft,action) {
    

    if(action.type == "ADD") {
        draft.push({
             id:id++,
            name:action.name
        })
        return 
    }

}


export default function ContextReduce() {
    
    const [todos,dispatch] = useImmerReducer(todosReduce,initialTodos)
    
    
    return <ReduceContext.Provider value={{todos,dispatch}}>
        <InputTodo></InputTodo>
    </ReduceContext.Provider>

}

function InputTodo() {
    const {todos,dispatch} = useContext(ReduceContext)
    const [name,setName] = useState("")
    return <>
            <h1>Input</h1>
            <input type="text" onChange={(e)=> setName(e.target.value) } />
            <button onClick={()=>dispatch({type:"ADD",name:name})} >Simpan</button>
            <h1>List</h1>
            <ul>
                {todos.map((todo)=> {
                    return (<li key={todo.id} >{todo.name}</li>)
                })}
            </ul>
    </>
}