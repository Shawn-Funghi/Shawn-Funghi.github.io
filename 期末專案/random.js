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
                    color[i] = "green";
                    break;
                case 4:
                    color[i] = "blue";
                    break;
                case 5:
                    color[i] = "purple";
                    break;
                case 6:
                    color[i] = "white";
                    break;
                case 7:
                    color[i] = "black";
                    break;
            }
        }

        console.log(color);

    });
});