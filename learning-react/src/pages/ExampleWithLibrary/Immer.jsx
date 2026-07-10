import { useImmer } from "use-immer";
import FormImmer from "./FormImmer";
import ListImmer from "./ListImmer";
import { produce } from "immer";



export default function Immer() {


    const [listItem,setListItem] = useImmer([]) 

    const addListItem = (item) => {
        setListItem(
            (draft)=>{
                draft.push({
                id: listItem.length,
                name: item
            })
            }
        )

      
        
    }

    console.log(listItem);

    return <>

  
        <FormImmer onSubmit={addListItem} ></FormImmer>
        <ListImmer items={listItem}  ></ListImmer>

    </>
}