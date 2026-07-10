import { useState } from "react"


export default function StateNote({item,onClickDelete,onClickEdit}){
    
    const [isEdit,setIsEdit] = useState(false)
    const [text, setText] = useState(item.item);
    let component = <></>


   

    if (isEdit){
        component = (<> 
        <input type="text" value={text}  onChange={(e)=> setText(e.target.value)} />
        <button onClick={()=> {
            setIsEdit(false)
            onClickEdit({
                id:item.id,
                item:text
            })
        }} >Save</button>
        <button onClick={()=> setIsEdit(false)}>Cancle</button>
        </>)
    }else{
       component = (<> 
               <p>{text}</p>
              <button onClick={()=> setIsEdit(true)} >Edit</button>
        <button onClick={()=> onClickDelete(item.id)} >Delete</button>
        </>)
    }

    return <div style={ {display:"flex", alignItems:"center", gap:"10px"}} >
        {component}
    </div>
}