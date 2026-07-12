import { useMemo, useState } from "react"


const dataProdukSemua = [
    { id: 1, nama: 'Sepatu Lari Nike' },
  { id: 2, nama: 'Sepatu Bola Adidas' },
  { id: 3, nama: 'Baju Olahraga Puma' },
  { id: 4, nama: 'Baju Santai Erigo' },
  { id: 5, nama: 'Topi Tenis Reebok' },
  { id: 6, nama: 'Celana Pendek Specs' },
]


export default function Memo() {

    const [pencarian,setPencarian] = useState('')


    const produkDisaring = useMemo(()=>{


        return dataProdukSemua.filter((produk)=>{
            return produk.nama.toLowerCase().includes(pencarian.toLocaleLowerCase())
        })
    },[pencarian])




    return <>
    <input type="text" onChange={(e)=>setPencarian(e.target.value)} />
    <h1>List Pencarian</h1>
    <ul>
        { produkDisaring.map((produk)=>{

            return <li key={produk.id} >{produk.nama}</li>
        }) }
    </ul>
    </>
}