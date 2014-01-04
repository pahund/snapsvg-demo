$('document').ready(function () {
    var viewport = Snap('#demo');
   
    Snap.load('img/mobail-icon.svg', function (button) {
        viewport.append(button);

        var phone = Snap.select('#icon');
        var overlay = Snap.select('#overlay');
        var handler;

        overlay.hover(function () {
            handler = window.setInterval(function () {
                phone.animate({
                    transform: 't2r0'
                }, 20, null, function () {
                    phone.animate({
                        transform: 't-2r0'
                    }, 20);
                });
            }, 60);
        }, function () {
            window.clearInterval(handler);
        });
    });
});