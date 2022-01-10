//My JS

//Text color changer
var getColor = document.getElementsByClassName('my-text-color-changer');
var getText = document.getElementsByClassName('my-text-changer');

for (let i = 0; i < getColor.length; i++) {
    // element.style.backgroundColor = "red";
    if(i%2!==0) {
        getColor[i].style.color = "#ee4540";
        getText[i].innerHTML = "Professional 2D artist.";
    }
    else getText[i].style.color = "#ee4540"
}

//Show more or less button
$(document).ready(function(){
    $(".show-more1").click(function(){
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

//Dynamic Form
// var myForm = document.querySelector('#my-form');
// myForm.innerHTML = "<form> <select> <option value='--choose--'>--choose--</option>";
// myFormArray = ['A', 'B', 'C', 'D'];
// for (let i = 0; i < myFormArray.length; i++) {
//     myForm.innerHTML= `<option value='${myFormArray[i]}'>${myFormArray[i]}</option>`;
// }
// myForm.innerHTML = "</select> </form>";


// document.write("<form> <select> <option value='--choose--'>--choose--</option>");
// myFormArray = ['A', 'B', 'C', 'D'];
// for (let i = 0; i < myFormArray.length; i++) {
//     document.write(`<option value='${myFormArray[i]}'>${myFormArray[i]}</option>`);
// }
// document.write("</select> </form>");

// var regexIme = /^[A-Z][a-z]{2,15}$/;
// var regexPrezime = /^[A-Z][a-z]{2,15}$/;
// var regexEmail = /^[a-z]+[\.\-\_\!a-z\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;
// var regexConfirmEmail = /^[a-z]+[\.\-\_\!a-z\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;


//Forms
//DDL
// function ddlCheck(){
//     let optionAll = lista.options;
//     if(optionAll.selectedIndex == 0){
//         alert("You must choose package!!!");
//     }

//     //or

//     let optionAll = lista.options;
//     if(lista.options.selectedIndex == 0){
//         alert("You must choose package!!!");
//     }
// }
// //DDL - dinamicko ispisivanje
// document.write("<form> <select id='lista'> <option>Izaberite</option>");
// var niz = new Array("A", "B", "C");
// for (let i = 0; i < niz.length; i++) {
//     document.write("<option>" + niz[i] +"</option>");
// }
// document.write("</select> </form>");

//Kojic
// function provera(){
// 	console.log("Kliknuto na taster tipa submit");
// 	//E je f-jo neko ceka od tebe da mu nesto vratis!!!
	
// 	//Dohvatanje podataka iz FORME koja je u HTML-u
// 	//Rad za text poljima - value
	
// 	//var textPolje = document.formular1.NameIme;
// 	var textPolje1 = IdIme.value;
// 	console.log(textPolje1);
	
// 	var textPolje2 = IdPrezime.value;
// 	console.log("Uneti text ovog polja je " + textPolje2);
	
// 	var textPolje21 = IdPrezime.id;
// 	console.log("ID ovog polja je " + textPolje21);
	
// 	// X = Y
// 	IdPrezime.value = "Ovo je moj text iz JS";
	
// 	if(textPolje1.length < 3){
// 		console.log("Nece moci jer nije dovoljno dugo prezime ");
// 		infoIme.classList.add("mojaKlasa");
// 		infoIme.innerHTML = "Niste dobro uneli ime i mora biti bar 3 karaktera!!!";
// 		return false;
// 	}
// 	else{
// 		infoIme.classList.remove("mojaKlasa");
// 		infoIme.innerHTML = "Odlicno!!!";
// 		return false;
// 	}
	
	
// 	//Odluka sta cemo da vratimo kao return ce biti bazirana na proveri da li je korisnicki sadrzaj dobar ili ne!!!
// 	//return false;
// }
//My JS