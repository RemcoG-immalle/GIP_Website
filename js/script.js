$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
}
);

function submitFunction() {
    alert("Deze button verstuurd nog geen contact formulier. Moest ik deze pagina laten staan, zal ik dit wel in orde brengen.");
}

var sumbitButton = document.getElementById("sendButton");

sumbitButton.addEventListener("click", submitFunction);
