// ------------------- DOM Loader ---------------- \\
$(document).ready(function () {

    // ------------------- How To Play Button Function ---------------- \\
    $("#instructions").hide();

    $("#how-to-play").click(function () {
        $("#instructions").show();
    });

    $("#close").click(function () {
        $("#instructions").hide();
    });

    // ------------------- Global Variables ---------------- \\
    var wins = 0;
    var losses = 0;
    var yourScore = 0;
    var minNum = 19;
    var maxNum = 120;
    var minCrystal = 1;
    var maxCrystal = 12;
    
    // ------------------- Random Target Score Generator ---------------- \\
    var targetScore = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    $('#targetScore').text(targetScore);
    $('#yourScore').text(yourScore);
    
    // ------------------- Reset Function ---------------- \\
    function reset() {
        yourScore = 0;
        $('#crystal-one').val(Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal);
        $('#crystal-two').val(Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal);
        $('#crystal-three').val(Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal);
        $('#crystal-four').val(Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal);
        $('#yourScore').text(yourScore);
        targetScore = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        $('#targetScore').text(targetScore);
    }

    // ------------------- Crystals Random Value Generator ---------------- \\
    var crystalOne = $('#crystal-one').val(Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal);
    var crystalTwo = $('#crystal-two').val(Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal);
    var crystalThree = $('#crystal-three').val(Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal);
    var crystalFour = $('#crystal-four').val(Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal);

    // ------------------- Crystal One Rules ---------------- \\
    $('#crystal-one').click(function () {
        yourScore = yourScore + parseInt($('#crystal-one').val());
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
    
    // ------------------- Crystal Two Rules ---------------- \\
    $('#crystal-two').click(function () {
        yourScore = yourScore + parseInt($('#crystal-two').val());
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
    // ------------------- Crystal Three Rules ---------------- \\
    $('#crystal-three').click(function () {
        yourScore = yourScore + parseInt($('#crystal-three').val());
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

    // ------------------- Crystal four Rules ---------------- \\
    $('#crystal-four').click(function () {
        yourScore = yourScore + parseInt($('#crystal-four').val());
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












