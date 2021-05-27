$(document).ready(function () {
    anime({
        targets:'#b1',
        keyframes:[
            {translateX: 250},
            {translateY: 50},
            {translateY: -50},
            {translateX: -250},        
        ],  
        duration:8000,
        loop:true
    })
    anime({
        targets:'#in',
        value:[0,100],
        duration:1000,
        round: 1,
        easing:'linear',
        direction: 'alternate'

    })
    
    anime({
        targets:'.blockH',
        translateX:anime.stagger(100),
        delay:anime.stagger(100,{from:'last'}),
        duration:1000,
        loop:true
    })
    let tl = anime.timeline({
        direction: 'alternate',
        duration:500,
        loop:true
    })
    tl.add({
        targets:'.block',
        translateX:anime.stagger(10,{grid:[5,5],from:'center',axis:'x'}),
        translateY:anime.stagger(10,{grid:[5,5],from:'center',axis:'y'}),
        rotateZ:anime.stagger([0,450],{grid:[5,5],from:'center',axis:'x'}),
        delay:anime.stagger(10,{grid:[5,5],from:'center'}),    
        easing:'easeInOutQuad',
    }).add({
        targets:'.block',
        translateX:anime.stagger(20,{grid:[5,5],from:'center',axis:'x'}),
        translateY:anime.stagger(20,{grid:[5,5],from:'center',axis:'y'}),
        rotateZ:anime.stagger([0,-450],{grid:[5,5],from:'center',axis:'x'}),
        delay:anime.stagger(10,{grid:[5,5],from:'center'}),    
        easing:'easeInOutQuad',
    })
});