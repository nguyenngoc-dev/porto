// clients 1
$(document).ready(function(){
    $(".clients-list").owlCarousel();
});
$('.clients-list').owlCarousel({
nav:true,
loop:true,
margin:10,
autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:false,
responsive:{
    0:{
        items:1
    },
    600:{
        item:4
    },
    1000:{
        items:6
    }
}
});
$('.play').on('click',function(){
owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
owl.trigger('stop.owl.autoplay')
})
// clients 2
$(document).ready(function(){
    $(".clients-list-2").owlCarousel();
});

$('.clients-list-2').owlCarousel({
    loop:true,
    margin:35,
    nav:true,
    responsive:{
        0:{
            items:1
         }
        }
})