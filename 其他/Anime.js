$(document).ready(function () {
    $(".btn_stop").click(function () {
        title.pause();
    });
    $(".btn_start").click(function () {
        title.play();
    });
    let title = anime({
        targets: '.head',
        keyframes: [
            { backgroundColor: 'rgb(233, 142, 57)' },
            { backgroundColor: 'rgb(181, 114, 243)' },
            { backgroundColor: 'rgb(243, 114, 200)' },
            { backgroundColor: 'rgb(238, 224, 143)' },
            { backgroundColor: 'rgb(127, 255, 170)' }
        ],
        duration: 1000,
        easing: 'linear',
        loop: true
    });
    anime({
        targets: '.word',
        keyframes: [
            { translateY: '-25%' },
            { translateY: '25%', },
            { translateY: '0', }
        ],
        delay: anime.stagger(500),
        easing: 'easeInOutCirc',
        loop: true
    })
    $('#move').click(function () {
        anime({
            targets: '#btn_move',
            translateX: '200%',
            duration: 500,
            direction: 'alternate'
        })
    });
    $('#spin').click(function () {

        anime({
            targets: '#btn_spin',
            rotateZ: [0, 360],
            duration: 500,
            direction: 'alternate'
        })
    });

    $('#scale').click(function () {
        anime({
            targets: '#btn_scale',
            scale: [1, 1.5],
            duration: 500,
            direction: 'alternate'
        })

    });
    $('#btn_opacity').click(function () {
        anime({
            targets: '#opacity',
            opacity: [1, 0],
            duration: 2000,
            direction: 'alternate',
            easing: 'linear'
        })
    });
    $('#btn_delay').click(function () {
        $('#delay').css('background-color', 'black');

        anime({
            delay: 1000,
            duration: 1000,
            targets: '#delay',
            translateX: '100%',
            direction: 'alternate'
        })
    });
    $('#btn_transform').click(function () {
        anime({
            targets: '#transform',
            scaleX: [
                { value: [1, 2], duration: 500 },
                { value: [2, 0.1], duration: 1000 },
                { value: [0.1, 1], duration: 500 },
            ],
            scaleY: [
                { value: [1, 0.1], duration: 500 },
                { value: [0.1, 2], duration: 1000 },
                { value: [2, 1], duration: 500 },
            ],
            easing: 'easeInExpo',
        })
    });

    let b = anime({
        targets: '.example1 .black',
        scale: [
            { value: 0.4, easing: 'easeInOutExpo', duration: 800 },
            { value: 1, easing: 'easeInOutExpo', duration: 1200 }
        ],
        opacity: [
            { value: 0, easing: 'easeInOutExpo', duration: 800 },
            { value: 1, easing: 'easeInOutExpo', duration: 1200 }
        ],
        delay: anime.stagger(50, { grid: [20, 7], from: 'last' }),
        loop: true,
        autoplay: false
    })
    $('.btn_start2').click(function () {
        b.play();
    });
    $('.btn_stop2').click(function () {
        b.pause();
    });
    let c = anime.timeline({
        autoplay: false
    })
    c.add({
        targets: '.example2 .col',
        scaleX: [
            { value: 0.4, easing: 'easeInOutExpo', duration: 500 },
            { value: 0.8, easing: 'easeInOutExpo', duration: 1200 }
        ],
        opacity: [
            { value: 0, easing: 'easeInOutExpo', duration: 500 },
            { value: 0.2, easing: 'easeInOutExpo', duration: 1200 }
        ],
        delay: anime.stagger(50, { from: 'last' }),
    }).add({
        targets: '.T',
        top: [0, '12%'],
        opacity: 1,
        duration: 1500,
    }).add({
        targets: '.t',
        bottom: [0, '2%'],
        opacity: 1,
        delay: 1500,
        duration: 1500,
    })
    $('.btn_start3').click(function () {
        c.play();
    });
    $('#gather5').mouseenter(function () {

        anime({
            targets: '#gather1',
            top: '0%',
            left: '0%',
            opacity: 1,
            duration: 1000,
            easing: 'easeInOutExpo',
        })

        anime({
            targets: '#gather2',
            duration: 1000,
            easing: 'easeInOutExpo',
            top: '0%',
            opacity: 1,
        })
        anime({
            targets: '#gather3',
            duration: 1000,
            easing: 'easeInOutExpo',
            right: '0%',
            top: '0%',
            opacity: 1
        })
        anime({
            targets: '#gather4',
            duration: 1000,
            easing: 'easeInOutExpo',
            left: '0%',
            opacity: 1,
        })
        anime({
            targets: '#gather6',
            duration: 1000,
            easing: 'easeInOutExpo',
            right: '0%',
            opacity: 1,
        })
        anime({
            targets: '#gather7',
            duration: 1000,
            easing: 'easeInOutExpo',
            left: '0%',
            bottom: '0%',
            opacity: 1,
        })
        anime({
            targets: '#gather8',
            duration: 1000,
            easing: 'easeInOutExpo',
            bottom: '0%',
            opacity: 1,
        })
        anime({
            targets: '#gather9',
            duration: 1000,
            easing: 'easeInOutExpo',
            bottom: '0%',
            right: '0%',
            opacity: 1,
        })
    });
    $('#gather5').mouseleave(function () {

        anime({
            targets: '#gather1',
            top: '-100%',
            left: '-100%',
            opacity: 0,
            duration: 1000,
            easing: 'easeInOutExpo',
        })

        anime({
            targets: '#gather2',
            duration: 1000,
            easing: 'easeInOutExpo',
            top: '-100%',
            opacity: 0,
        })
        anime({
            targets: '#gather3',
            duration: 1000,
            easing: 'easeInOutExpo',
            right: '-100%',
            top: '-100%',
            opacity: 0,
        })
        anime({
            targets: '#gather4',
            duration: 1000,
            easing: 'easeInOutExpo',
            left: '-100%',
            opacity: 0,
        })
        anime({
            targets: '#gather6',
            duration: 1000,
            easing: 'easeInOutExpo',
            right: '-100%',
            opacity: 0,
        })
        anime({
            targets: '#gather7',
            duration: 1000,
            easing: 'easeInOutExpo',
            left: '-100%',
            bottom: '-100%',
            opacity: 0,
        })
        anime({
            targets: '#gather8',
            duration: 1000,
            easing: 'easeInOutExpo',
            bottom: '-100%',
            opacity: 0,
        })
        anime({
            targets: '#gather9',
            duration: 1000,
            easing: 'easeInOutExpo',
            bottom: '-100%',
            right: '-100%',
            opacity: 0,
        })
    });

    $('#rect_btn').click(function () {
        let re = anime({
            targets: '.rect',
            width: [
                { value: anime.random(10, 90) + '%', duration: anime.random(100, 200) },
                { value: anime.random(10, 90) + '%', duration: anime.random(100, 200) },
                { value: anime.random(10, 90) + '%', duration: anime.random(100, 200) },
                { value: anime.random(10, 90) + '%', duration: anime.random(100, 200) },
                { value: anime.random(10, 90) + '%', duration: anime.random(100, 200) },
                { value: anime.random(10, 90) + '%', duration: anime.random(100, 200) },
                { value: anime.random(10, 90) + '%', duration: anime.random(100, 200) },
                { value: anime.random(10, 90) + '%', duration: anime.random(100, 200) },
                { value: anime.random(10, 90) + '%', duration: anime.random(100, 200) },
                { value: anime.random(10, 90) + '%', duration: anime.random(100, 200) }
            ],
            easing: 'linear',
            direction: 'alternate',
            loop: true
        })
    });

    $('#cir_btn').click(function () {
        anime({
            targets: '.stick',
            rotateZ: [0, 360],
            duration: 2000,
            easing: 'linear',
            loop: true
        })

    });
    $('#text_btn').click(function () {
        anime({
            targets: '.text',
            left: [
                { value:['-10%','0%'], easing: 'easeInOutCirc',duration:500 },
            ],
            top: [
                { value: ['0%','50%'], easing: 'easeOutBounce',duration:1000  }
            ],
            opacity:[
                {value:[0,1],duration:300}
            ],
            delay: anime.stagger(100),
            easing: 'easeInOutCirc'
        })

    });
});