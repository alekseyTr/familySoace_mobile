/**
 * Created by Al on 16.02.2017.
 */
$( document ).ready(function () {
// User page - move user status up
    $('#column-left .column-wrapper')
        .prepend($('#column-content #block-profile-mood'));

// Photo page - move photo info up
    $('.photo-comments-block')
        .prepend($('.photo-info-block'));
});
