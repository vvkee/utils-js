/**
 * @description 判断是否数组
 * @author weizongqi
 * @param Object
 * @version 0.0.1
 */
export default (o: any): boolean => Object.prototype.toString.call(o) === 'object [Array]'