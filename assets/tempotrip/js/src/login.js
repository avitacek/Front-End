
$(document).ready(function(){
    var regTypeId = false;
	$("#login-register").click(function(){
    	$("#register-slider").addClass("open");
    	$("#landing-register").addClass("open");
	});
	$("#login-return").click(function(){
    	$("#register-slider").removeClass("open");
    	$("#landing-register").removeClass("open");
	});
    function checkRegister(){
        if (regTypeId === true){

        }
        else{
            $("#register-side-title").text("Not Registered yet?");
            $("#register-side-text").text("Contact your company or Departments travel administrator to get your account setup.")
            $("#login-register").addClass('hide')
        }
    }
    checkRegister();
    function required(){  
        var empt = document.forms["register-form"]["fname", "lname", "email"].value;  
        if (empt == ""){  
                alert("Please input a Value");  
                return false;  
        }  
        else{  
            $('#submit').removeClass('disabled');  
            return true;   
        }  
    }
    $('#register-form input').blur(function()
    {
        if( $(this).val().length === 0 ) {
            $(this).parents('p').addClass('warning');
        }
    });  

});


