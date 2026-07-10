import { useReducer } from "react";
import StateNoteForm from "../State/StateNoteForm";
import StateNoteList from "../State/StateNoteList";


let nextId = 0;
const initialNotes = [
    { id: nextId++, item: "Beli Barang" },
    { id: nextId++, item: "Belajar Bahasa" }
];

function noteReducer(notes,action) {
    switch (action.type) {
        case "add":

         
            
            return [
            ...notes,
            {id:nextId++,
            item:action.item,
        }
        ]
        case "edit":
            return   notes.map((item)=> item.id === action.task.id ? action.task : item )
        case "delete":
            return  notes.filter( note => note.id !== action.id)
        default:
            return notes;
    }
}



export default function ReducerNoteApp(){
    const [notes, dispatch] = useReducer(noteReducer,initialNotes)
    console.log(notes);
    function handleAddNote(text) {
        dispatch({
            type:"add",
            item:text
        })
    }

    function handleDeleteNote(id) {
        dispatch({
            type:"delete",
            id:id
        })
    }


    function handleEditNote(taskObject){
        dispatch({
            type:"edit",
            task:taskObject
        })
    }


    return <>
            <h1>Note App</h1>
            <StateNoteForm onClick={handleAddNote}  ></StateNoteForm>
            <StateNoteList items={notes} onClickDelete={handleDeleteNote} onClickEdit={handleEditNote}  ></StateNoteList>
    </>

}