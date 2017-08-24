
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
$(window).load(function(){
    $("input").val("");
    
    $("input").focusout(function(){
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    })
});