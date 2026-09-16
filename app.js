function honapok(event){
    if(event) event.preventDefault(); 

    let szam = +document.getElementById("input").value;
    let honap = document.getElementById("honap");
    let evszak = document.getElementById("evszak");

    switch(szam){
        case 1: honap.innerHTML = "Január"; break;
        case 2: honap.innerHTML = "Február"; break;
        case 3: honap.innerHTML = "Március"; break;
        case 4: honap.innerHTML = "Április"; break;
        case 5: honap.innerHTML = "Május"; break;
        case 6:  honap.innerHTML = "Június";     break;
        case 7:  honap.innerHTML = "Július";     break;
        case 8:  honap.innerHTML = "Augusztus";  break;
        case 9:  honap.innerHTML = "Szeptember"; break;
        case 10: honap.innerHTML = "Október";    break;
        case 11: honap.innerHTML = "November";   break;
        case 12: honap.innerHTML = "December";   break;
        default: honap.innerHTML = "Hibás szám!";          
    }

    if(szam > 2 && szam < 6){
        evszak.innerHTML = "Tavasz"
    }
    else if(szam > 5 && szam < 9){
        evszak.innerHTML = "Nyár";
    }
    else if(szam > 8 && szam < 12){
        evszak.innerHTML = "Ősz";
    }
    else if(szam == 1 || szam == 2 || szam == 12){
        evszak.innerHTML = "Tél";
    }
    else{
        evszak.innerHTML = ""
    }                                   
}
