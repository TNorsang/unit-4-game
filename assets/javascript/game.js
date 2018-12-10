// Waits for the DOM to Load
$(document).ready(function() {
    
    $("#instructions").hide();

    $("#how-to-play").click(function() {
        $("#instructions").show();
    });

    $("#close").click(function() {
        $("#instructions").hide();
    });

});







