document.title = "Boodschappenlijst";

// //validatie van formulier
// toevoegKnop.addEventListener("click", itemToevoegen);

const form = document.getElementById("itemToevoegen");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const ingegevenItem = document.getElementById("ingegevenItem").value;
    itemToevoegen(ingegevenItem);
});

function itemToevoegen(ingegevenItem) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
    localStorage.setItem("boodschapKey", ingegevenItem);
}


//opgelsagen lijstje terug halen uit local storage
// function ophalenVanLijstje(){
//     const opgeslagenLijstje = localStorage.getItem('boodschappenlijst')
//     if(opgeslagenLijstje){
//         boodschappenlijst = JSON.parse(opgeslagenLijstje);
//         console.log(boodschappenlijst);
//     }
// }



