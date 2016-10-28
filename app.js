$(function(){

    
    $("a.youtube").on("click",function(e){
  var wrapper = $("#video-modal");
	var href= $(this).attr("href");
  var customFrame =  '<iframe src='+href+'  width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""> </iframe>';
  $(wrapper).append(customFrame).show();
	e.preventDefault();
        $("a.closeVideoButton").on("click", function(){
            $(wrapper).append(customFrame).hide();
        });
    });
    var main = function(){
        var animationName = "animated fadeInUp";
        var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        $(".row1").hide();
        $(".row").addClass(animationName);
        $(".intro").addClass(animationName);
        $("a.startButton").on("click", function() {
           $(".row").slideUp(1000);
           $(".intro").slideUp(2000);
         $(".row1").slideDown(3000);
         $(".visual").hide();
         $(".kiss").hide();
        });

        $("a.homeButton").on("click", function(){
         $(".row1").slideUp(1000);
         $(".row").slideDown(1500);
         $(".intro").slideDown(1500);
        });

        $("a.manyKanyes").on("click", function(){
          $(".visual").toggle(1000);
        });

        $("a.kanyeLoves").on("click", function(){
          $(".kiss").toggle(1000);
        }); 
    } 
       
});
$(document).ready(main);
