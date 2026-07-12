import { useEffect, useState } from "react"
import product from "../data/product.json"


export default function Effect() {

    const [listProduk,setListProduk] = useState([])
    const [loading,setLoading] = useState(true)
    


    useEffect(()=>{
        
        const getData = async ()=>{
            try{
            setListProduk(product)
            }finally{
                setLoading(false)
            }
        }
        
        getData()

        return console.log("clean up");
        
    },[loading])

    if (loading){
        return <h2>Sedang memuat produk...</h2>
    }
   
    


    return <>
        <h1>List Produk</h1>
        <ul>
            {listProduk.map((product)=>{
                return <li key={product.id} >{product.nama_produk}</li>
            })}
        </ul>
        <button onClick={()=>setLoading(false)} >Effect</button>
    </>
}