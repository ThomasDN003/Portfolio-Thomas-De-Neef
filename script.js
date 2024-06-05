document.title = "Boodschappenlijst";

//opgelsagen lijstje terug halen uit local storage
function ophalenVanLijstje(){
    const opgeslagenLijstje = localStorage.getItem('boodschappenlijst')
    if(opgeslagenLijstje){
        boodschappenlijst = JSON.parse(opgeslagenLijstje);
        console.log(boodschappenlijst);
    }
}

//item toevoegen oon boodschappenlijst
function itemToevoegen(item, hoeveelheid) {
    //eerst kijken of het item als bestaat zo niet dan maken we een nieuwe item aan
    //aanders verhoog ik gewoon de hoeveelheid
    if (boodschappenlijst[item]) {
        boodschappenlijst[item] += hoeveelheid;
    }
    else {
        boodschappenlijst[item] = hoeveelheid;
    }
    console.log()
}

