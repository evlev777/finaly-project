$('.document').ready(() => {
  $('.carousel.carousel-slider').carousel();

  setInterval(() => {
    $('.carousel.carousel-slider').carousel('next',{
      fullWidth: true,
      shift:200
    });
  },2500)



})

