$(document).ready(function () {
    $('#start').click(function () {

        $('.select').css('z-index', '0');
        $('.back').css('z-index', '0');
        $('.disabled').css('z-index', '1');
        $('.d500').css('z-index', '-2');

        let start = anime.timeline({
            duration: 500,
            easing: 'linear'
        });
        start.add({
            targets: '.hint',
            keyframes: [
                { opacity: 0 },
                { translateY: '-=200%' },
            ]
        }).add({
            targets: 'body',
            backgroundColor: 'rgb(147, 147, 255)'
        }).add({
            targets: '.back,.select',
            opacity: 1
        }).add({
            targets: '.nav',
            top: '0%'
        }).add({
            targets:'.disabled',
            opacity:0.2,
            duration:500,
            easing:'linear'
        })
    });
    var col = 0;
    $('.confirm').click(function () {
        if ($('#restart').css('background-color')!='rgb(255, 215, 0)') {
            if (col < 7) {
                console.log('顯示側的col =' + col)
                let before = 500 + col * 1125;
                let before_id = '.d' + before;
                $(before_id).css('z-index', '1');
                $(before_id).css('opacity', '0.2');

                let after = before + 1125;
                let after_id = '.d' + after;
                $(after_id).css('z-index', '-2');
                $(after_id).css('opacity', '0');
                col++;
            }
            if (col == 7) {
                $('.d8375').css('z-index', '1');
            }
        }else{
            $('.disabled').css('z-index', '1');
            $('.disabled').css('opacity', '0');
        }
    });
    $('#restart').click(function () {
        col = 0;
        console.log('顯示側col restart =' + col)
    });

});