import StateNote from "./StateNote";

export default function StateNoteList({items,onClickDelete,onClickEdit}){



    return <ul>
        {items.map( (item) =>(<li key={item.id}>
            <StateNote item={item} onClickDelete={onClickDelete} onClickEdit={onClickEdit} ></StateNote>
            </li>) )}
    </ul>
}