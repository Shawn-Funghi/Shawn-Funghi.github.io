$(document).ready(function () {
    let tl = anime.timeline({
        duration:750,
        easing:'easeOutExpo'
    })
    tl.add({
        targets:'section div',
        backgroundColor:'rgb(255, 40, 40)',
        delay:anime.stagger(75,{from:'first'}),
        width:'100%'
    }).add({
        targets:'section div',
        backgroundColor:'rgb(252, 189, 189)',
        delay:anime.stagger(75,{from:'last'}),
        width:'90%',
    })
    tl.add({
        targets:'h1',
        top:'20%',
        scale:[0,1],
        duration:4000,
        opacity:1,
    }, '-=1600')
    let rotateMe = anime({
        targets:'section',
        scaleX:'2',
        scaleY:'2',
        translateX:'40%',
        rotate:'45deg',
        duration:5000,
        easing:'easeOutExpo',
        autoplay: false
    })
    document.querySelector('h1').addEventListener('mouseover' ,()=>{
        rotateMe.play();

    })
});