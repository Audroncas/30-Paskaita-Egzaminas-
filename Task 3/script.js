/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById("btn").addEventListener("click", async () => {
        const data = await getData();
        displayData(data);
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
    outputEl.innerHTML = "";
    
    data.forEach((element) => {
        const divEl = document.createElement("div");
        const avatarEl = document.createElement("img");
        const loginEl = document.createElement("h3");
        divEl.className = "card";
        avatarEl.src = element.avatar_url;
        loginEl.textContent = element.login;
        divEl.append(avatarEl);
        divEl.append(loginEl);
        outputEl.append(divEl);
    });    
}
