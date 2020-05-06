$(document).ready(function(){
    $(function(){      
        $("#show").click(function() {
            $("#text").fadeIn("normal");
        });
    
        $("#hide").click(function() {
        $("#text").fadeOut("normal");
        });       
    })
});