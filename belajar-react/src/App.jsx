import { useState } from "react";

const PenghitungStok = ({namaBarang,stokAwal}) =>{
  
  const [sisaStok,setSisaStok] = useState(stokAwal);

  const kurangiStok = ()=>{
    if (sisaStok > 0){
      setSisaStok(sisaStok - 1)
    }
  }
  return (<>
    <h3>{namaBarang}</h3>
    <p>Sisa Stok:{sisaStok} </p>
    <button onClick={kurangiStok} >Kurangi Stok</button>
  </>)
}

export default PenghitungStok