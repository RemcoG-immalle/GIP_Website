$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  }
);

$(document).ready(function(){
      $('.carousel').carousel();
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
});

$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});

$(document).ready(function(){
  $('.tooltipped').tooltip({delay: 50});
});


(function(document) {
  var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));
  _bars.map(function(bar, index) {
    setTimeout(function() {
    	bar.style.width = bar.dataset.percent;
    }, index * 1000);

  });
})(document)

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}
