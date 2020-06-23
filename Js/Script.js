//responsiveness
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// modal
// Get the modal
var cModal = document.getElementById('copModal');
var rModal = document.getElementById('resModal');
var sModal = document.getElementById('signModal');
var lModal = document.getElementById('logModal');

// Get the button that opens the modal
var btn = document.getElementById("copBtn");
var btn1 = document.getElementById("resBtn");
var btn2 = document.getElementById("signBtn");
var btn3 = document.getElementById("logBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    cModal.style.display = "block";
}
btn1.onclick = function () {
    rModal.style.display = "block";
}
btn2.onclick = function () {
    sModal.style.display = "block";
}
btn3.onclick = function () {
    lModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    cModal.style.display = "none";
}
span1.onclick = function () {
    rModal.style.display = "none";
}
span2.onclick = function () {
    sModal.style.display = "none";
}
span3.onclick = function () {
    lModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == cModal) {
        cModal.style.display = "none";
    }
    if (event.target == rModal) {
        rModal.style.display = "none";
    }
    if (event.target == sModal) {
        sModal.style.display = "none";
    }
    if (event.target == lModal) {
        lModal.style.display = "none";
    }
}

// slide show
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeDot";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// // validation
//  function validate() {
//      alert("Smile");
//    var submitOk = false;
//     // var c = document.form3;
//    var mailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     fName = document.form3.firstName.value;
//     lName = c.lastName.value;
//     mail = c.email.value.indexOf("@");
//     gend = c.gender.value;
//     phone = c.phoneNumber.value;
//     pasword = c.psw.value;
//     repeatPassword = c.psw - repeat.value;
//     if (fName.length == 0) {
//         alert("The firstName field cannot remain blank.");
//         submitOk = false;
//     }else{
//         submitOk=true;
//     }
//     if (lName.length == 0) {
//         alert("The lastName field cannot remain blank.");
//         submitOk = false;
//     }else{
//         submitOk=true;
//     }
//     if (mail.length == 0) {
//         alert("The Email field cannot remain blank.");
//         submitOk = false;
//     }else{
//         submitOk=true;
//     }

//     if (phone.length == 0) {
//         alert("The phone Number field cannot remain blank.");
//         submitOk = false;
//     } else if (phone.length > 14) {
//         alert("The phone Number cannot be more than 14.");
//         submitOk = false;
//     }else{
//         submitOk=true;
//     }

//     if (pasword.length == 0) {
//         alert("The Pasword field cannot remain blank.");
//         submitOk = false;
//     }else{
//         submitOk=true;
//     }
//     if (repeatPassword.length == 0) {
//         alert("The Re-entered Password field cannot remain blank.");
//         submitOk = false;
//     }else{
//         submitOk=true;
//     }
//     if (repeatPassword != pasword) {
//         alert("The Password and the Repeat password does not match");
//         submitOk = false;
//     }else{
//         submitOk=true;
//     }
//     alert("WEldone");

//    return submitOk;




// }



 //Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDL2DdR3nD2dQHb70Z3AbXhRDlIHKF6lls",
    authDomain: "dasumptuousfood.firebaseapp.com",
    databaseURL: "https://dasumptuousfood.firebaseio.com",
    projectId: "dasumptuousfood",
    storageBucket: "dasumptuousfood.appspot.com",
    messagingSenderId: "393885062340",
    appId: "1:393885062340:web:54c00a4d9f156fd1dc6591",
    measurementId: "G-BMJ908LQX6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth=firebase.auth();