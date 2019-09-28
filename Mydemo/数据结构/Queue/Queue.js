/*
 * @fileheader.Author: Mr.J
 * @fileheader.LastModifiedBy: Mr.J
 * @Date: 2019-09-28 17:58:43
 * @LastEditors: Mr.J
 * @LastEditTime: 2019-09-28 17:58:43
 */
function Queue() {
    //这里是属性和方法
    // enqueue(element(s))：向队列尾部添加一个（或多个）新的项。
    // dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
    // front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
    // isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。
    // size()：返回队列包含的元素个数，与数组的length属性类似。

    // 和栈的创建一样，使用数组
    let items = [];


    // enqueue(element(s))：向队列尾部添加一个（或多个）新的项。
    this.enqueue = function (element) {
        items.push(element);
    };

    // dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
    this.dequeue = function () {
        return items.shift(); //移除索引在0位置的数组元素
    };

    // front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
    this.front = function () {
        return items[0]; //返回索引为0的数组元素的值
    };

    // isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。
    this.isEmpty = function () {
        return items.length == 0;
    };

    // size()：返回队列包含的元素个数，与数组的length属性类似。
    this.size = function () {
        return items.length;
    };

    //输出队列中的值
    this.print = function () {
        console.log(items.toString());
    };
}