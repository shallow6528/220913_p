window.onload= function(){

}

//바닐라 자바스크립트 레디


$(document).ready(function(){

    AOS.init(); //aos 실행 객체에 직접 값을 넣은것
    $(document).ready(function() {
        "use strict";})
      
        //Swiper

        var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  pagination:{
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  // grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
  mousewheelControl: 1
});

          //-------------------------------------------------------*/
        //initialize swiper when document ready
      //   var mySwiper = new Swiper(".swiper-container", {
      //     // Navigation arrows
      //     nextButton: ".swiper-button-next",
      //     prevButton: ".swiper-button-prev",
      //     slidesPerView: 2.7,
      //     centeredSlides: true,
      //     breakpoints: {
      //       1440: {
      //         slidesPerView: 2.6
      //       },
      //       1439: {
      //         slidesPerView: 1.45
      //       },
      //       1024: {
      //         slidesPerView: 1.45
      //       },
      //       1023: {
      //         slidesPerView: 2
      //       },
      //       768: {
      //         slidesPerView: 2
      //       },
      //       568: {
      //         slidesPerView: 1.5,
      //         spaceBetween: 10
      //       },
      //       414: {
      //         slidesPerView: 1.09,
      //         spaceBetween: 3
      //       },
      //       320: {
      //         slidesPerView: 1.09,
      //         spaceBetween: 3
      //       }
      //     }
      //   });
      // })
      
///////





//메뉴
    $('#allMenu').click(function(){
        $(this).toggleClass('open');
    })
    $('#gnb a').click(function(e){
        e.preventDefault();
        var clicka = $(this);
        $('body, html').animate({
            scrollTop : $(clicka.attr('href')).offset().top
        }, 400,function(){
            $('#gnb a').removeClass('act')
            clicka.addClass('act');
        })
        
    })
})


//about skill

$({ val : 0 }).animate({ val : 70 }, {
  duration: 2000,
  step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".count_num").text(num);
  },
  complete: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".count_num").text(num);
  }
});

$({ val : 0 }).animate({ val : 50 }, {
  duration: 2000,
  step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".count_num2").text(num);
  },
  complete: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".count_num2").text(num);
  }
});

$({ val : 0 }).animate({ val : 30 }, {
  duration: 2000,
  step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".count_num3").text(num);
  },
  complete: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".count_num3").text(num);
  }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}