/*
 * @Author: Mr.J 
 * @Date: 2019-07-27 20:57:23
 * @Last Modified by: Mr.J
 * @Last Modified time: 2019-08-04 12:59:55
 */

// 俄罗斯方块的核心

var Game = function() {
    // dom元素   
    var gameDiv,     //刷新方块
        nextDiv,     //刷新矩阵
        scoreDiv,
        resultDiv;

    // 分数
    var score = 0;

    // 游戏区域矩阵  10*20
    var gameData = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    // 当前方块
    var cur;

    // 下一个方块
    var next;

    // divs
    var nextDivs = [];
    var gameDivs = [];

    // 设置时间
    var setTime = function(time) {
        document.getElementById("time").innerText = time;
    }

    // 初始化div
    //document.getElementById('game')  gameData  gameDivs
    var initDiv = function(container, data, divs) {
        for (var i = 0; i < data.length; i++) {
            var div = [];
            //二维数组进行遍历
            for (var j = 0; j < data[0].length; j++) {
                var newNode = document.createElement("div");   //创建div
                newNode.className = "none";//类名 
                newNode.style.top = (i * 20) + "px";
                newNode.style.left = (j * 20) + "px";
                container.appendChild(newNode);//添加儿子节点
                div.push(newNode);   //数组第二层添加div样式
            }
            divs.push(div);   //数组第一层添加div样式
        }
    };

    //刷新矩阵区域的div
    //gameData  gameDivs
    var refurbishDiv = function(data, divs) {
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[0].length; j++) {
                if (data[i][j] == 0) {
                    divs[i][j].className = "none";//新div
                } else if (data[i][j] == 1) {
                    divs[i][j].className = "done";//刷新出来的小方块div
                } else if (data[i][j] == 2) {
                    divs[i][j].className = "current";//结束的小方块div
                }
            }
        }
    };

    // 检测点是否合法
    var check = function(pos, x, y) {//判断是否在清除数据之后 数组越界
        if (pos.x + x < 0) {   //超出上边界 
            return false;
        } else if (pos.x + x >= gameData.length) {   //超出下边界
            return false;
        } else if (pos.y + y < 0) {//超出左边界
            return false;
        } else if (pos.y + y >= gameData[0].length) {//超出右边界
            return false;
        } else if (gameData[pos.x + x][pos.y + y] === 1) {  // 位置上已经有一个方块
            return false;
        } else {
            return true;
        }
    };

    // 检测数据是否合法
    // 原点  返回的数据
    var isValid = function(pos, data) {
        //双层循环
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[0].length; j++) {
                if (data[i][j] != 0) {
                    //同时是一个非法数据 返回false
                    if (!check(pos, i, j)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    // 设置数据
    var setData = function() {
        for (var i = 0; i < cur.data.length; i++) {
            for (var j = 0; j < cur.data[0].length; j++) {
                //方块在矩阵内部的移动位置  动态变化
                if (check(cur.origin, i, j)) {
                    gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
                }
            }
        }
    };

    // 清除数据
    var clearData = function() {
        for (var i = 0; i < cur.data.length; i++) {
            for (var j = 0; j < cur.data[0].length; j++) {
                if (check(cur.origin, i, j)) {
                    gameData[cur.origin.x + i][cur.origin.y + j] = 0;
                }
            }
        }
    };


    // 下移
    var down = function() {
        if (cur.canDown(isValid)) {
            //先清除之前的数据
            clearData();
            cur.down();
            setData();
            refurbishDiv(gameData, gameDivs);
            return true;
        } else {
            return false;
        }
    }

    // 左移
    var left = function() {
        if (cur.canLeft(isValid)) {
            clearData();
            cur.left();
            setData();
            refurbishDiv(gameData, gameDivs);
        }
    }

    // 右移
    var right = function() {
        if (cur.canRight(isValid)) {
            clearData();
            cur.right();
            setData();
            refurbishDiv(gameData, gameDivs);
        }
    }

    // 旋转
    var rotate = function() {
        if (cur.canRotate(isValid)) {
            clearData();
            cur.rotate();
            setData();
            refurbishDiv(gameData, gameDivs);
        }
    }
   
    // 方块移动到底部固定 
    var fixed = function() {
        for (var i = 0; i < cur.data.length; i++) {
            for (var j = 0; j < cur.data[0].length; j++) {
                //判断点是否合法
                if (check(cur.origin, i, j)) {
                    //如果方块 数字 为2 改变其数字即颜色，表示将其固定在底部
                    if (gameData[cur.origin.x + i][cur.origin.y + j] == 2) {
                        gameData[cur.origin.x + i][cur.origin.y + j] = 1;
                    }
                }
            }
        }
        refurbishDiv(gameData, gameDivs);    //返回页面数据
    }

    // 消行 
    var checkClear = function() {
        var line = 0;
        //由于底部最先进行满格  从底部进行循环扫描
        for (var i = gameData.length - 1; i >= 0; i--) {
            var clear = true;
            for (var j = 0; j < gameData[0].length; j++) {
                if (gameData[i][j] != 1) {
                    //不能被消除
                    clear = false;
                    break;
                }
            }
            //如果可以进行消除
            if (clear) {
                line += 1;
                for (var m = i; m > 0; m--) {
                    //将上面一行统一往下移动一行
                    for (var n = 0; n < gameData[0].length; n++) {
                        gameData[m][n] = gameData[m - 1][n];
                    }
                }
                //消除之后，将页面中存在方块的第一行变成0 清空
                for (var n = 0; n < gameData[0].length; n++) {
                    gameData[0][n] = 0;
                }
                i++;   //索引进行变化
            }
        }
        return line;
    }

    // 检查游戏结束   
    var checkGameOver = function() {
        var gameOver = false;     //初始为false
        for (var i = 0; i < gameData[0].length; i++) {
            //循环遍历所有层  检查是否为1 已经被固定
            if (gameData[1][i] === 1) {
                gameOver = true;
            }
        }
        return gameOver;
    }

    // 把小视窗方块放到游戏里，并生成新的方块  
    var performNext = function(type, dir) {
        cur = next;
        setData();          //将当前方块的数据反映在data数组中
        next = SquareFactory.prototype.make(type, dir);   //再次生成一个新的方块 
        refurbishDiv(gameData, gameDivs);             //返回在界面中 
        refurbishDiv(next.data, nextDivs);
    }

    // 初始化
    var init = function(doms, type, dir) {
        gameDiv = doms.gameDiv;
        nextDiv = doms.nextDiv;
        scoreDiv = doms.scoreDiv;
        resultDiv = doms.resultDiv;
        // cur = SquareFactory.prototype.make(3, 2);   //测试数据
        next = SquareFactory.prototype.make(type, dir);
        initDiv(gameDiv, gameData, gameDivs);
        initDiv(nextDiv, next.data, nextDivs);
        // setData();
        // refurbishDiv(gameData, gameDivs);
        refurbishDiv(next.data, nextDivs);
    };

    // 分数增加 
    var addScore = function(line) {
        var s = 0;
        //根据一次消耗几行进行分数的增加
        switch (line) {
            case 1:
                s = 10;
                break;
            case 2:
                s = 30;
                break;
            case 3:
                s = 60;
                break;
            case 4:
                s = 100;
                break;
            default:
                break;
        }
        score = score + s;
        scoreDiv.innerText = score;   //显示在页面中
    }

    // 界面显示游戏结束 
    var gameOver = function(win) {
        if (win) {
            resultDiv.innerText = "YOU WIN!"
        } else {
            resultDiv.innerText = "GAME OVER!"
        }

    }

    // 导出API  
    //外部可以直接进行调用
    this.init = init;
    this.down = down;
    this.left = left;
    this.right = right;
    this.rotate = rotate;
    this.fall = function() {
        //只要down()返回值为true  就可以进行方块的下落
        while (down());
    };
    this.fixed = fixed;
    this.performNext = performNext;
    this.checkClear = checkClear;
    this.checkGameOver = checkGameOver;

    this.setTime = setTime;
    this.addScore = addScore;

    this.gameOver = gameOver;

}