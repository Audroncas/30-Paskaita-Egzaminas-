/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

document.addEventListener("DOMContentLoaded", async () => {
    const data = await getData();
    displayData(data);
    console.log(data);
});

async function getData() {
    try{
        const response = await fetch(ENDPOINT);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

function displayData(data){
    const outputEl = document.getElementById("output");
     
    data.forEach((brand) => {
        const divEl = document.createElement("div");
        const brandEl = document.createElement("h3");
        const ulEl = document.createElement("ul");
        
        brand.models.forEach(model => {
            const modelEl = document.createElement("li");
            modelEl.textContent = model;
            ulEl.append(modelEl);
        });
        
        divEl.className = "card";
        brandEl.textContent = brand.brand;
        divEl.append(brandEl);
        divEl.append(ulEl);
        outputEl.append(divEl);
    });    
}