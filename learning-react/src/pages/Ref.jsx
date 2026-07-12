import { useRef, useState } from "react"


export default function Ref() {

    const [wakut,setWaktu] = useState(0)
    const timerRef = useRef(null)
    const buttonRef = useRef(null)
    const mulaiTimer = ()=>{
        if (timerRef.current !== null){
            return
        }

        timerRef.current = setInterval(()=>{
            setWaktu((time)=> time + 1)
        },1000)

        buttonRef.current.innerText = ""
    }

    const stopTimer = ()=> {
        clearInterval(timerRef.current)
        buttonRef.current.innerText = "Start"
    }

    return <>
        <h1>Timer :{wakut} </h1>
        <div>
        <button ref={buttonRef} onClick={()=>mulaiTimer()}>Start</button>
        <button onClick={stopTimer} >Stop</button>
        </div>

    </>
}