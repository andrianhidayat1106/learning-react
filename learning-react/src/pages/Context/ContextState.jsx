import { createContext, useContext, useState } from "react";


const ColorContext = createContext()

export default function ContextState(){

    const [color,setColor] = useState("red")


    const handleChangeColor = (color)=>{
        setColor(color)
    }

    return <ColorContext.Provider value={{color,handleChangeColor}} >
        <ButtonComponent></ButtonComponent>
    </ColorContext.Provider>
    

}


function ButtonComponent() {
    const {color,handleChangeColor} = useContext(ColorContext)

    return <>
        <button style={{ backgroundColor: color, color: "white", padding: "10px" }} onClick={()=>handleChangeColor("Blue") } >ChangeColor</button>
    </>
}