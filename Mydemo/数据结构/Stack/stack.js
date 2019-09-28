function Stack() {
    //各种属性和方法的声明
    //push(element(s))：添加一个（或几个）新元素到栈顶。
    //pop()：移除栈顶的元素，同时返回被移除的元素。
    //peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
    //isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
    //clear()：移除栈里的所有元素。
    //size()：返回栈里的元素个数。这个方法和数组的length属性很类似。

    //使用数组保存信息
    let items = [];

    //push(element(s))：添加一个（或几个）新元素到栈顶。
    this.push = function (element) {
        items.push(element);
    };

    //pop()：移除栈顶的元素，同时返回被移除的元素。
    this.pop = function () {
        return items.pop();
    };

    //peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
    this.peek = function () {
        return items[items.length - 1];
    };

    //isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
    this.isEmpty = function () {
        return items.length == 0;
    };

    //size()：返回栈里的元素个数。这个方法和数组的length属性很类似。
    this.size = function () {
        return items.length;
    };

    //clear()：移除栈里的所有元素。
    this.clear = function () {
        items = [];
    };

    //输出内容
    this.print = function () {
        console.log(items.toString());
    };
}