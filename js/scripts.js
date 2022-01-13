//My JS

//Text color and text changer
var getAllH2 = document.getElementsByClassName('changeH2');
var getAllP = document.getElementsByClassName('changeP');

for (let i = 0; i < getAllH2.length; i++) {
    if(i%2!=0) {
        getAllH2[i].classList.add("my-text-color-changer");
        getAllP[i].innerHTML = "Professional 2D artist.";
    }
    else{
        getAllP[i].classList.add("my-text-color-changer");
    }
}

//Show more or less button
$(document).ready(function(){
    $(".show-more").click(function(){
        $(this).prev().slideToggle();
    });
});

//Dynamic modal
//Button 1
var getIdButton1 = document.getElementById('dbtn1');
var dynamicButton1 = `<button type="button" class="my-red-button my-buy-button" data-bs-toggle="modal" data-bs-target="#dtbn1-modal"> Buy </button>`
getIdButton1.innerHTML = dynamicButton1;

//Button 2
var getIdButton2 = document.getElementById('dbtn2');
var dynamicButton2 = `<button type="button" class="my-red-button my-buy-button" data-bs-toggle="modal" data-bs-target="#dtbn2-modal"> Buy </button>`
getIdButton2.innerHTML = dynamicButton2;

//Button 3
var getIdButton3 = document.getElementById('dbtn3');
var dynamicButton3 = `<button type="button" class="my-red-button my-buy-button" data-bs-toggle="modal" data-bs-target="#dtbn3-modal"> Buy </button>`
getIdButton3.innerHTML = dynamicButton3;

//Dynamic Form
//Name
var dynamicLabel1 = `<label for="dynamicInputName" class="form-label"> <p class="my-form-p">Your name:</p> </label>`;
var dynamicName = `<input type="text" class="form-control" id="dynamicInputName" placeholder="Peter Petrovich(ć/č)"/>`;
var dynamicErrorMessage1 = `<p class="errorMessage" id="nameErrorMessage"></p>`;
dynamicName += dynamicErrorMessage1;
dynamicLabel1 += dynamicName;
var getIdName = document.getElementById('dynamicName');
getIdName.innerHTML = dynamicLabel1;

//Email
var dynamicLabel2 = `<label for="dynamicInputEmail" class="form-label"> <p class="my-form-p">Your email:</p> </label>`;
var dynamicEmail = `<input type="email" class="form-control" id="dynamicInputEmail" placeholder="petar.petrovich@gmail.com"/>`;
var dynamicErrorMessage2 = `<p class="errorMessage" id="emailErrorMessage"></p>`;
dynamicEmail += dynamicErrorMessage2;
dynamicLabel2 += dynamicEmail;
var getIdEmail = document.getElementById('dynamicEmail');
getIdEmail.innerHTML = dynamicLabel2;

//Telephone
var dynamicLabel3 = `<label for="dynamicInputTel" class="form-label"> <p class="my-form-p">Your phone number:</p> </label>`;
var dynamicTel = `<input type="tel" class="form-control" id="dynamicInputTel" placeholder="+38162789456"/>`;
var dynamicErrorMessage3 = `<p class="errorMessage" id="telErrorMessage"></p>`;
dynamicTel += dynamicErrorMessage3;
dynamicLabel3 += dynamicTel;
var getIdTel = document.getElementById('dynamicTel');
getIdTel.innerHTML = dynamicLabel3;

document.getElementById("my-form-submit").addEventListener("click",function(e){
    e.preventDefault();
    //Get input
    var getName = document.getElementById('dynamicInputName').value.trim();
    var getEmail = document.getElementById('dynamicInputEmail').value.trim();
    var getTel = document.getElementById('dynamicInputTel').value.trim();

    //Get IdErrorMessage
    var getNameError = document.getElementById("nameErrorMessage");
    var getEmailError = document.getElementById("emailErrorMessage");
    var getTelError = document.getElementById("telErrorMessage");

    //Regex
    var regexName = /^[A-ZĆČŠŽĐ]{1}[a-zžčćšđ]{2,15}\s[A-ZĆČŠŽĐ]{1}[a-zžčćšđ]{2,15}$/;
    var regexEmail = /^[a-zžčćšđ]+[\.\-\_\!a-zžčćšđ\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;
    var regexTel = /^(\+3816[0-689][\d]{6,7})$/;

    //Checking if
    //getName
    if(getName==""){
        getNameError.innerHTML = "Name field is required.";
    }
    else if(!regexName.test(getName)){
        getNameError.innerHTML = "Name field must be valid.";
    }
    else getNameError.innerHTML = "";

    //getEmail
    if(getEmail==""){
        getEmailError.innerHTML = "Email field is required.";
    }
    else if(!regexEmail.test(getEmail)){
        getEmailError.innerHTML = "Email field must be valid.";
    }
    else getEmailError.innerHTML = "";

    //getTel
    if(getTel==""){
        getTelError.innerHTML = "Phone field is required.";
    }
    else if(!regexTel.test(getTel)){
        getTelError.innerHTML = "Phone field must be valid.";
    }
    else getTelError.innerHTML = "";
});

//TimeZone - Belgrade - Chicago
var getBelgradeTime = function(){
    document.getElementById("belgradeTime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'Europe/Belgrade', timeStyle:'short', hourCycle:'h12'});
}
setInterval(getBelgradeTime, 1000);
getBelgradeTime();
var getChicagoTime = function(){
    document.getElementById("chicagoTime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'America/Chicago', timeStyle:'short', hourCycle:'h12'});
}
setInterval(getChicagoTime, 1000);
getChicagoTime();

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

//My JS