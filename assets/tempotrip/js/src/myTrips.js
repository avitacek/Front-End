$(document).ready(function() {
    $('#myTrips').DataTable({
    	"ajax": '../js/ajax/trips.json'
    });
} );