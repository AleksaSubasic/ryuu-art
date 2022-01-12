//My JS

//Text color changer
var getColor = document.getElementsByClassName('my-text-color-changer');
var getText = document.getElementsByClassName('my-text-changer');

for (let i = 0; i < getColor.length; i++) {
    if(i%2!=0) {
        getColor[i].style.color = "#ee4540";
        getText[i].innerHTML = "Professional 2D artist.";
    }
    else getText[i].style.color = "#ee4540"
}

//Show more or less button
$(document).ready(function(){
    $(".show-more").click(function(){
        $(this).prev().slideToggle();
    });
});

// //TimeZone - Belgrade - Chicago
var getBelgradeTime = function(){
    document.getElementById("belgradeTime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Europe/Belgrade', timeStyle:'short', hourCycle:'h12'});;
}
setInterval(getBelgradeTime, 1000);
getBelgradeTime();
var getChicagoTime = function(){
    document.getElementById("chicagoTime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'America/Chicago', timeStyle:'short', hourCycle:'h12'});;
}
setInterval(getChicagoTime, 1000);
getChicagoTime();

//Dynamic modal

//Button 1
var getIdButton1 = document.getElementById('dbtn1');
var dynamicButton1 = `<button type="button" class="my-red-button my-buy-button" data-bs-toggle="modal" data-bs-target="#dtbn1-modal"> Buy </button>`
getIdButton1.innerHTML = dynamicButton1;
//Modal Form 1



//Button 2
var getIdButton2 = document.getElementById('dbtn2');
var dynamicButton2 = `<button type="button" class="my-red-button my-buy-button" data-bs-toggle="modal" data-bs-target="#dtbn2-modal"> Buy </button>`
getIdButton2.innerHTML = dynamicButton2;
//Modal Form 2

//Button 3
var getIdButton3 = document.getElementById('dbtn3');
var dynamicButton3 = `<button type="button" class="my-red-button my-buy-button" data-bs-toggle="modal" data-bs-target="#dtbn3-modal"> Buy </button>`
getIdButton3.innerHTML = dynamicButton3;
//Modal Form 3


//Dynamic Form and Regular Expression

//Name
var dynamicLabel1 = `<label for="dynamicInputName" class="form-label"> <p class="my-form-p">Your name:</p> </label>`;
var dynamicName = `<input type="text" class="form-control" id="dynamicInputName"/>`;
dynamicLabel1 += dynamicName;
var getIdTel = document.getElementById('dynamicName');
getIdTel.innerHTML = dynamicLabel1;

//Email
var dynamicLabel2 = `<label for="dynamicInputEmail" class="form-label"> <p class="my-form-p">Your email:</p> </label>`;
var dynamicEmail = `<input type="email" class="form-control" id="dynamicInputEmail"/>`;
dynamicLabel2 += dynamicEmail;
var getIdTel = document.getElementById('dynamicEmail');
getIdTel.innerHTML = dynamicLabel2;

//Telephone
var dynamicLabel3 = `<label for="dynamicInputTel" class="form-label"> <p class="my-form-p">Your phone number:</p> </label>`;
var dynamicTel = `<input type="tel" class="form-control" id="dynamicInputTel"/>`;
dynamicLabel3 += dynamicTel;
var getIdTel = document.getElementById('dynamicTel');
getIdTel.innerHTML = dynamicLabel3;

//Select
// var dynamicLabel4 = `<label for="dynamicInputSelect" class="form-label"> Choose your package of choice below: </label>`;
// var dynamicSelect = `<select id="dynamicInputSelect" class="form-select"> <option value="defaultChoose"> --choose-- </option>`;
// var dynamicSelectArray = ["Basic", "Standard", "Premium"];
// for (let i = 0; i < dynamicSelectArray.length; i++) {
//     dynamicSelect += (`<option value="${dynamicSelectArray[i]}"> ${dynamicSelectArray[i]} </option>`);
// }
// dynamicSelect += `</option> </select>`;
// dynamicLabel4 += dynamicSelect;
// var getIdSelect = document.getElementById('dynamicSelect');
// getIdSelect.innerHTML = dynamicLabel4;

//Regular Expression
// var regexIme = /^[A-Z][a-z]{2,15}$/;
// var regexPrezime = /^[A-Z][a-z]{2,15}$/;
// var regexEmail = /^[a-z]+[\.\-\_\!a-z\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;
// var regexConfirmEmail = /^[a-z]+[\.\-\_\!a-z\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;

//My JS