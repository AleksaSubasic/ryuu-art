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

//Success or Error message
var successChecker = 0;
var getDynamicMessage = document.getElementById('dynamicMessage');
var displaySuccessMessage = "<p class='successMessage'>Form is completed.</p>";
var displayErrorMessage = "<p class='errorMessage'>You must complete the form first.</p>";


// Form regex
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
        successChecker = 0;
    }
    else if(!regexName.test(getName)){
        getNameError.innerHTML = "Name field must be valid.";
        successChecker = 0;
    }
    else{
        getNameError.innerHTML = "";
        successChecker++;
    }

    //getEmail
    if(getEmail==""){
        getEmailError.innerHTML = "Email field is required.";
        successChecker = 0;
    }
    else if(!regexEmail.test(getEmail)){
        getEmailError.innerHTML = "Email field must be valid.";
        successChecker = 0;
    }
    else {
        getEmailError.innerHTML = "";
        successChecker++;
    }

    //getTel
    if(getTel==""){
        getTelError.innerHTML = "Phone field is required.";
        successChecker = 0;
    }
    else if(!regexTel.test(getTel)){
        getTelError.innerHTML = "Phone field must be valid.";
        successChecker = 0;
    }
    else{
        getTelError.innerHTML = "";
        successChecker++;
    }

    //display successMessage or errorMessage
    if(successChecker >= 3){
        getDynamicMessage.innerHTML = displaySuccessMessage;
    }
    else{
        getDynamicMessage.innerHTML = displayErrorMessage;
    }
    
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

//Dynamic artworks
//Names: Mendesh, Nick, John, Maria
var getArtworkArray=[
    {
        biggerArtwork: "assets/img/artworks/artwork-1.jpg",
        smallerArtwork: "assets/img/artworks/artwork-1-small.png",
        titleArtwork: "Simple logo by Nick",
        altArtwork: "artwork-1"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-2.jpg",
        smallerArtwork: "assets/img/artworks/artwork-2-small.png",
        titleArtwork: "ART logo by John",
        altArtwork: "artwork-2"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-3.jpg",
        smallerArtwork: "assets/img/artworks/artwork-3-small.png",
        titleArtwork: "Abstract Eve by Maria",
        altArtwork: "artwork-3"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-4.jpg",
        smallerArtwork: "assets/img/artworks/artwork-4-small.png",
        titleArtwork: "Green/White Scales by Mendesh",
        altArtwork: "artwork-4"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-5.jpg",
        smallerArtwork: "assets/img/artworks/artwork-5-small.png",
        titleArtwork: "Abstract Colors by Maria",
        altArtwork: "artwork-5"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-6.jpg",
        smallerArtwork: "assets/img/artworks/artwork-6-small.png",
        titleArtwork: "3D cube by Nick",
        altArtwork: "artwork-6"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-7.jpg",
        smallerArtwork: "assets/img/artworks/artwork-7-small.png",
        titleArtwork: "3D circles by John",
        altArtwork: "artwork-7"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-8.jpg",
        smallerArtwork: "assets/img/artworks/artwork-8-small.png",
        titleArtwork: "Gameboy by Maria",
        altArtwork: "artwork-8"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-9.jpg",
        smallerArtwork: "assets/img/artworks/artwork-9-small.png",
        titleArtwork: "Red doors by Maria",
        altArtwork: "artwork-9"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-10.jpg",
        smallerArtwork: "assets/img/artworks/artwork-10-small.png",
        titleArtwork: "Iceberg by Mendesh",
        altArtwork: "artwork-10"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-11.jpg",
        smallerArtwork: "assets/img/artworks/artwork-11-small.png",
        titleArtwork: "Abstract Metalic by John",
        altArtwork: "artwork-11"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-12.jpg",
        smallerArtwork: "assets/img/artworks/artwork-12-small.png",
        titleArtwork: "Abstract Pink by Mendesh",
        altArtwork: "artwork-12"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-13.jpg",
        smallerArtwork: "assets/img/artworks/artwork-13-small.png",
        titleArtwork: "3D Slices by Mendesh",
        altArtwork: "artwork-13"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-14.jpg",
        smallerArtwork: "assets/img/artworks/artwork-14-small.png",
        titleArtwork: "Illusion by Maria",
        altArtwork: "artwork-14"
    },
    {
        biggerArtwork: "assets/img/artworks/artwork-15.jpg",
        smallerArtwork: "assets/img/artworks/artwork-15-small.png",
        titleArtwork: "Watercolor Fireball by Nick",
        altArtwork: "artwork-15"
    },
];

var artworkDisplay = "";
var getDynamicRow = document.getElementById("dynamicRow");
getArtworkArray.forEach(function(artwork){
    artworkDisplay += `<div class="col-lg-4 my-artwork-image">
     <a href="${artwork.biggerArtwork}" data-lightbox="mygallery" data-title="${artwork.titleArtwork}">
         <img src="${artwork.smallerArtwork}" alt="${artwork.altArtwork}">
     </a>
</div>`
});
getDynamicRow.innerHTML = artworkDisplay;
//My JS
