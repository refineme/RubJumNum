$(document).ready(function(){
    $('.review-wrapper').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      // autoplay: true,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
});

$(document).ready(function() {
  $(document).on("scroll", onScroll);
  function onScroll(event){
    var scrollPos = $(document).scrollTop() + 500;
    $('a[href*=\\#]:not([href=\\#])').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.length) {
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              currLink.parents('.nav-item').addClass("active");
          }
          else{
              currLink.parents('.nav-item').removeClass("active");
          }
        }
      });
    }
})
