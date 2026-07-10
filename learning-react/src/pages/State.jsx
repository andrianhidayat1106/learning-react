import { use, useState } from "react"


export default function State() {

    const [namaBarang, setNamaBarang] = useState("")
    const [count, setCount] = useState(1)
    const [barang,setBarang] = useState([])


    const handleCount = (type)=>{
        if (type === "+"){
            setCount(count + 1)
            return
        }

        if (count === 1){
            return alert("Minimal barang 1")
        }

        setCount(count - 1 )

    }

    const handleSetBarang = ()=>{

        if (namaBarang === "" ){
            return alert("Nama tidak boleh kosong")
        }

        let id = barang.length === 0 ? barang.length + 1 : barang.length

        const newBarang = {
            "id":id,
            "nama":namaBarang,
            "count":count
        }

        setBarang([...barang,newBarang])
        
    }

    return <>
        <h3>Nama Barang</h3>
        <input type="text" onChange={(e)=> setNamaBarang(e.target.value)}/>
        <hr />
        <br />
        <button onClick={()=> handleCount("+")}  >+</button>
        <h3>{count}</h3>
        <button onClick={()=> handleCount("-")}  >-</button>
        <hr />
        <button onClick={()=> handleSetBarang()} >Kirim</button>
        <hr />
        <h1>List Barang</h1>
        <ul>
            {
         barang.map((item) => (
    <li key={item.id}>{item.nama} | {item.count}</li>
))
            } 
            
        </ul>
    </>
}