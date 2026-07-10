import { useState } from "react"


export default function FormImmer({onSubmit}){


    const [item,setItem] = useState("")

    function handleClick (e){
        e.preventDefault()


        onSubmit(item)
        setItem("")
    }
    



    return <>
        <h1>Create</h1>
        <input type="text"  onChange={(e)=> setItem(e.target.value) } />
        <button onClick={(e)=> handleClick(e)}  >Add</button>
    </>
}
