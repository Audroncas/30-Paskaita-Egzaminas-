/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.body.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const kgValue = document.getElementById("search").value;
    const h3El = document.body.querySelector("h3");
    const ulEl = document.body.querySelector("ul");
    
    if (isNaN(kgValue)) {
        h3El.textContent = `Only numbers accepted`;
        h3El.style.color = "red";
        ulEl.style.display = "none";
    } else {
        const lbEl = document.getElementById("lb");
        const gramsEl = document.getElementById("grams");
        const ozEl = document.getElementById("oz");
        
        h3El.textContent = `${kgValue} kg equals to:`;
        h3El.style.color = "black";
        ulEl.style.display = "block";
        lbEl.textContent = Math.round(kgValue * 2.2046 * 100) / 100 + " lb";
        gramsEl.textContent = Math.round(kgValue / 0.0010000 * 100) / 100 + " g";
        ozEl.textContent = Math.round(kgValue * 35.274 * 100) / 100 + " oz";
    }
});
