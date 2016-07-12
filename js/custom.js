$(document).ready(function (){
	 
   $(".my-about").css("display","block").animate({width:"100%"},1000);
   $("#title").html("About Me");
   
  $( ".projects" ).click(function() {
	  
    $("#title").html("Projects"); 
	  $(".my-about").css({"display":"none","width":"100px"});
    $(".my-skills").css("display","none");
    $(".my-achievements").css({"display":"none","width":"100px"});
    $(".my-projects").css("display","block").animate({width:"100%"},2000);
  
  });
  
  $( ".skills" ).click(function() {
	  $("#title").html("Skills");  
    $(".my-about").css({"display":"none","width":"100px"});
    $(".my-projects").css({"display":"none","width":"100px"});
    $(".my-achievements").css({"display":"none","width":"100px"});
	  $(".my-skills").css("display","block");
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },2000);
	});
	
	
  });
  
  $( ".about" ).click(function() {
	  $("#title").html("About Me");
	  $(".my-projects").css({"display":"none","width":"100px"});
	  $(".my-skills").css("display","none");
    $(".my-achievements").css({"display":"none","width":"100px"});
	  $(".my-about").css("display","block").animate({width:"100%"},1000);
   
  });
  
  $( ".achievements" ).click(function() {
	  $("#title").html("My Achievements");
	  $(".my-projects").css({"display":"none","width":"100px"});
	  $(".my-skills").css("display","none");
	  $(".my-about").css({"display":"none","width":"100px"});
    $(".my-achievements").css("display","block").animate({width:"100%"},1000);
  });
  
  $( "#cross-button" ).click(function() {
	  $(".overlay").css("display","none");
  });
  
  $( "#cap-button" ).click(function() {
	  $(".overlay").css("display","block");
    $(".overlay-content").html("<iframe src='Capacitance_meter.pdf' width='100%' height='440px;'></iframe>");
  });
  
  $( "#microsoft" ).click(function() {
	  $(".overlay").css("display","block");
    $(".overlay-content").html("<iframe src='Certificate_1.pdf' width='100%' height='440px;'></iframe>");
  });
});

//youtube plugin api

