$('document').ready(function () {

    $('#letter-submit').on('click', function () {
        var text = $('#letter-text').val();
        $('#letter-form').hide();
        var viewport = Snap('#demo');
        Snap.load('img/send-letter.svg', function (sendLetter) {
            var letterGroup = sendLetter.select('#letter');
            var y = 50, x = 35, lineh = 20;
            $.each(wrapText(text), function (k, line) {
                letterGroup.append(viewport.text(x, y, line));
                y += lineh;
            });
            viewport.append(sendLetter);
            letterGroup.animate({
                transform: 't0,318'
            }, 1000, null, function () {
                viewport.select('#back').attr({ opacity: 0 });
                viewport.select('#closed_flap').attr({ opacity: 1 });
                viewport.select('#all').animate({
                    transform: 't2000,0'
                }, 1000);
            });

        });
    });

});

var wrapText = function (text) {
    var words = text.split(/(\s|\n|\t)+/g), maxlen = 28, lines = [], currline = '';
    $.each(words, function (k, word) {
        if (currline.length + 1 + word.length > maxlen) {
            lines.push(currline);
            currline = word;
        } else {
            currline = currline + ' ' + word;
        }
    });
    lines.push(currline);
    return lines;
}

