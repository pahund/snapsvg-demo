$('document').ready(function () {
    var snap = Snap('#demo');
   
    Snap.load('img/mobail-icon.svg', function (button) {
        snap.append(button);

        var phone = Snap.select('#icon');
        var overlay = Snap.select('#overlay');
        var handler;

        overlay.hover(function () {
            console.log('in');
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
            console.log('out');
            window.clearInterval(handler);
        });
    });
});