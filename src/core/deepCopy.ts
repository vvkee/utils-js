/**
 * 深拷贝
 * @author zongqi wei
 */
interface StringKeyObject {
  [key: string]: any
}

/**
 * @description object 深拷贝
 * @param a object
 */
export const objectDeepCopy = (a: StringKeyObject): StringKeyObject => {
  if (typeof a !== 'object' || a === null) {
    return a;
  }
  if (Array.isArray(a)) {
    return arrayDeepCopy(a);
  }
  const target: {
    [key: string]: any
  } = {};
  const keys = Object.keys(a);
  keys.forEach((key) => {
    target[key] = objectDeepCopy(a[key]);
  });
  return target;
}

export const arrayDeepCopy = (arrays: any): any => {
  const target: any[] = [];
  if (!Array.isArray(arrays)) {
    return arrays;
  }
  arrays.forEach((arr) => {
    target.push(deepCopy(arr));
  })
  return target;
}

/**
 * 深拷贝，只支持 object array
 * todo 后续增加Set、Map、function、symbol
 * @param a
 */
const deepCopy = (a: any): any => {
  if (typeof a !== 'object' || a === null) {
    return a;
  }
  if (Array.isArray(a)) {
    return arrayDeepCopy(a);
  }
  return objectDeepCopy(a);
};

export default deepCopy;
