$(document).ready(function() {
    function printItinerary() {
        var myItinerary = $('.printdiv');
        var myPrintWindow = window.open(windowUrl, windowName, 'left=300,top=100,width=400,height=400');
        myPrintWindow.document.write(myItinerary.innerHTML);
        myPrintWindow.document.getElementById('printdiv').style.display='block'
        myPrintWindow.document.close();
        myPrintWindow.focus();
        myPrintWindow.print();
        myPrintWindow.close();    
        return false;
    }
    function printbox(){
        var content = $('.print').html();
        var printWindow = '<html><head><title>Flight Itinerary</title><link href="css/tempotrip.css" rel="stylesheet"><link href="css/profile.modules.css" rel="stylesheet"></head><body>'+ content +'</body></html>';

        mywindow = window.open('', 'print div', 'height=790,width=950');
        mywindow.document.write(printWindow);
        mywindow.document.getElementById('printdiv').style.display='block'
        setTimeout(function(){ mywindow.print() }, 100);
        //mywindow.close();
        return true;
    }
    $(".printButton").click(function(){
    	printbox();
	});
});