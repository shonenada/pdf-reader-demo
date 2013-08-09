$(function(){

    var SMALL_SIZE = 800;
    var MIDDLE_SIZE = 960;
    var LARGE_SIZE = 1024;

    $("#zoom-in").click(function(){
        var width = parseInt($(".piece").css('width').replace("px", "'"));
        if (width == SMALL_SIZE){
            $(".piece").removeClass("piece-size-small");
            $(".piece").addClass("piece-size-middle");
        }
        if (width == MIDDLE_SIZE){
            $(".piece").removeClass("piece-size-middle");
            $(".piece").addClass("piece-size-large");
        }
    });
    
   $("#zoom-out").click(function(){
        var width = parseInt($(".piece").css('width').replace("px", "'"));
        if (width == MIDDLE_SIZE){
            $(".piece").removeClass("piece-size-middle");
            $(".piece").addClass("piece-size-small");
        }
        if (width == LARGE_SIZE){
            $(".piece").removeClass("piece-size-large");
            $(".piece").addClass("piece-size-middle");
        }
    });
});