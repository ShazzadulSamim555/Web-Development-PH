function isSame(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

const arr1 = [1, 2, 3];
const arr2 = [1,2,3];
console.log(isSame(arr1,arr2));
