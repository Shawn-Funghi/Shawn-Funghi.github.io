$(document).ready(function () {
    var num = Array(4);
    var color = Array(4);
    function random() {
        return Math.floor(Math.random() * 8)
    };
    for (let i = 0; i < 4; i++) {
        num[i] = random();
        switch (num[i]) {
            case 0:
                // red
                color[i] = "rgb(255, 0, 0)";
                break;
            case 1:
                // orange
                color[i] = "rgb(255, 165, 0)";
                break;
            case 2:
                // yellow
                color[i] = "rgb(255, 255, 0)";
                break;
            case 3:
                //yellowgreen
                color[i] = "rgb(154, 205, 50)";
                break;
            case 4:
                // skyblue
                color[i] = "rgb(135, 206, 235)";
                break;
            case 5:
                // purple
                color[i] = "rgb(128, 0, 128)";
                break;
            case 6:
                // black
                color[i] = "rgb(0, 0, 0)";
                break;
            case 7:
                //white
                color[i] = "rgb(255, 255, 255)";
                break;
        };
    };
    //初始顏色
    //color = ["rgb(255, 255, 255)", "rgb(255, 0, 0)", "rgb(154, 205, 50)", "rgb(255, 255, 255)"];
    console.log(color);
    //上顏色
    var buttonColor;
    $('.select_button').click(function () {
        buttonColor = $(this).css('background-color');
        $('.confirm').css('background-color', buttonColor);
    });
    $('.display_button').click(function () {
        console.log(buttonColor);
        if (buttonColor === undefined) {

        } else {
            $(this).css('background-color', buttonColor);
        }

    });
    //判定
    var answer = Array(4);
    var col = 1;
    var correct_arr;
    var win = 0;
    $('.confirm').click(function () {
        $('.confirm').css('background-color', 'azure');
        if (col < 8) {
            console.log('執行側 col =' + col)
            buttonColor = undefined;
            let col_id = '#d_' + col;
            //導入顏色
            for (let i = 0; i < 4; i++) {
                let id = i + 1;
                let total = col_id + " " + '#dbutton' + id;
                answer[i] = $(total).css('background-color');
            }
            //開始判定
            let correct = 0;
            let halfCorrect = 0;
            let repeat_situation = [0, 0, 0, 0];
            for (let i = 0; i < 4; i++) {

                if (answer[i] == color[i]) {
                    correct++;
                    console.log('第' + i + '輪正確')
                } else {
                    console.log('第' + i + '輪錯誤，往下判定')
                    for (let j = 1; j <= 3; j++) {
                        console.log("第" + (i + j) % 4 + "次檢查")
                        if (answer[i] == color[(i + j) % 4] && answer[(i + j) % 4] != color[(i + j) % 4] && repeat_situation[(i + j) % 4] == 0) {
                            halfCorrect++;
                            repeat_situation[(i + j) % 4] = 1;
                            console.log('紀錄第' + ((i + j) % 4) + '個的重複狀態=')
                            break;
                        }
                    }
                }
                console.log('重複陣列：' + repeat_situation);
                console.log("correct = " + correct);
                console.log("halfcorrect = " + halfCorrect);
            }
            correct_arr = ['rgb(165, 42, 42)', 'rgb(165, 42, 42)', 'rgb(165, 42, 42)', 'rgb(165, 42, 42)'];

            for (let i = 0; i < correct; i++) {
                correct_arr[i] = 'rgb(255, 81, 0)';
            }
            for (let i = 3; i > (3 - halfCorrect); i--) {
                correct_arr[i] = 'rgb(0, 255, 170)';
            }
            console.log(correct_arr);
            //為答案上色
            for (let i = 1; i <= 4; i++) {
                let check_id = col_id + ' .check' + i;
                $(check_id).css('background-color', correct_arr[i - 1]);
            }
            let state_id = col_id + ' .check';
            $(state_id).css('opacity', '1');
            console.log('您的顏色陣列')
            console.log(answer);
            col++;
            //判定全對
            if (correct == 4) {
                console.log('correct = ' + correct)
                win = 1;
                $('#restart').css('background-color', 'gold');
                document.getElementById('restart').innerHTML = '恭喜你贏啦 再來一局吧吧'
                $('#d_8 .state').css('margin', '10%');
                $('#d_8 .state').css('background-color', 'gold');
                for (let i = 0; i < 4; i++) {
                    let id = i + 1;
                    let total = "#d_8" + " " + '#dbutton' + id;
                    $(total).css('background-color', color[i]);
                }

                anime({
                    targets: '#d_8',
                    opacity: 1,
                    duration: 500,
                    easing: 'linear'
                })
            }
        }
        if (col == 8 && win != 1) {
            let col_id = '#d_' + col;
            for (let i = 0; i < 4; i++) {
                let id = i + 1;
                let total = col_id + " " + '#dbutton' + id;
                $(total).css('background-color', color[i]);
            }
            document.getElementById('restart').innerHTML = '失敗啦 重新開始';
            $('#restart').css('background-color', 'rgb(255, 130, 130)');
            $('#d_8 .state').css('background-color', 'rgb(255, 130, 130)');
            anime({
                targets: '#d_8',
                opacity: 1,
                duration: 500,
                easing: 'linear'
            })
        }

    });
    //重新開始
    $('#restart').click(function () {
        console.log("重新一局");
        for (let i = 0; i < 4; i++) {
            num[i] = random();
            switch (num[i]) {
                case 0:
                    // red
                    color[i] = "rgb(255, 0, 0)";
                    break;
                case 1:
                    // orange
                    color[i] = "rgb(255, 165, 0)";
                    break;
                case 2:
                    // yellow
                    color[i] = "rgb(255, 255, 0)";
                    break;
                case 3:
                    //yellowgreen
                    color[i] = "rgb(154, 205, 50)";
                    break;
                case 4:
                    // skyblue
                    color[i] = "rgb(135, 206, 235)";
                    break;
                case 5:
                    // purple
                    color[i] = "rgb(128, 0, 128)";
                    break;
                case 6:
                    // black
                    color[i] = "rgb(0, 0, 0)";
                    break;
                case 7:
                    //white
                    color[i] = "rgb(255, 255, 255)";
                    break;
            };
        };
        console.log("新的答案為");
        console.log(color);
        $('.display_button').css('background-color', 'white');
        $('.check').css('opacity', '0'); 
        $('.disabled').css('z-index', '1');
        $('.d500').css('z-index', '-2');
        $('#d_8').css('opacity', '0');
        col = 1;
        win = 0;
        console.log('執行側 col restart =' + col)
        document.getElementById('restart').innerHTML = '重新開始';
        $('#restart').css('background-color', 'rgb(255, 255, 255)');


    });
});