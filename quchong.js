var arr = [1, 2, 5, 4, 6, 7, 5, 2];
var nullArr = [];
var newarr = [];
for (var i = 0; i < arr.length; i++) {
    if (nullArr.indexOf(arr[i]) === -1) {
        nullArr.push(arr[i]);
    }
}
arr.forEach(function (e, ele) {
    if (newarr.indexOf(e) === -1) {
        newarr.push(arr[i]);
    }
});