import { useState,useEffect } from "react";

const DaftarProdukPos = ()=> {
    const [produk,setProduk] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        console.log("Memulai Proses tarik data dari server");

        const timer = setTimeout(()=>{
            const data = [
                { id: 1, nama: "Kopi Susu", harga: 15000 },
                { id: 2, nama: "Roti Bakar", harga: 12000 },
                { id: 3, nama: "Es Teh", harga: 5000 }
            ]

            setProduk(data)
            setLoading(false)
        })
    })
}