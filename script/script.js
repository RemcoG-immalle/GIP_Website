function submitFunction() {
    alert("Deze button verstuurd nog geen contact formulier. Moest ik deze pagina laten staan, zal ik dit wel in orde brengen.");
}

var sumbitButton = document.getElementById("sendButton");

sumbitButton.addEventListener("click", submitFunction);

$(".button-collapse").sideNav();
$(".dropdown-button").dropdown();
  $('.button-collapse').sideNav({menuWidth: 240, activationWidth: 70});