import { useReducer } from "react";
import StateNoteForm from "../State/StateNoteForm";
import StateNoteList from "../State/StateNoteList";
import { useImmerReducer } from "use-immer";


let nextId = 0;
const initialNotes = [
    { id: nextId++, item: "Beli Barang" },
    { id: nextId++, item: "Belajar Bahasa" }
];

function noteReducer(notes,action) {
    switch (action.type) {
        case "add":

         
            notes.push({id:nextId++,
            item:action.item})
           
            break;
        
        case "edit":
            const note =  notes.find((item)=> item.id === action.task.id )

            if (note){
              note.item = action.task.item;
            }
            break;
        case "delete":
            const index = notes.findIndex((note) => note.id === action.id);
            if (index !== -1) {
                notes.splice(index, 1);
            }
            break;
        default:
            break;
    }
}



export default function ImmerNoteApp(){
    const [notes, dispatch] = useImmerReducer(noteReducer,initialNotes)
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