$(document).ready(function () {
    let mouse = {
        x: 0,
        y: 0,
    }


    window.addEventListener('mousemove', (event) => {
        mouse.x = event.pageX;
        mouse.y = event.pageY;
        $('.small').text(mouse.x + " " + mouse.y);

        

    })
    anime({
        targets: '.small',
      
        loop: true,
        easing: 'linear',
    })
    
});