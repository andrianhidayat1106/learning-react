import { useState } from "react"

export default function Render() {

    const [count, setCount] = useState(0)


    const handlePlus = () => {
        setCount(count + 1)
    }

    const handleMinus = () => {
        setCount(count - 1)
    }


    return <>
        <button onClick={handlePlus}>+</button>
        <p>{count}</p>
        <button onClick={handleMinus}>-</button>
    </>
}