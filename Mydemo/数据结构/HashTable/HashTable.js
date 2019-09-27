/*
 * @fileheader.Author: Mr.J
 * @fileheader.LastModifiedBy: Mr.J
 * @Date: 2019-09-27 16:23:33
 * @LastEditors: Mr.J
 * @LastEditTime: 2019-09-27 16:23:33
 */
function HashTable() {
    var table = [];

    //散列函数  私有
    var loseloseHashCode = function (key) {
        var hash = 0; //总和
        for (var i = 0; i < key.length; i++) { //遍历key
            //使用Javascript中String.charCodeAt()方法将从ASCII表中查到的每个字符对应的ASCII值加到hash变量
            hash += key.charCodeAt(i);
        }
        return hash % 28; //得到较小的数值，与任意数进行取余
    };

    //更新散列表
    this.put = function (key, value) {
        var position = loseloseHashCode(key); //根据创建的散列表计算其位置
        console.log(position + ' - ' + key); //输出内容
        table[position] = value; //将value参数添加到用散列函数计算出的对应的位置
    };

    //返回根据键值检索到的特定的值
    this.get = function (key) {
        //存在信息进行返回，不存在当前信息返回undefined
        return table[loseloseHashCode(key)];

        // if(table[loseloseHashCode(key)])
        //     return table[loseloseHashCode(key)];
        // else
        //     console.log('404 not found!!!');
    };

    //根据键值从散列表中移除值
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };

    //当有多个值的时候，进行判断，后面相同散列值的信息会被覆盖前面的
    this.print = function () {
        for (var i = 0; i < table.length; ++i) { //遍历所有信息
            if (table[i] !== undefined) { //当数据不是undefined时，进行输出,后面相同散列值的信息会覆盖前者
                console.log(i + ": " + table[i]); //output
            }
        }
    };
}