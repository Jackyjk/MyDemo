/*
 * @fileheader.Author: Mr.J
 * @fileheader.LastModifiedBy: Mr.J
 * @Date: 2019-10-30 22:47:31
 * @LastEditors: Mr.J
 * @LastEditTime: 2019-10-30 22:50:19
 */
//return price without vat
function excludingVatPrice(price) {
    return price === null ? -1 : Number((price / 1.15).toFixed(2));
}