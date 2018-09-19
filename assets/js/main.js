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



$(document).ready(function(){

  // Add smooth scrolling to all links
  $("a.go").on('click', function(event) {

    $(this).closest('ul').find('li').removeClass('active');
    $(this).closest('li').addClass('active');

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//speaker-content

jQuery(document).ready(function($) {
  
for (var i = 0; i < speaker.length; i++) {
   var animate  = ['0','50','100','150','200'];
   var target = $("#speaker-content");
   var template1 = "<div class='col-setting-5 float-left speaker-container' data-id='"+i+"'  data-aos='fade-up' data-aos-delay='"+animate[Math.floor(Math.random() * 4) + 0]+"'> <div class='card rounded-0 border-0 pointer user-static'><div class=' pb-0 px-4 position-relative pt-4  pb-3 '>";
   var template2 = "<img src='assets/images/Series Speakers/"+speaker[i].image+"' class='col-12 border-0 p-0' ><a href='#' title='' class='btn btn-gradient'> <img src='assets/images/linkedin-logo.svg' > </a>";
   var template3 = "</div><div class='pb-4'><div class='text-center'><div class='name-user col-12 p-0'>";
   var template4 = "<span class='user-name'><strong>"+speaker[i].name+"</strong></span>";
   var template5 = "</div><div class='desc-user col-12 p-0 pt-2'>";
   var template6 = "<span class='user-desc'>"+speaker[i].status+"</span>";
   var template7 = "</div></div></div></div></div>";

    var template = template1+template2+template3+template4+template5+template6+template7;
    target.append(template);

}

});

jQuery(document).ready(function($) {
  
for (var i = 0; i < 8; i++) {
   var animate   = ['0','50','100','150','200'];
   var target    = $("#speaker-index");
    var template1 = "<div class='col-setting-5 float-left speaker-container' data-id='"+i+"'  data-aos='fade-up' data-aos-delay='"+animate[Math.floor(Math.random() * 4) + 0]+"'> <div class='card rounded-0 border-0 pointer user-static'><div class=' pb-0 px-4 position-relative pt-4 pb-3 '>";
   var template2 = "<img src='assets/images/Series Speakers/"+speaker[i].image+"' class='col-12 border-0 p-0' ><a href='#' title='' class='btn btn-gradient'> <img src='assets/images/linkedin-logo.svg' > </a>";
   var template3 = "</div><div class='pb-4'><div class='text-center'><div class='name-user col-12 p-0'>";
   var template4 = "<span class='user-name'><strong>"+speaker[i].name+"</strong></span>";
   var template5 = "</div><div class='desc-user col-12 p-0 pt-2'>";
   var template6 = "<span class='user-desc'>"+speaker[i].status+"</span>";
   var template7 = "</div></div></div></div></div>";

    var template = template1+template2+template3+template4+template5+template6+template7;
    target.append(template);

}


});

$(document).on('click', '.user-static', function(event) {
    event.preventDefault();
    var id = parseInt($(this).closest('.speaker-container').attr('data-id'));
    $('.popup-speaker-parent').fadeIn('fast');
    $("#speaker-profile").attr('src','assets/images/Series Speakers/'+speaker[id].image)
    $("#speaker-name").text(speaker[id].name);
    $("#speaker-status").text(speaker[id].status);
    $("#speaker-detail").text(speaker[id].content);
    $('.popup-speaker-parent').attr('data-id',id);


});


$(document).on('click', '#close-speaker , .modal-after', function(event) {
    event.preventDefault();
    $(this).closest('.popup-speaker-parent').fadeOut('fast');
   

});



$(document).on('click', '.modal-after', function(event) {
    event.preventDefault();
    $(this).closest('.modal-speaker-arent').fadeOut('fast');
   

});








$(document).on('click', '#speaker-next', function(event) {
      event.preventDefault();
      var def= parseInt($(".popup-speaker-parent").attr('data-id'));
          $(".popup-speaker-parent").fadeOut(10, function() {

      if (def == (speaker.length - 1)) {
        
            $("#speaker-profile").attr('src','assets/images/Series Speakers/'+speaker[1].image)
            $("#speaker-name").text(speaker[1].name);
            $("#speaker-status").text(speaker[1].status);
            $("#speaker-detail").text(speaker[1].content);
            $('.popup-speaker-parent').attr('data-id',speaker.length + 1);
       }
       else
       {
         var id = def+ 1;
          $("#speaker-profile").attr('src','assets/images/Series Speakers/'+speaker[id].image)
    $("#speaker-name").text(speaker[id].name);
    $("#speaker-status").text(speaker[id].status);
    $("#speaker-detail").text(speaker[id].content);
    $('.popup-speaker-parent').attr('data-id',id);
       }
        
    


    });

          $(".popup-speaker-parent").fadeIn('fast');
          });




$(document).on('click', '#speaker-prev', function(event) {
      event.preventDefault();
      var def= parseInt($(".popup-speaker-parent").attr('data-id'));
          $(".popup-speaker-parent").fadeOut(10, function() {

     if (def == 0){

        
            $("#speaker-profile").attr('src','assets/images/Series Speakers/'+speaker[speaker.length - 1].image)
            $("#speaker-name").text(speaker[speaker.length - 1].name);
            $("#speaker-status").text(speaker[speaker.length - 1].status);
            $("#speaker-detail").text(speaker[speaker.length - 1].content);
            $('.popup-speaker-parent').attr('data-id',speaker.length - 1);
       }
       else
       {
         var id = def - 1;
          $("#speaker-profile").attr('src','assets/images/Series Speakers/'+speaker[id].image)
    $("#speaker-name").text(speaker[id].name);
    $("#speaker-status").text(speaker[id].status);
    $("#speaker-detail").text(speaker[id].content);
    $('.popup-speaker-parent').attr('data-id',id);
       }
        
    


    });

          $(".popup-speaker-parent").fadeIn('fast');
          });






$(document).on('click', '.speaker-controll', function(event) {
    event.preventDefault();
     var id = parseInt($(this).closest('.modal-speaker-arent').attr('data-id'));
    var go = $(this).attr('go');

        
    });



$('#user-carousel').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:300000,
    autoplayHoverPause:true,
    onChange:owlcall, 
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



function owlcall(e)
{
  //$(".owl-item").removeClass('second-item');
  var index = $(".owl-item.center").index();
  $("#user-carousel .owl-item.active:nth-child(4)").addClass('second-item');
  console.log($(".owl-item.active").length + "d");
}


jQuery(document).ready(function($) {
$("#prev-owl-5").click(function(event) {
console.log("next");
       $('#user-carousel').trigger('next.owl.carousel');
});

$("#next-owl-5").click(function(event) {
    console.log("prev");
       $('#user-carousel').trigger('prev.owl.carousel');
});
});

jQuery(document).ready(function($) {

  $('#user-carousel-slick').slick({
  //dots: true,
  infinite: true,
  centerMode: true,
  dots: true,
  centerPadding: '0',
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: $('#next-user'),
  prevArrow: $('#prev-user'),
  speed: 500,
responsive: [
{

      breakpoint: 992,
      settings: {
        slidesToShow: 5
      }

    },
    {

      breakpoint: 550,
      settings: {
        slidesToShow: 3
      }

    }


    ]
});
});

//tab-pane
$(".load-more").click(function(event) {
  $(this).closest('.tab-pane').find('.all-speaker-list').toggleClass('d-none');
  if ($(this).attr('show') == "true")
  {
    $(this).find('.text-button').text("LOAD MORE");
    $(this).find('i').css('transform', 'rotate(0deg)');
    
       $(this).attr('show', 'false');
  }
  else
  {
     $(this).find('.text-button').text("LOAD LESS");
    $(this).find('i').css('transform', 'rotate(180deg)');
    $(this).attr('show', 'true');

  }

});


$(document).on('change', 'input.other', function(event) {
  if ($(this).prop('checked') ==  true) {
    $($(this).attr('for')).removeClass('d-none');
  }
  else
  {
    $($(this).attr('for')).addClass('d-none');
  }
});


$("#form-get").submit(function(event) {
  event.preventDefault;


return false;

});