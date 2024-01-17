const modal = 900000 // Dalam bentuk rupiah
const saham = [
    {
        emiten: "goto",
        hargaLembarMax: 91,
        hargaLembarMin: 90,
    },
    {
        emiten: "bbca",
        hargaLembarMax: 9700,
        hargaLembarMin: 8500,
    },
    {
        emiten: "bbri",
        hargaLembarMax: 5035,
        hargaLembarMin: 4400,
    },
    {
        emiten: "shid",
        hargaLembarMax: 2800,
        hargaLembarMin: 1400,
    },
]

const penghitunganKeuntunganLaba = (modal, hargaTerendah, hargaTertinggi, emiten) => {
    return console.log(`Keuntungan saham ${emiten}: RP.${Math.round((modal / hargaTerendah) * hargaTertinggi)}`);
}

console.log(`Modal: RP.${modal}`)
saham.map((item) => {
    penghitunganKeuntunganLaba(modal, item.hargaLembarMin, item.hargaLembarMax, item.emiten)
})
