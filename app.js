const honapok = [
    { nev: "Január", evszak: "Tél", napok: 31},
    { nev: "Február", evszak: "Tél", napok: 28},
    { nev: "Március", evszak: "Tavasz", napok: 31},
    { nev: "Április", evszak: "Tavasz", napok: 30},
    { nev: "Május", evszak: "Tavasz", napok: 31},
    { nev: "Június", evszak: "Nyár", napok: 30},
    { nev: "Július", evszak: "Nyár", napok: 31},
    { nev: "Augusztus", evszak: "Nyár", napok: 31},
    { nev: "Szeptember", evszak: "Ősz", napok: 30},
    { nev: "Október", evszak: "Ősz", napok: 31},
    { nev: "November", evszak: "Ősz", napok: 30},
    { nev: "December", evszak: "Tél", napok: 31}
]

function inditas(event){
    if(event) event.preventDefault(); 
    try {
        let szam = +document.getElementById("input").value;

        if(isNaN(szam)) throw new Error("Nem számot adtál meg!")
        else if(szam < 1 || szam > 12) {throw new Error("A hónapszámnak 1 és 12 közé kell esnie!")}
            
        let eredmeny = kereses(szam)
        console.log(`${eredmeny.nev}, ${eredmeny.evszak}, ${eredmeny.napok}`)

    } catch (hiba) {
        console.log(`Hiba: ${hiba.message}`)
    }
}

function kereses(keresettSzam){
    return honapok[keresettSzam-1]
}
