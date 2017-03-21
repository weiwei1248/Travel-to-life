$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#tf-home'], footer a[href='#myCarousel'], home a[href='#about']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})

/*****************animation*********************/
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
/**********************************hover animation********************************/
  // transition effect
    style = 'easeOutQuart';

    // if the mouse hover the image
    $('.photo').hover(
      function() {
        //display heading and caption
        $(this).children('div:first').stop(false,true).animate({top:0},{duration:200, easing: style});
        $(this).children('div:last').stop(false,true).animate({bottom:0},{duration:200, easing: style});
      },

      function() {
        //hide heading and caption
        $(this).children('div:first').stop(false,true).animate({top:-50},{duration:200, easing: style});
        $(this).children('div:last').stop(false,true).animate({bottom:-50},{duration:200, easing: style});
      }
    );
});

/***************************CSS*******************************/
