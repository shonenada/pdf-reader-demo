$(function(){

    var MINIMUM_SIZE = 800;
    var MAXIMUM_SIZE = 1000;

    $("#zoom-in").click(function(){
        var width = parseInt($(".piece").css('width').replace("px", "'"));
        if (width < MAXIMUM_SIZE){
            $(".piece").animate({width: '+=50px'}, 'fast')
        }
    });

   $("#zoom-out").click(function(){
        var width = parseInt($(".piece").css('width').replace("px", "'"));
        if (width > MINIMUM_SIZE){
            $(".piece").animate({width: '-=50px'}, 'fast')
        }
    });
});