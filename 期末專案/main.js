$(document).ready(function () {
    $('#start').click(function () {

        $('.select').css('z-index', '0');
        $('.back').css('z-index', '0');
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
            targets: '.back,.select,#d_1',
            opacity: 1
        }).add({
            targets: '.nav',
            top: '0%'
        })
    });
    var col = 1;
    $('.confirm').click(function () {
        col++;
        let lf = 5 + (col - 2) * 11.25;
        let id = '#' + lf ;
        console.log(id);
        console.log($(id).css('z-index'));
        let col_id = '#d_' + col;
        console.log(col_id);
        anime({
            targets: col_id,
            opacity: 1,
            duration: 500,
            easing: 'linear'
        })
        
    });


});