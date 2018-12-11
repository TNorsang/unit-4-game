// Waits for the DOM to Load
$(document).ready(function() {



    $("#instructions").hide();

    $("#how-to-play").click(function() {
        $("#instructions").show();
    });

    $("#close").click(function() {
        $("#instructions").hide();
    });

    var wins = 0;
    var losses = 0;
    var yourScore = 0;
    var minNum = 19;
    var maxNum = 120; 
    var minCrystal = 1;
    var maxCrystal = 12;


    // TODO: random number goes above 120. * 6) + 1  
    var randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    
    $('#targetScore').text(randomNumber);

    console.log($('#crystal-one').val());

    $('.crystal').click(function() {
        $('.crystal').val(Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal);
        console.log($('#crystal-one').val());
        $('#yourScore').text($('.crystal').val());

    });

    $('#winScore').text(wins);
    $('#lossScore').text(losses);

});







