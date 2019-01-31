$(document).ready(function(){
  // slick carousel
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  // hide navbar when user scrolls down
  var userScrollPos = 0; // how far the user has scrolled
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    // if scrollTop is greater than userScrollPos by 50 or more, store height of navbar
    if (scrollTop - userScrollPos > 50) {
      var navbarHeight = $('.navbar').css('height');
      //change top offset of navbar to be negative height of the navbar over 100ms
      $('.navbar').animate({top: '-' + navbarHeight}, 100);
      userScrollPos = scrollTop;
    } else if (userScrollPos - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 100);
      userScrollPos = scrollTop;
    }
  });
});
