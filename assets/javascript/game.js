// Waits for the DOM to Load
$(document).ready(function () {



    $("#instructions").hide();

    $("#how-to-play").click(function () {
        $("#instructions").show();
    });

    $("#close").click(function () {
        $("#instructions").hide();
    });

    var wins = 0;
    var losses = 0;
    var yourScore = 0;
    var minNum = 19;
    var maxNum = 120;
    var minCrystal = 1;
    var maxCrystal = 12;

    // Generates random Target Score for the user. 
    var targetScore = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    $('#targetScore').text(targetScore);
    $('#yourScore').text(yourScore);

    function reset() {
        yourScore = 0;
        $('#yourScore').text(yourScore);
        targetScore = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        $('#targetScore').text(targetScore);
    }

    $('.crystal').click(function () {
        $('.crystal').val(Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal);
        yourScore = yourScore + parseInt($('.crystal').val());
        $('#yourScore').text(yourScore);
        console.log(yourScore);
        
        
        if (targetScore === yourScore) {
            wins++;
            $('#winScore').text(wins);
            alert("You Win!");
            reset();

        } else if (targetScore < yourScore) {
            losses++;
            $('#lossScore').text(losses);
            alert("You Lost! Try Again :)");
            reset();
        } 
    });
$('#winScore').text(wins);
$('#lossScore').text(losses);

});












