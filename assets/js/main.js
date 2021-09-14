const responsive ={
        0 :{
            items:1
        },
        320 :{
            items:1
        },
        560 :{
            items:2
        }
        ,960:{
            items:3
        }
}
$(document).ready(function(){
    $nav =$('.nav');
    $stoggleCollapse = $('.toggle-Collapse');


    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        responsive:responsive
        
    });

    AOS.init();
})
function ontop(){
    setTimeout(function(){  document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;; }, 500);
} 

