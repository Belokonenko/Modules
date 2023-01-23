 // $(document).ready(() => {
 //     $('.slider').slick({
 //        // arrows: false,
 //         centerMode: true,
 //         slidesToShow: 3,
 //         centerPadding: '60px',
 //     });
 // });

$('.slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
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
