/*
 * @fileheader.Author: Mr.J
 * @fileheader.LastModifiedBy: Mr.J
 * @Date: 2019-09-29 12:34:00
 * @LastEditors: Mr.J
 * @LastEditTime: 2019-10-02 22:26:26
 */
function Graph() {
    var vertices = []; //存储图中所有顶点的名字
    var adjList = new Dictionary(); //使用字典存储邻接表

    //图中添加一个新的顶点
    this.addVertex = function (v) {
        vertices.push(v); //将该顶点添加到顶点列表
        adjList.set(v, []); //设置顶点v作为键对应的字典值为一个空数组
    };

    //添加顶点之间的边
    this.addEdge = function (v, w) {
        adjList.get(v).push(w); //实现有向图只用这一条语句
        adjList.get(w).push(v); //实现无向图 两条语句都用
    };

    //可视化输出图的信息
    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) { //迭代vertices数组列表
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]); //取得该顶点的邻接表
            for (var j = 0; j < neighbors.length; j++) { //迭代该邻接表
                s += neighbors[j] + ' ';
            }
            s += '\n'; //邻接表迭代完成后 添加一个换行符
        }
        return s;
    };
}