$('document').ready(function () {
    var snap = Snap('#demo');
    var bigCircle = snap.circle(10, 100, 10);
    bigCircle.attr({
        fill: '#000000',
        stroke: '#000000',
        strokeWidth: 5
    });
    $('button').on('click', function () {
        $(this).attr('disabled', 'disabled');
        bigCircle.animate({
            cx: window.innerWidth / 2,
            r: 100,
            fill: '#ffa500'
        }, 1000, null, function () {
            bigCircle.animate({
                cx: window.innerWidth - 10,
                r: 10,
                fill: '#000000'
            }, 1000);
        });

    });

    /*
    */
    /*
    var smallCircle = snap.circle(100, 150, 70);
    var discs = snap.group(smallCircle, snap.circle(200, 150, 70));
    discs.attr({
        fill: "#fff"
    });
    bigCircle.attr({
        mask: discs
    });
    smallCircle.animate({r: 50}, 1000);
    discs.select("circle:nth-child(2)").animate({r: 50}, 1000);
    var pattern = snap.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 5
    });
    pattern = pattern.pattern(0, 0, 10, 10);
    bigCircle.attr({
        fill: pattern
    });
    discs.attr({
        fill: Snap("#pattern")
    });
    discs.attr({fill: "R(150, 150, 100)#fff-#000"});
    */
});
