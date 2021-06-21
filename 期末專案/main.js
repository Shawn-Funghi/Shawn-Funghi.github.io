$(document).ready(function () {
    $('#start').click(function () {
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
            targets: '.back',
            opacity: 1
        }).add({
            targets: '.nav',
            top: '0%'
        })
    });
  

});