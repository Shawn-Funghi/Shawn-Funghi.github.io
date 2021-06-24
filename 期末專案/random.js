$(document).ready(function () {
    var num = Array(4);
    var color = Array(4);
    function random() {
        return Math.floor(Math.random() * 8)
    }
    $('#start').click(function () {
        
    });
    $('#t').click(function () {
        for (let i = 0; i < 4; i++) {
            num[i] = random();
            switch (num[i]) {
                case 0:
                    color[i] = "red";
                    break;
                case 1:
                    color[i] = "orange";
                    break;
                case 2:
                    color[i] = "yellow";
                    break;
                case 3:
                    color[i] = "yellowgreen";
                    break;
                case 4:
                    color[i] = "skyblue";
                    break;
                case 5:
                    color[i] = "purple";
                    break;
                case 6:
                    color[i] = "black";
                    break;
                case 7:
                    color[i] = "white";
                    break;
            }
        }
        
       
        console.log(color);

    });

    var buttonColor;

    $('.select_button').click(function () { 
        buttonColor = $(this).css('background-color'); 
        
    });
    $('.display_button').click(function () { 
        console.log(buttonColor);
        if(buttonColor === undefined){

        }else{
            $(this).css('background-color', buttonColor);
        }
        
    });
    $('.confirm').click(function () { 
        buttonColor = undefined;
        
    });

    $('#restart').click(function () { 
        $('.display_button').css('background-color', 'white');
        
    });
});