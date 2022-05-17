const automobili = [
    {
        marca: "Audi",
        modello: "A3",
        alimentazione: "Benzina",
    },
    {
        marca: "Alfa Romeo",
        modello: "Giulietta",
        alimentazione: "Diesel",
    },
    {
        marca: "Fiat",
        modello: "Panda",
        alimentazione: "Metano",
    },
    {
        marca: "Fiat",
        modello: "500",
        alimentazione: "Elettrico",
    },
    {
        marca: "Alfa Romeo",
        modello: "Giulia",
        alimentazione: "Benzina",
    },
    {
        marca: "Ferrari",
        modello: "California",
        alimentazione: "Benzina",
    },
    {
        marca: "Dacia",
        modello: "Duster",
        alimentazione: "GPL",
    },
    {
        marca: "Volkswagen",
        modello: "Golf",
        alimentazione: "Diesel",
    },
    {
        marca: "Volkswagen",
        modello: "T-Roc",
        alimentazione: "Diesel",
    }
]

const AutoBenzina = automobili.filter (a => a.alimentazione == "Benzina")
console.log(AutoBenzina)
const AutoDiesel = automobili.filter (a => a.alimentazione == "Diesel")
console.log(AutoDiesel)
const AutoAltre = automobili.filter (a => a.alimentazione != "Diesel" && a.alimentazione != "Benzina")
console.log(AutoAltre)