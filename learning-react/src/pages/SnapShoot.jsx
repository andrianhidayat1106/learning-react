import { useState } from "react"

export default function SnapShoot() {

    const [count, setCount] = useState(0)

    // mengubah data langsung ketika setCount
    const handlePlus = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    const handleMinus = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
    }


    return <>
        <button onClick={handlePlus}>+</button>
        <p>{count}</p>
        <button onClick={handleMinus}>-</button>
    </>
}