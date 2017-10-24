var fileInput  = $( "#fileUpload" ),  
    button     = $( ".input-file-trigger" ),
    the_return = $(".file-return");
      
button.on( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.on( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.on( "change", function( event ) {  
    the_return.append(this.value);
    console.log(this.value)  
});  

