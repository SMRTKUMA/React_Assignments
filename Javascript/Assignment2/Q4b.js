function square(arr) {

    var arr1= [];
    var len=arr.length          

    for (var i = 0; i < len; i++) {
        root = Math.pow(arr[i],2);
        arr1.push(root);
    }

    return arr1;
}

console.log(square([1,2,3,4,5]));