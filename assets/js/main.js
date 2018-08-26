$(window).scroll(function(event) {
	if ($(this).scrollTop() > 100) {
		$("header").addClass('scroll');
	}
	else
	{
		$("header").removeClass('scroll');
	}
});


$(document).on('click', '#search-bar-top', function(event) {
	event.preventDefault();

	$(this).closest('form').toggleClass('insert');
		return false;
});

$('#slider-event').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1.5
        }
    }
})

jQuery(document).ready(function($) {
$("#next-owl").click(function(event) {
console.log("next");
	   $('#slider-event').trigger('next.owl.carousel');
});
$("#prev-owl").click(function(event) {
	console.log("prev");
	   $('#slider-event').trigger('prev.owl.carousel');
});
});