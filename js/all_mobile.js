/**
 * Created by Al on 16.02.2017.
 */
$( document ).ready(function() {
    //  Fixed top menu
    $(window).on('scroll', function(){
        if( $(window).scrollTop() > 50 ) {
            $('#header-area #panel-2').addClass('panel-2--fixed');
        } else {
            $('#header-area #panel-2').removeClass('panel-2--fixed');
        }
    });
});
