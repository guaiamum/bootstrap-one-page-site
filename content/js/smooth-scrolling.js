var scrollLinks;
var diferencaNavbar;

function smoothScrolling() {
  scrollLinks = $('.scroll');
  diferencaNavbar = $('#myNavbar').height();
  
  //First Run
  onScroll();

  /* Scroll smoothly to section after click */
  scrollLinks.on('click', function(e) {
    e.preventDefault();

    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - diferencaNavbar
    }, 1000);

  });

  $(window).on('scroll', () => { onScroll(); });
  
}

/* Animate link on scroll */
var onScroll = function() {
  var scrollbarLocation = $(this).scrollTop() + diferencaNavbar; //height on the top of the browser, below the navbar

  //for each link, verify if the height belongs to the corresponding section
  scrollLinks.each(function() {
    var sectionOffset = $(this.hash).offset().top; //gets every section height
    var idSection = $(this.hash).attr('id'); //section ID
    
    if (sectionOffset < scrollbarLocation + 1) { //if height of browser is greater, it is the active link
      scrollLinks.parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
    }
  })
}













//Thanks to Kevin Powell for sharing the knowledge used to 'craft' this script (https://www.youtube.com/watch?v=x0YnVwAuNQI)