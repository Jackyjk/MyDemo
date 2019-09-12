/*
 * @Author: Mr.J 
 * @Date: 2019-07-29 12:57:03 
 * @Last Modified by: Mr.J
 * @Last Modified time: 2019-08-04 12:58:52
 */
// 本地游戏逻辑

var Local = function() {
    // 游戏对象
    var game;

    // 时间间隔
    var INTERVAL = 500;   //500毫秒触发一次 move
    // 定时器
    var timer = null;

    // 游戏总时间计数器
    var timeCount = 0;

    var time = 0;

    // 绑定键盘事件
    var bindKeyEvent = function() {
        document.onkeydown = function(e) {
            //key值
            if (e.keyCode == 38) { // up   旋转
                game.rotate();
            } else if (e.keyCode == 39) { //right   右移
                game.right();
            } else if (e.keyCode == 40) { //down   向下一格
                game.down();
            } else if (e.keyCode == 37) { //left   左移
                game.left();
            } else if (e.keyCode == 32) { //space  快速下落
                game.fall();
            }
        }
    }

    var bindClickEvent = function() {
        document.onclick = function(e) {
            var target = e.target.getAttribute("id")
            if (target === "up") {
                game.rotate();
            } else if (target === "right") {
                game.right();
            } else if (target === "down") {
                game.down();
            } else if (target === "left") {
                game.left();
            } else if (target === "fall") {
                game.fall();
            } else if (target === "newGame") {
                document.getElementById("gameOver").innerText = "";
                document.getElementById("time").innerText = "0";
                document.getElementById("score").innerText = "0";
                stop();
                time = 0;
                start();

            }
        }
    }

    // 移动 
    var move = function() {
        timeFunc();
        //判断是否能继续向下运动，不能下落，调用fixed方法
        if (!game.down()) {
            game.fixed();
            var line = game.checkClear();
            if (line) {
                game.addScore(line);
            }
            var gameOver = game.checkGameOver();
            if (gameOver) {
                //game over 游戏结束
                game.gameOver(false);
                stop();
            } else {
                //随机生成一个方块（左上角div）    参数：方块种类  旋转次数
                game.performNext(generateType(), generateDir());
            }
        }
    }

    // 计时函数 
    var timeFunc = function() {
        timeCount = timeCount + 1;
        if (timeCount === 2) {
            timeCount = 0;
            time = time + 1;
            game.setTime(time);
        }
    }

    // 随机生成一个方块种类   
    var generateType = function() {
        return Math.floor(Math.random() * 7);   //7种方块
    }

    // 随机生成一个旋转次数   
    var generateDir = function() {
        return Math.floor(Math.random() * 4);   //4个方向
    }

    // 开始  
    var start = function() {
        //创建对象
        var doms = {
            gameDiv: document.getElementById("game"),       //游戏区域
            nextDiv: document.getElementById("next"),       //小视窗
            scoreDiv: document.getElementById("score"),     //分数 
            resultDiv: document.getElementById("gameOver")  //游戏结果
        }
        game = new Game();      //创建对象   开始游戏
        game.init(doms, generateType(), generateDir());         //初始化
        bindKeyEvent();  //移动方向
        bindClickEvent();   //监听按键进行移动方向
        game.performNext(generateType(), generateDir());      //小视窗部分
        timer = setInterval(move, INTERVAL);              //时间
    }

    // 结束  
    var stop = function() {
        if (timer) {
            //结束计时器
            clearInterval(timer);
            timer = null;
        }
        //不能进行按键操作
        document.onkeydown = null;
    }

    // 导出API
    this.start = start;

}