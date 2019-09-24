/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 17:26:39
 * @LastEditTime: 2019-09-24 17:38:08
 * @LastEditors: Please set LastEditors
 */
function LinkedList() {


    // this.append = function (element) {}; //向列表尾部添加一个新的项
    // this.insert = function (position, element) {}; //向列表的特定位置插入一个新的项
    // this.removeAt = function (position) {}; //从列表的特定位置移除一项
    // this.remove = function (element) {}; //从列表中移除一项
    // this.indexOf = function (element) {}; //返回元素在列表中的索引。如果列表中没有该元素则返回-1
    // this.isEmpty = function () {}; //如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
    // this.size = function () {}; //返回链表包含的元素个数
    // this.getHead = function () {};
    // this.toString = function () {}; //输出元素的值


    let Node = function (element) { // {1}  struct
        this.element = element;
        this.next = null;
    };
    let length = 0; // 定义长度
    let head = null; // 头节点

    this.append = function (element) {
        var node = new Node(element), // 传入值
            current; //表示当前节点
        if (head === null) { //列表中第一个节点 
            head = node;
        } else {
            current = head;
            //循环列表，直到找到最后一项
            while (current.next) {
                current = current.next;
            }
            //找到最后一项，将其next赋为node，建立链接
            current.next = node;
        }
        length++; //更新列表的长度
    };

    this.insert = function (position, element) {
        //检查越界值
        if (position >= 0 && position <= length) { //检查是否越界
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) { //在第一个位置添加
                node.next = current; //head的引用改为node
                head = node;
            } else {
                while (index++ < position) { //循环访问列表，找到位置
                    previous = current;
                    current = current.next;
                }
                node.next = current; //新项（node）和当前项链接起来
                previous.next = node; //改变previous和current之间的链接  previous.next指向node
            }
            length++; //更新列表的长度
            return true;
        } else {
            return false; //没有添加项到列表
        }
    };

    this.removeAt = function (position) {
        //检查越界值
        if (position > -1 && position < length) { // 判断位置是否有效
            let current = head, // 头节点
                previous, // 前驱元素
                index = 0; // 
            //移除第一项
            if (position === 0) { // 移除第一位，直接指向列表的第二位元素
                head = current.next;
            } else {
                while (index++ < position) { // 判断是否到达目标位置
                    previous = current; // 引用前驱元素
                    current = current.next; //为对所循环列表的当前元素的引用
                }
                //将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next;
            }
            length--; // 移除之后减少长度
            return current.element;
        } else {
            return null; // 
        }
    };


    this.remove = function (element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function (element) {
        let current = head, // 索引 
            index = 0;
        while (current) { //  循环查找
            if (element === current.element) {
                return index; //    返回对应的位置
            }
            index++; //     计数
            current = current.next; //         移动至下一个元素
        }
        return -1;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.getHead = function () {
        return head;
    };

    this.toString = function () {
        let current = head,     //索引
            string = ''; //拼接元素使用
        while (current) { //循环访问
            string += current.element + (current.next ? '-' : '+'); //   拼接到字符串
            current = current.next; //  下一个字符
        }
        return string; //{ 返回字符串
    };

}
