$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["generasi Al-Qur'an", "Guru Qur'an"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Program ALQUDS"],
        typeSpeed: 100,
        backSpeed: 200,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
  
  //   nav content
    $('.aicon').click(function(){
    $('span').toggleClass("cancel");
  });

  // alert sweet
      function showalert() {
         Swal.fire(
          'Mohon Maaf',
          'Pendaftaran Belum dibuka !',
          'info'
          )
        }
        
        // loading
        $(window).on('load',function(){
            $(".loader").fadeOut(1000);
            $(".content").fadeIn(1000);
        });

        // alert notif
        $('#showcontacwa').click(function(){
            $('.tbl').addClass("show");
            $('.tbl').removeClass("hide");
            $('tbl').addClass("show#hidecontacwa");
        });
        $('.close-btn').click(function(){
            $('.tbl').removeClass("show");
            $('.tbl').addClass("hide");
        });