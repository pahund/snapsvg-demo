$('document').ready(function () {
    var viewport = Snap('#demo');
    var bigCircle = viewport.circle(20, 100, 10);
    bigCircle.attr({
        fill: '#000000',
        stroke: '#000000',
        strokeWidth: 5
    });
    var $button = $('button');
    $button.removeAttr('disabled');
    $button.on('click', function () {
        $(this).attr('disabled', 'disabled');
        bigCircle.animate({
            cx: window.innerWidth / 2,
            r: 100,
            fill: '#ffa500'
        }, 1000, null, function () {
            bigCircle.animate({
                cx: window.innerWidth,
                r: 10,
                fill: '#000000'
            }, 1000);
        });

    });

});
