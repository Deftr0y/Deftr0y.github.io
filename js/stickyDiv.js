$(document).ready(function() {
    var stickyDiv = $(".mainMenu");
    $(".stickyPlaceHolder").css({ height: stickyDiv.height() });
    var pos = stickyDiv.position().top;
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if (scroll >= pos) {

            stickyDiv.css({ position: 'fixed' });
        } else {
            stickyDiv.css({ position: '' });
        }
    });
});
