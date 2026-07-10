import { useState } from "react";
import StateNoteForm from "./StateNoteForm";
import StateNoteList from "./StateNoteList";



let id=0
let initialNote = [
    {
        id:id++,
        item:"Beli Barang",
    },
    {
        id:id++,
        item:"Belajar Bahasa",
    }
]



export default function StateNoteApp(){
    
    const [items,setItems] = useState(initialNote)



    function handleEditItem(object) {
        const newNote =  items.map((item)=> item.id === object.id ? object : item )

        setItems(newNote)
    }

    function handleAddItem(item){
        
        setItems([
            ...items,
            {id:id++,
            item:item,
        }
        ])
    }

    function handleDeleteItem(id) {
        const newNote = items.filter( note => note.id !== id)
        setItems(newNote)
    }
      
    console.log(items);
    




    return <>
        <h1>Note App</h1>
        <StateNoteForm onClick={handleAddItem}  ></StateNoteForm>
        <StateNoteList items={items} onClickDelete={handleDeleteItem} onClickEdit={handleEditItem}  ></StateNoteList>
    </>
}