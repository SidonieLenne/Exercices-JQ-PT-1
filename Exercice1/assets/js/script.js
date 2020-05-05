$(document).ready(function(){
    (function($) {
        $.fn.invisible = function() {
            return this.each(function() {
                $(this).css("visibility", "hidden");
            });
        };
    }(jQuery));
    $("#text").invisible();
});

