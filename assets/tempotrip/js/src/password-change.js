$(document).ready(function(){
    $("#save-btn").addClass('disabled')
    $('#pass1, #pass2').on("mouseleave", function(){
        var pass1 = $("#pass1").val();
        var pass2 = $("#pass2").val();

        if(pass1 != pass2) {
            $("#pass1").removeClass('match')
            $("#pass2").removeClass('match')
            $("#pass1").addClass('dont-match')
            $("#pass2").addClass('dont-match')
        }
        else{
            $("#pass1,#pass2").removeClass('dont-match')
            $("#pass1,#pass2").removeClass('dont-match')
            $("#pass1").addClass('match')
            $("#pass2").addClass('match')
            $("#save-btn").removeClass('disabled')
        }
        
    })   
});


