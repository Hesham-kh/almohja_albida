
/*





$(document).ready(function(){

[ jQuery In Arabic ] #03 -Events//////////// - click / dblclick / mouseenter / mouseleave / hover
                                                              الاحداث او التاثيرات الى بتصير     methodse{
 hide  / show  / toggle
fadeIn   / fadeOut  /fadeToggle  /  fadeTo
slideUp   / slideDown  / slideToggle
attr/   preventDefault/  
addClass/ removeClass /toggleClass
}
});
///////////////////////////////////////////////




$("button").click(function(){
    $("input").attr({
        "type":"text"   الخاصيه attrتستخدم لتغيير اتربيوت مثل عنوان صورة او tayp &src&class
})


$("a").click(function(p){
    p.preventDefault();
    $("img").fadeIn(2000)     
    لتغيير الافتراضي لايتاغ مثلا تاغ a
})


$("li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
})
اظافة كلاس وحدفة من اخوانة مثلا كنافبار وعناصرةوعندما نظغط ينتقل من مكانة ل اخرى



$(window).scroll(function(){
    if($(window).scrollTop()>=900){
        $(".box").fadeToggle(500)
    }
})سكرول لمن تنزل يعمل ايفنت
/////////////////////////////////////////
لودينق 

$(document).ready(function(){

});

$(window).on("load",function(){
    $(".loding-screen").fadeOut(2500)
})
لودينق 



////////////////////////////////
   $(".owl-carousel").owlCarousel({
            items:1,
            rtl:true,
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause: true,
        })
        شغل مكتبه owl slider

        ////////////////////////////////////
        شغل مكتبة العد countUp
        $('.count').counterUp({
    delay: 10,
    time: 2000
});
////////////////////////////////
شغل مكتبه aos animeta
AOS.init();
///////////////////////
شغل مكتبة loding
$(window).on("load",function(){
    $(".loding-screen").fadeOut(2500)
})

*/



$('.count').counterUp({
    delay: 10,
    time: 2000
});


AOS.init();


$(window).on("load",function(){
    $(".loding-screen").fadeOut(2500)
})


    $(document).ready(function(){

        
        $(".owl-carousel").owlCarousel({
            items:1,
            rtl:true,
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause: true,
        })
      
      });

  
