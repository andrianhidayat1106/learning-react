function sapa(nama){
    return "Hallo " + nama
}

const sapaArrow = (nama) => {
    return `Hello, ${nama}!`
}


const hitungTotal = (harga,qty) =>  harga*qty


console.log(sapa("Andrian Hidayat"))
console.log(sapaArrow("Andrian"))
console.log(hitungTotal(1000,3))