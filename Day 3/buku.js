// Data of books, prices, and stock level
// The format of the array is ["Name of Book", Price of Book, Stock of Book]
let Buku1 = ["Intro to JavaScript", 11000, 10];
let Buku2 = ["Advanced JavaScript", 11000, 6];
let Buku3 = ["Introduction to Kotlin", 11000, 15];
let keranjangBelanja = [];
let textKeranjang = "";
let totalQty = 0;

// Loop entire menu
while(true){

    // Initial menu prompt
    var menu = prompt ("Menu:\n1. Daftar Buku\n2. Keranjang Belanja\n3. Payment\n4. Exit");

    // If menu is selected
    if (menu == 1 ){
        var pilihBuku = prompt (`Pilihan buku:\n1. ${Buku1[0]} - Harga ${Buku1[1]} - Stock ${Buku1[2]}\n2. ${Buku2[0]} - Harga ${Buku2[1]} - Stock ${Buku2[2]}\n3. ${Buku3[0]} - Harga ${Buku3[1]} - Stock ${Buku3[2]}`)
        if (pilihBuku == 1){
            var Qty = prompt (`Quantity?`)
            keranjangBelanja.push(Buku1[0], Qty)
        }
        else if (pilihBuku == 2){
            var Qty = prompt (`Quantity?`)
            keranjangBelanja.push(Buku2[0], Qty)
        }
        else if (pilihBuku == 3){
            var Qty = prompt (`Quantity?`)
            keranjangBelanja.push(Buku3[0], Qty)
        }
        else{
            alert(`Buku tidak ditemukan!`)
        }
        
    }

    // If shopping cart is selected
    if (menu == 2){
        for (let i=1; i<=keranjangBelanja.length/2; i++){
            textKeranjang += `${i}. ${keranjangBelanja[(i-1)*2]} - Qty ${keranjangBelanja[(i*2)-1]}\n`
            totalQty += Number(keranjangBelanja[(i*2)-1])
        }
        alert(textKeranjang);
    }

    // If checkout is selected
    if (menu == 3){
        var totalBayar = prompt(`${textKeranjang}\nTotal adalah ${totalQty*11000}\n\nTotal pembayaran?`)
        if (totalBayar > (totalQty*11000)){
            var kembalian = totalBayar - (totalQty*11000)
            alert(`Kembalian anda ${kembalian}`)
        }
        else if (totalBayar = (totalQty*11000)){
            alert(`Uang pas`)
        }
        else{
            alert(`Pembayaran anda tidak cukup`)
        }
    }

    // If exit is selected
    if (menu == 4){
        break;
    }
}

// console.log(keranjangBelanja);
// console.log(totalQty);