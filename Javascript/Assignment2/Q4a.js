function square(arr) {

    var arr1= [];
    var len=arr.length         

    for (var i = 0; i < len; i++) {
        root = Math.sqrt(arr[i]);
        arr1.push(root);
    }

    return arr1;
}

console.log(square([1,4,9,16,25]));