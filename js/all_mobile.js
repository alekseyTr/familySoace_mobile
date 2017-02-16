/**
 * Created by Al on 16.02.2017.
 */
//  Fixed top menu
$(window).on('scroll', function(){
    if($(window).scrollTop() > 50) {
        // фиксирует меню при прокрутке
        $('#panel-2').addClass('panel-2--fixed');
    } else {
        // возвращает в обычное состояние если нет скрола
        $('#panel-2').removeClass('panel-2--fixed');
    }
});
// Add meta
$("head").
append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">')
// User page - move user status up
var $userStatus = $('#column-content #block-profile-mood');
$('#column-left .column-wrapper').prepend($userStatus);

// Photo page - move pot info up
var $photoComment = $('.photo-info-block');
$('.photo-comments-block').prepend($photoComment);