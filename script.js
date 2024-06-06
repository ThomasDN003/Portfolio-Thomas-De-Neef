document.title = "Boodschappenlijst";

let boodschappenlijst = JSON.parse(localStorage.getItem("boodschapKey")) || [];



// //validatie van formulier
// toevoegKnop.addEventListener("click", itemToevoegen);

const form = document.getElementById("itemToevoegen");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const ingegevenItem = document.getElementById("ingegevenItem").value;
    itemToevoegen(ingegevenItem);
});

function itemToevoegen(ingegevenItem) {
    boodschappenlijst.push(ingegevenItem.trim());
    localStorage.setItem("boodschapKey", JSON.stringify(boodschappenlijst));
    document.getElementById("ingegevenItem").value = "";
}




//opgelsagen lijstje terug halen uit local storage
// function ophalenVanLijstje(){
//     const opgeslagenLijstje = localStorage.getItem('boodschappenlijst')
//     if(opgeslagenLijstje){
//         boodschappenlijst = JSON.parse(opgeslagenLijstje);
//         console.log(boodschappenlijst);
//     }
// }



