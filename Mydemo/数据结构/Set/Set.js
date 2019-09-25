/*
 * @Description: In User Settings Edit
 * @Author: Mr.J
 * @Date: 2019-09-25 21:10:00
 * @LastEditTime: 2019-09-25 21:10:41
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
            items[value] = value; //{1}
            return true;
        }
        return false;
    };

    // 从集合移除一个值
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value]; //{2}
            return true;
        }
        return false;
    };
    //移除集合中的所有项
    this.clear = function () {
        items = {}; // {3}
    };

    //返回集合所包含元素的数量。 与数组的length属性类似。
    this.size = function () {
        return Object.keys(items).length; //{4}
    };

    //返回一个包含集合中所有值的数组
    //Chrome Firefox IE10+
    this.values = function () {
        let values = [];
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    };
    //all  browers
    this.valuesLegacy = function () {
        let values = [];
        for (let key in items) { //{7}
            if (items.hasOwnProperty(key)) { //{8}
                values.push(items[key]);
            }
        }
        return values;
    };
}