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

$('#attend-list').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
jQuery(document).ready(function($) {
$("#next-owl-2").click(function(event) {
console.log("next");
       $('#attend-list').trigger('next.owl.carousel');
});
$("#prev-owl-2").click(function(event) {
    console.log("prev");
       $('#attend-list').trigger('prev.owl.carousel');
});
});



$('#account-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:5
        },
        600:{
            items:5
        },
        1000:{
            items:5
        }
    }
})
jQuery(document).ready(function($) {
$("#next-owl").click(function(event) {
console.log("next");
       $('#user-list').trigger('next.owl.carousel');
});
$("#prev-owl").click(function(event) {
    console.log("prev");
       $('#user-list').trigger('prev.owl.carousel');
});
});

/*  if you want to activeate maps you can remove ti tag (*)
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(55.580748,36.8251201),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("maps"),mapProp);
}

*/


$('#user').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})




$("#next-owl-3").click(function(event) {
console.log("next");
       $('#user').trigger('next.owl.carousel');
});
$("#prev-owl-3").click(function(event) {
    console.log("prev");
       $('#user').trigger('prev.owl.carousel');
});



//user-carousel
$(".next").click(function(){
    $(".carousel>.list:first-child").clone().appendTo(".carousel");
    $(".carousel>.list:first-child").remove();
})
