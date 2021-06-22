$(document).ready(function () {
    $('#start').click(function () {
        $('.back').css('z-index', '0');
        $('.select').css('z-index', '0');
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
        let col_id = '#d_' + col;
        console.log(col_id);
        anime({
            targets:col_id,
            opacity: 1,
            duration: 500,
            easing: 'linear'
        })
        
    });
  

});