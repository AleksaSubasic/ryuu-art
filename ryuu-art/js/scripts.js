window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});






//My JS

//Show more or less button
let showMoreButton1 = document.querySelector('.show-more1');
let hideText1 = document.querySelector('.hide-text1');

let showMoreButton2 = document.querySelector('.show-more2');
let hideText2 = document.querySelector('.hide-text2');

let showMoreButton3 = document.querySelector('.show-more3');
let hideText3 = document.querySelector('.hide-text3');

showMoreButton1.addEventListener('click',()=>{
    hideText1.classList.toggle('show-more-active');
})
showMoreButton2.addEventListener('click',()=>{
    hideText2.classList.toggle('show-more-active');
})
showMoreButton3.addEventListener('click',()=>{
    hideText3.classList.toggle('show-more-active');
})

//Time
// let dateJS = new Date();
// let hour = dateJS.getHours();
// let min = dateJS.getMinutes();
// let time = document.querySelector('#time');
// time = document.write(`${hour} : ${min}`);

//Time YouTube
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