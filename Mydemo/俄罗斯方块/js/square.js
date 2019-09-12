// 代表俄罗斯方块的通用逻辑，比如说左移，右移，翻转等逻辑
var Square = function() {
    // 即将出现的方块的数据  4*4F
    this.data = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    // 原点  所展示的方块在页面中div显示且定位
    this.origin = {
        x: 0,
        y: 0
    }

    // 方向
    this.dir = 0;
}

// 判断是否可以旋转
Square.prototype.canRotate = function(isValid) {
    var d = (this.dir + 1) % 4;  //方向取模判断
    var test = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (var i = 0; i < this.data.length; i++) {
        for (var j = 0; j < this.data[0].length; j++) {
            //用旋转之后的矩阵覆盖 test 矩阵
            test[i][j] = this.rotates[d][i][j];
        }
    }
    return isValid(this.origin, test);
}
Square.prototype.rotate = function(num) {
    //确保有参数传入
    if (!num) num = 1;
    this.dir = (this.dir + num) % 4;
    for (var i = 0; i < this.data.length; i++) {
        for (var j = 0; j < this.data[0].length; j++) {
            //利用this.dir 方向值的改变进行旋转
            this.data[i][j] = this.rotates[this.dir][i][j];
        }
    }
}

// 是否可以下移
Square.prototype.canDown = function(isValid) {
    var test = {};  //原点
    //原点  x 下移  y 不变
    test.x = this.origin.x + 1;
    test.y = this.origin.y;
    return isValid(test, this.data); //返回值
}
Square.prototype.down = function() {
    //下降一格
    this.origin.x = this.origin.x + 1;
}

// 左移
Square.prototype.canLeft = function(isValid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y - 1;
    return isValid(test, this.data);
}
Square.prototype.left = function() {
    this.origin.y = this.origin.y - 1;
}

// 右移
Square.prototype.canRight = function(isValid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y + 1;
    return isValid(test, this.data);
}
Square.prototype.right = function() {
    this.origin.y = this.origin.y + 1;
}