/**
 * 深对比
 */
const deepEqual = (a: any, b: any): boolean => {
  if (Object.is(a, b)) {
    return true;
  }
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (Array.isArray(a) && Array.isArray(b)) {
      let len = a.length;
      if (len !== b.length) {
        return false
      }
      for (len > 0; len--;) {
        if (!deepEqual(a[len], b[len])) {
          return false;
        }
      }
      return true;
    }
    if (a !== b) {
      return false;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (const key of aKeys) {
      if (!Object.prototype.hasOwnProperty.call(b, key)) {
        return false
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return true;
}
export default deepEqual;
