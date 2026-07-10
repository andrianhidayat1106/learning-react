import { useState } from "react"


export default function StateNoteForm({onClick}){
    
    const [item,setItem]= useState("")

    



    return <>
        <input type="text" value={item}  onChange={(e)=> {
            setItem(e.target.value)
        }} placeholder="Add Note"/>
        <button onClick={()=>{
            onClick(item)
            setItem("")
        }} >Add</button>
    </>
}