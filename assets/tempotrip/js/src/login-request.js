
$(document).ready(function(){
	$("#login-register").click(function(){
    	$("#register-slider").addClass("open");
    	$("#landing-register").addClass("open");
	});
	$("#login-return").click(function(){
    	$("#register-slider").removeClass("open");
    	$("#landing-register").removeClass("open");
	});
});
