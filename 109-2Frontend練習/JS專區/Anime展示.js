$(document).ready(function () {
    $('#moveright').mouseenter(function () {
        anime({
            targets: '#moveright',
            translateX: '50vw',
            opacity: [0.2, 1],
            duration: 3000,
            easing: 'linear',
            direction: 'alternate'
        })
    });
    $('#rotateright').mouseenter(function () {
        anime({
            targets: '#rotateright',
            translateX: '50vw',
            rotate: [0, 720],
            scale: [0.5, 1],
            duration: 3000,
            easing: 'easeInOutQuad',
            direction: 'alternate'
        })
    });
    $('#process').mouseenter(function () {
        let tl = anime.timeline();
        tl.add({
            targets: ['#bar','#process'],
            value: [0, 1],
            easing: 'linear',
            duration: 1000,
        }).add({
            targets: '#process', 
            translateX: '50vw',
            easing:'easeOutCirc',
            duration: 2000,
        }).add({
            targets: '#process', 
            easing:'easeOutCirc',
            translateX: '0vw',
            duration: 2000
        })

    });
    anime({
        targets:'#circle',
        width:'100%',
        borderRadius: ['0%', '10%'],
        duration: 2000,
        direction: 'alternate',
        easing: 'linear',
        loop:true
    })
});