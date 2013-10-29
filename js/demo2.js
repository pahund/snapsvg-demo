$('document').ready(function () {
    var snap = Snap('#demo');
   
    Snap.load('img/mobile-logo.svg', function (logo) {
        snap.append(logo);
        $('#rotate').on('click', function () {
            Snap.select('#letter_x5F_o').animate({
                transform: 'r360t360'
            }, 1200);
        });
        $('#dali').on('click', function () {
            Snap.select('#letter_x5F_o').animate({
                d: 'M224.286,81.714c0-15.472,8.054-19.062,17.731-19.062c7.969,0,21.697-2.071,21.697,16.776c0,18.849,16,64.571-21.697,36.393c-7.751-5.794-10.534-11.114-10.534-26.583L224.286,81.714z M206.571,101.143c-13.714,30.286,36.544,31.645,58.857,39.429c24.571,8.571,12-29.546,12-55.429c0-26.305-23.801-46.706-47.429-46.285c-22.489,0-18.159,24.501-18.159,50.381L206.571,101.143z'
            }, 1200);
        });
    });
     
});