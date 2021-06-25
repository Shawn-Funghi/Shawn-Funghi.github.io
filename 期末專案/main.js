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
            targets: '.back,.select,#d_1',
            opacity: 1
        }).add({
            targets: '.nav',
            top: '0%'
        })
    });
    var col = 1;
    $('.confirm').click(function () {
        console.log('顯示側的col ='+col)
        col++;
        let before = 500 + (col - 2) * 1125;
        let before_id = '.d' + before ;
        $(before_id).css('z-index', '1');
        
        let after = before + 1125;
        let after_id = '.d' + after ;
        $(after_id).css('z-index', '-2');
        
        let col_id = '#d_' + col;
        anime({
            targets: col_id,
            opacity: 1,
            duration: 500,
            easing: 'linear'
        })
        
    });
    $('#restart').click(function () { 
        col = 1;
        console.log('顯示側col restart =' + col)
    });

});