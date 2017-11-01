function smoothScrolling() {
  //Smooth automated Scrolling
  var scrollLinks = $('.scroll');
  var diferencaNavbar = $('#myNavbar').height();

  scrollLinks.on('click', function(e) {
    e.preventDefault();
    
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - diferencaNavbar
    }, 1000);

  });

  //Active link change
  $(window).on('scroll', function() {
    var scrollbarLocation = $(this).scrollTop() + diferencaNavbar; //height on the top of the web browser

    scrollLinks.each(function() {
      var sectionOffset = $(this.hash).offset().top;//gets every section height

      if (sectionOffset < scrollbarLocation + 1) { //if height of browser is greater, it is the active link
        //console.log(sectionOffset,scrollbarLocation);
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })

}

//Thanks to Kevin Powell for sharing the knowledge used to 'build' this script (https://www.youtube.com/watch?v=x0YnVwAuNQI)
