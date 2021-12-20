// 4th basic
const square = num => num*num;
function find(arr, f) {
    var ele = [];
    for (let i = 0; i < arr.length; i++) {
        ele[i] = f(arr[i]);
    }
    return ele;
}
console.log(find([1,2,3,4,6], square));
console.log(find([1,4,9,16,25], Math.sqrt));