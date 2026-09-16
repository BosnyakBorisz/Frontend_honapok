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
    let szam = +document.getElementById("input").value;
    try {
        if(!isNaN(szam) && szam < 13) kereses(szam)
    } catch (hiba) {
        console.log(hiba)
    }
}

function kereses(keresettSzam){
    if(keresettSzam == honapok.length[keresettSzam-1]){
        console.log(`${honapok[keresettSzam].nev}, ${honapok[keresettSzam].evszak},
             ${honapok[keresettSzam].napok}`)
    }
}
