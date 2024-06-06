document.title = "Boodschappenlijst";

let boodschappenlijst = JSON.parse(localStorage.getItem("boodschapKey")) || [];
const lijstWeergeven = document.getElementById("boodschappenlijstWeergeven");
console.log(boodschappenlijst);

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
    itemWeergeven();

} 
  
function itemWeergeven(ingegevenItem) {
    lijstWeergeven.innerHTML = "";
    for (let i = 0; i < boodschappenlijst.length; i++) {
        lijstWeergeven.innerHTML+= `<li class = "lijstweergeven"><p>${boodschappenlijst[i]} <button class="verwijderItem" itemPlaats="${i}">X</button></p></li>`
        console.log("plaats" + i);
    }
    document.querySelectorAll(".verwijderItem").forEach((button) => {
        button.addEventListener("click", function () {
            const plaats = this.getAttribute("itemPlaats");
            console.log("plaats" + plaats);
            boodschappenlijst.splice(plaats, 1);
            localStorage.setItem('boodschapKey', JSON.stringify(boodschappenlijst));
            itemWeergeven();
            });
    });
}








// function deleteItem(boodschappenlijst[itemToevoegen]) {
    //     deleteItem
    // }

//opgelsagen lijstje terug halen uit local storage
// function ophalenVanLijstje(){
//     const opgeslagenLijstje = localStorage.getItem('boodschappenlijst')
//     if(opgeslagenLijstje){
//         boodschappenlijst = JSON.parse(opgeslagenLijstje);
//         console.log(boodschappenlijst);
//     }
// }



