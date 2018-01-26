var insert = function (arr) {
    var length = arr.length;
    for(var i = 1;i<length;i++){
        for(var j = i;j>0;j--){
            if(arr[j]<arr[j-1]){
                var intermediate = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = intermediate;
            }
        }
    }
    console.log(arr);
}
var arr = [3,9,1,17,6,4,9,25,13];
insert(arr);