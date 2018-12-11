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
    $('#yourScore').text(yourScore);


    $('.crystal').click(function() {
        $('.crystal').val(Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal);
        yourScore = yourScore + parseInt($('.crystal').val());
        $('#yourScore').text(yourScore);
        console.log(yourScore);

    });

    $('#winScore').text(wins);
    $('#lossScore').text(losses);

});







