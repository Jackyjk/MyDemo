/*
 * @Description: In User Settings Edit
 * @Author: Mr.J
 * @Date: 2019-09-25 21:10:00
 * @LastEditTime: 2019-09-25 21:28:30
 * @LastEditors: Please set LastEditors
 */
//创建Set函数 
function Set() {
    let items = {};
    //如果值在集合中， 返回true， 否则返回false。
    this.has = function (value) {
        // return value in items;
        return items.hasOwnProperty(value);
    };
    //向集合添加一个新的项。
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value; //检查该元素是否在集合中，进行添加
            return true;
        }
        return false;
    };

    // 从集合移除一个值
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value]; //存在该元素，进行移除
            return true;
        }
        return false;
    };
    //移除集合中的所有项
    this.clear = function () {
        items = {}; // 直接制空
    };

    //返回集合所包含元素的数量。 与数组的length属性类似。
    this.size = function () {
        return Object.keys(items).length; //返回长度
    };

    //在所有浏览器中适用的size改进函数
    this.sizeLegacy = function(){
        let count = 0;
        for(let key in items) { //遍历items对象的所有属性
        if(items.hasOwnProperty(key)) //检查它们是否是对象自身的属性，避免重复计数
        ++count; //递增
        }
        return count;
        };

    //返回一个包含集合中所有值的数组
    //Chrome Firefox IE10+
    this.values = function () {
        let values = [];
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]]);    //使用push方法将值进行传递
        }
        return values;      //返回数组
    };
    //all  browers
    this.valuesLegacy = function () {
        let values = [];
        for (let key in items) { //遍历items对象的所有属性
            if (items.hasOwnProperty(key)) { //添加一个数组
                values.push(items[key]);    //push进去
            }
        }
        return values;
    };

    //进行并集操作
    this.union = function(otherSet) {
        let unionSet = new Set(); // 创建一个并集数组
        let values = this.values(); //遍历并全部添加到代表并集的集合中
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values(); //遍历并全部添加到代表并集的集合中
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }

     //进行交集操作
     this.intersection = function (otherSet) {
        let intersectionSet = new Set(); //创建一个新的Set实例
        let values = this.values();
        for (let i = 0; i < values.length; i++) { //遍历当前Set实例所有的值
            if (otherSet.has(values[i])) { //验证它们是否也存在于otherSet实例
                intersectionSet.add(values[i]); //添加到创建的intersectionSet变量中
            }
        }
        return intersectionSet;
    }
}