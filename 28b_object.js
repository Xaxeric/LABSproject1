const saham = [
    {
        emiten: "goto",
        hargaLembarMax: 91,
        hargaLembarMin: 90,
        volumeLembar: 20000000,
    },
    {
        emiten: "bbca",
        hargaLembarMax: 9700,
        hargaLembarMin: 8500,
        volumeLembar: 15000000,
    },
    {
        emiten: "bbri",
        hargaLembarMax: 5035,
        hargaLembarMin: 4400,
        volumeLembar: 12000000,
    },
    {
        emiten: "shid",
        hargaLembarMax: 2800,
        hargaLembarMin: 1400,
        volumeLembar: 10000000,
    },
]

const penghitunganLotPerLembar = (volumeLembar, hargaTerendah, hargaTertinggi, namaEmiten) => {
    console.log(`Harga 1 lot perusahaan ${namaEmiten}, diharga terendah: ${hargaTerendah * 100}`);
    console.log(`Harga 1 lot perusahaan ${namaEmiten}, diharga tertinggi: ${hargaTertinggi * 100}`);
    console.log(`Kepemilikan per 1 lot ${namaEmiten}: ${(100 / volumeLembar) * 100}%`)
}

saham.map((item) => {
    penghitunganLotPerLembar(item.volumeLembar, item.hargaLembarMin, item.hargaLembarMax, item.emiten)
    console.log("");
})
