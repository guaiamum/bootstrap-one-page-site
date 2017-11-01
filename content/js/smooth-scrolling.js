function smoothScrolling() {
  //Smooth automated Scrolling
  var scrollLinks = $('.scroll');

  scrollLinks.on('click', function(e) {
    e.preventDefault();

    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);

  });

  //Active link change
  $(window).on('scroll', function() {
    var scrollbarLocation = $(this).scrollTop(); //height on the top of the web browser

    scrollLinks.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20;//gets every section height

      if (sectionOffset <= scrollbarLocation) { //if height of browser is greater, it is the active link
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })

}
