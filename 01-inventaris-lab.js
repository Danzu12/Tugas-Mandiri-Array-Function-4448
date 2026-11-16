const barangLab = [
    "keyboard",
    "Mouse",
    "Monitor",
    "Kabel HDMI"
];

console.log("=== INVERTARIS LABORATORIUM ===")

//Tahap 1--Membuat Function untuk Menampilkan Data
function tampilkanBarang(daftarBarang) {
    if (daftarBarang.length === 0) {
        console.log("Daftar Barang Kosong")
    } else {
        for (let indeks = 0; indeks < daftarBarang.length; indeks++) {
            console.log((indeks + 1) + "." + daftarBarang[indeks]);
        }
    }

    console.log("jumlah Barang:",daftarBarang.length)
}

tampilkanBarang(barangLab)
