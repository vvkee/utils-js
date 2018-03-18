/**
 * @description 判断是否是function
 * @author weizongqi
 * @param f
 * @version 0.0.1
 */
export default (f: any): boolean => Object.prototype.toString.call(f) === 'object [Function]'