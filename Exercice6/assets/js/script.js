$(document).ready(function(){
    $('#link').mouseover(function() {
        $('#link').width('80%'); //Ne pas mettre de quotes ni de valeur pour les pixels 
    });
    $('#link').mouseout(function() {
        $('#link').css('width','676px');
    });
});