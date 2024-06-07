document.title = "Boodschappenlijst";

let boodschappenlijst = JSON.parse(localStorage.getItem("boodschappenKey")) || [];
const lijstWeergeven = document.getElementById("boodschappenlijstWeergeven");
console.log(boodschappenlijst);

(function(){
    itemWeergeven(); 
})();

const form = document.getElementById("itemToevoegen");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const ingegevenItem = document.getElementById("ingegevenItem").value;
    const ingegevenHoeveelheid = document.getElementById("ingegevenHoeveelheid").value;
    itemToevoegen(ingegevenItem, ingegevenHoeveelheid);
});

function itemToevoegen(ingegevenItem, ingegevenHoeveelheid) {
    
    boodschappenlijst.push({ item: ingegevenItem.trim(), hoeveelheid: ingegevenHoeveelheid });
    localStorage.setItem("boodschappenKey", JSON.stringify(boodschappenlijst));
    document.getElementById("ingegevenItem").value = "";
    document.getElementById("ingegevenHoeveelheid").value = "";
    itemWeergeven();
}

function itemWeergeven(ingegevenItem, ingegevenHoeveelheid) {
    lijstWeergeven.innerHTML = "";
    for (let i = 0; i < boodschappenlijst.length; i++) {
        const {item, hoeveelheid} = boodschappenlijst[i];
        lijstWeergeven.innerHTML += `<li class="lijstweergeven">
        <p>${item} ${hoeveelheid} 
        <button class="verwijderItem" itemPlaats="${i}">X</button></p></li>`;        
        console.log("plaats" + i);
    }

    document.querySelectorAll(".verwijderItem").forEach((button) => {
        button.addEventListener("click", function () {
            const plaats = this.getAttribute("itemPlaats");
            console.log("plaats" + plaats);
            const schrappen = this.parentElement.parentElement;
            schrappen.style.textDecoration = "line-through"
            setTimeout(() =>{
                boodschappenlijst.splice(plaats, 1);
                localStorage.setItem('boodschappenKey', JSON.stringify(boodschappenlijst));
                itemWeergeven();
            },500)
        });
    });

    
}