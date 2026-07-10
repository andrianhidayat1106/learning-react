import { useImmer } from "use-immer"

export default function ListImmer ({items}){

   

    
    return <>
        <h1>List</h1>
        <ul>
            {items.map((item)=>{
                return <li>{item.name}</li>
            })}
        </ul>
    </>
}