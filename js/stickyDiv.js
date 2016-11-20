$(document).ready(function() {
    var stickyDiv = $(".mainMenu");
    $(".stickyPlaceHolder").css({ height: stickyDiv.height() });
    var pos = stickyDiv.position().top;
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if (scroll >= pos) {

            stickyDiv.css({ position: 'fixed' });
            stickyDiv.css({ width: '480px' });
            stickyDiv.css({ 'border-left': '8px solid' });
            stickyDiv.css({ 'border-radius': '10px' });
        } else {
            stickyDiv.css({ position: '' });
            stickyDiv.css({ width: '472px' });
            stickyDiv.css({ width: '100%' });
            stickyDiv.css({ border: '' });
            stickyDiv.css({ 'border-radius': '0px' });
        }
    });
});
