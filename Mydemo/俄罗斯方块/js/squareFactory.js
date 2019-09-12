/*
 * @Author: Mr.J 
 * @Date: 2019-07-30 19:57:11 
 * @Last Modified by: Mr.J
 * @Last Modified time: 2019-08-04 12:58:44
 */

// 负责生成各种俄罗斯方块
// 代表俄罗斯方块的通用逻辑，比如说左移，右移，翻转等逻辑
// 可以自行添加想要的方块样式


// # # # # 
var Square1 = function () {
    //调用Square方法
    /*
    var Square = function() {
    // 即将出现的方块的数据  4*4F
    this.data = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    // 原点
    this.origin = {
        x: 0,
        y: 0
    }

    // 方向
    this.dir = 0;
}
     */
    Square.call(this);

    // 旋转数组
    this.rotates = [
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ]
}

//将属性添加在原型链上，后面的操作也是这样
Square1.prototype = Square.prototype;

//    #
//  # # #
var Square2 = function () {

    Square.call(this);

    // 旋转数组
    this.rotates = [
        [
            [0, 0, 0, 0],
            [0, 2, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 2, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0],
        ]
    ]
}
Square2.prototype = Square.prototype;


//  # #
//  # #
var Square3 = function () {

    Square.call(this);

    // 旋转数组
    this.rotates = [
        [
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ]
}
Square3.prototype = Square.prototype;

// #
// # # #
var Square4 = function () {

    Square.call(this);

    // 旋转数组
    this.rotates = [
        [
            [2, 0, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]

        ],
        [
            [0, 2, 2, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]

        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0]
        ]
    ]
}
Square4.prototype = Square.prototype;

//     #
// # # #
var Square5 = function () {

    Square.call(this);

    // 旋转数组
    this.rotates = [
        [
            [0, 0, 0, 2],
            [0, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 2],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 2, 2, 2],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0]
        ]
    ]
}
Square5.prototype = Square.prototype;

//   # #
// # #
var Square6 = function () {

    Square.call(this);

    // 旋转数组
    this.rotates = [
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ]
    ]
}
Square6.prototype = Square.prototype;

// # #
//   # #
var Square7 = function () {

    Square.call(this);

    // 旋转数组
    this.rotates = [
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 2, 2],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 2],
            [0, 0, 2, 2],
            [0, 0, 2, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 2, 2],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 2],
            [0, 0, 2, 2],
            [0, 0, 2, 0],
            [0, 0, 0, 0]
        ]
    ]
}
Square7.prototype = Square.prototype;

var SquareFactory = function () { }
//原型链上面写入方法
SquareFactory.prototype.make = function (index, dir) {
    var mySquare;   //输出的形状
    index = index + 1;
    switch (index) {
        case 1:
            mySquare = new Square1();
            break;
        case 2:
            mySquare = new Square2();
            break;
        case 3:
            mySquare = new Square3();
            break;
        case 4:
            mySquare = new Square4();
            break;
        case 5:
            mySquare = new Square5();
            break;
        case 6:
            mySquare = new Square6();
            break;
        case 7:
            mySquare = new Square7();
            break;
        default:
            break;
    }
    mySquare.origin.x = 0;
    mySquare.origin.y = 3;
    mySquare.rotate(dir);
    return mySquare;
}