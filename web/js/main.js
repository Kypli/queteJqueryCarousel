// Afficher le caroussel
$(function(){
    $(".cadre:not(:first)").hide();
});

// Défiler les image au click
$('.container').on('click', '.image', function (e) {

    number = $(this).attr('id');
    nextNumber = parseInt(number) + parseInt(1);

    if (number == 4) {
        nextNumber = 1;
    }
    console.log(nextNumber);

    $("#" + number).hide();
    $("#" + nextNumber).show();
});

// Défiler les images toutes seules
function defile()
{


    clearInterval(timer);


}

var timer = setInterval('defile()',3000);
