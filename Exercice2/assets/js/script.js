/*Version fonction CSS:
$(document).ready(function(){
    (function($) {
        $.fn.visible = function() {
            return this.each(function() {
                $(this).css("visibility", "visible");
            });
        };
    }(jQuery));
    $('#text').visible() ;
})*/

//Version "show"
$(document).ready(function(){
    $('#text').show() ;
});