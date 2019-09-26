/*
 * @fileheader.Author: Mr.J
 * @fileheader.LastModifiedBy: Mr.J
 * @Date: 2019-09-26 21:31:52
 * @LastEditors: Mr.J
 * @LastEditTime: 2019-09-26 21:31:52
 */
function Dictionary() {
    //创建一个空的实例数组
    var items = {};

    //判断某个键值存在于这个字典中
    this.has = function (key) {
        return key in items;
    };

    //添加新元素
    this.set = function (key, value) {
        items[key] = value; //value设为items对象的key属性的值
    };

    //通过使用键值来从字典中移除键值对应的数据值
    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    //字典中查找一个特定的项
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    //字典所包含的所有数值以数组形式返回
    this.values = function () {
        var values = [];
        for (var k in items) { //遍历数组
            if (this.has(k)) {
                values.push(items[k]); //如果存在，加入数组中
            }
        }
        return values;
    };

    //返回在Dictionary类中所有用于标识值的键名
    this.keys = function () {
        return Object.keys(items);
    };

    //items属性的输出值
    this.getItems = function () {
        return items;
    };

    //移除集合中的所有项
    this.clear = function () {
        items = {}; // 直接制空
    };

    //返回集合所包含元素的数量。 与数组的length属性类似。
    this.size = function () {
        return Object.keys(items).length; //返回长度
    };
}