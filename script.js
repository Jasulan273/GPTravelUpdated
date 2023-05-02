var swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    initialSlide: 1 // Указываем номер слайда, который должен быть центральным при загрузке страницы
  });

  
  function openForm() {
    if (document.getElementById("myForm").style.display == "none") {
        document.getElementById("myForm").style.display = "block";
    }
    else if (document.getElementById("myForm").style.display == "block") {
        document.getElementById("myForm").style.display = "none";
    }
}
