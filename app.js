const honapok = [
    { nev: "Január", evszak: "Tél", napok: 31, unnep: "Újév"},
    { nev: "Február", evszak: "Tél", napok: 28, unnep: "Valentin-nap"},
    { nev: "Március", evszak: "Tavasz", napok: 31, unnep: "Március 15."},
    { nev: "Április", evszak: "Tavasz", napok: 30, unnep: "Húsvét"},
    { nev: "Május", evszak: "Tavasz", napok: 31, unnep: "Pünkösd"},
    { nev: "Június", evszak: "Nyár", napok: 30, unnep: "Nincs ünnep"},
    { nev: "Július", evszak: "Nyár", napok: 31, unnep: "Nincs ünnep"},
    { nev: "Augusztus", evszak: "Nyár", napok: 31, unnep: "Államalapítás"},
    { nev: "Szeptember", evszak: "Ősz", napok: 30, unnep: "Nincs ünnep"},
    { nev: "Október", evszak: "Ősz", napok: 31, unnep: "Halloween"},
    { nev: "November", evszak: "Ősz", napok: 30, unnep: "Mindenszentek"},
    { nev: "December", evszak: "Tél", napok: 31, unnep: "Karácsony"}
]

let kiiras = document.getElementById("kiiras")
let szerkesztoPanel = document.getElementById("szerekesztoPanel")
let modositasGomb = document.getElementById("modositasGomb")
modositasGomb.style.display = "none"
let inputMezo = document.getElementById("inputMezo")
szerkesztoPanel.style.display = "none"
let aktualisSzerkesztettIndex = null

function inditas(event) {
    if(event) event.preventDefault()
    
    try {
        let szam = +inputMezo.value;
        
        if (isNaN(szam)) throw new Error("Nem számot adtál meg!")
        if (szam < 1 || szam > 12) throw new Error("A hónapszámnak 1 és 12 közé kell esnie!")
     
        aktualisSzerkesztettIndex = szam - 1

        let eredmeny = kereses(szam)
        frissitKiiras(szam, eredmeny)
        modositasGomb.style.display = "block"

    } catch (hiba) {
        kiiras.innerHTML = `Hiba: ${hiba.message}`
        aktualisSzerkesztettIndex = null
    } finally{
        inputMezo.value = ""
    }
}

function kereses(keresettSzam) {
    return honapok[keresettSzam - 1]
}

function frissitKiiras(szam, eredmeny) {
    kiiras.innerHTML = `${szam}. Hónap: ${eredmeny.nev} <br>
                        Évszak: ${eredmeny.evszak} <br>
                        Napok száma: ${eredmeny.napok} <br>
                        Ünnep: ${eredmeny.unnep}`
}

function szerkesztesMegnyitasa() {
    if (aktualisSzerkesztettIndex === null) {
        kiiras.innerHTML = "Írj be előbb egy számot!"
        return
    }

    let honap = honapok[aktualisSzerkesztettIndex]

    //document.getElementById("szerkesztettHonapNeve").value = honap.nev
    //document.getElementById("szerkesztettEvszak").value = honap.evszak
    //document.getElementById("szerkesztettNapok").value = honap.napok

    document.getElementById("szerkesztettHonapNeve").innerText = honap.nev
    document.getElementById("szerkesztettEvszak").innerText = honap.evszak
    document.getElementById("szerkesztettNapok").innerText = honap.napok
    document.getElementById("ujUnnep").value = honap.unnep

    szerkesztoPanel.style.display = "block"
}

function mentes(event) {
    if(event) event.preventDefault()

    if (aktualisSzerkesztettIndex !== null) {
        let ujUnnepErtek = document.getElementById("ujUnnep").value        
        honapok[aktualisSzerkesztettIndex].unnep = ujUnnepErtek        
        frissitKiiras(aktualisSzerkesztettIndex + 1, honapok[aktualisSzerkesztettIndex])
        szerkesztoPanel.style.display = "none"
        //modositasGomb.style.display = "none"
    }
}
