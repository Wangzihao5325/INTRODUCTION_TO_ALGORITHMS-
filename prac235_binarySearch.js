var binarySearch = function(arr,v){
    var length = arr.length;
    var result;
    if(length == 1){
        if(arr[0]==v){
            result = 'found';
        }else{
            result = 'not found';
        }
    }else{
        var halfLength = Math.ceil(length/2);
        if(arr[halfLength]==v){
            result = 'found';
        }else if(arr[halfLength]>v){
            var subArr = arr.slice(0,halfLength);
            result = binarySearch(subArr,v);
        }else if(arr[halfLength]<v){
            var subArr = arr.slice(halfLength);
            result = binarySearch(subArr,v);
        }
    }
    return result;
}

var sql = [1,3,5,7,9,11,13,15,17,19];
var res = binarySearch(sql,10);
console.log(res);