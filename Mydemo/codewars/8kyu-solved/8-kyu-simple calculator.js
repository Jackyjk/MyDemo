/*
 * @fileheader.Author: Mr.J
 * @fileheader.LastModifiedBy: Mr.J
 * @Date: 2019-10-30 22:43:11
 * @LastEditors: Mr.J
 * @LastEditTime: 2019-10-30 22:43:21
 */
function calculator(a, b, sign) {
    switch (sign) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default: return "unknown value";
    }
}