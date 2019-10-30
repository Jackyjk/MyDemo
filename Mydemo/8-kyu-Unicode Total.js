/*
 * @fileheader.Author: Mr.J
 * @fileheader.LastModifiedBy: Mr.J
 * @Date: 2019-10-30 22:51:26
 * @LastEditors: Mr.J
 * @LastEditTime: 2019-10-30 22:51:42
 */
function uniTotal(str) {
    return [...str].reduce((total, char) => total + char.charCodeAt(0), 0)
}