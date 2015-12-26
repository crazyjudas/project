$(document).ready(function() {
    
    var currentHeight = $(window).height();
    console.log(currentHeight);
    $(".banner-con").css("height",(currentHeight-140)+"px");

    $(window).resize(function(){
    	var currentHeight = $(window).height();
    	console.log(currentHeight);
    	$(".banner-con").css("height",(currentHeight-140)+"px");
    });

   

});