var merge = function(arr1,arr2){
    var length1 = arr1.length;
    var length2 = arr2.length;
    var resultArr = [];
    var seg1 =0,seg2 =0;
    var result = [];
    for(var i=0;i<length1+length2;i++){
        if(seg1 == length1||seg2 == length2){
            if(seg1 == length1){
                var left = arr2.slice(seg2);
                result = result.concat(left);
            }else{
                var left = arr1.slice(seg1);
                result = result.concat(left);
            }
            return result;
        }else{
            if(arr1[seg1]>=arr2[seg2]){
                result.push(arr2[seg2]);
                seg2++;
            }else{
                result.push(arr1[seg1]);
                seg1++;
            }
        }
    }
}

var mergeSort = function(arr){
    if(arr.length==1){
        
    }else{
        var halfNum = arr.length/2;
        var arr1 = arr.slice(0,halfNum);
        var arr2 = arr.slice(halfNum);
        arr1 = mergeSort(arr1);
        arr2 = mergeSort(arr2);
        arr = merge(arr1,arr2);
    }
    return arr;
}

var arr = [11,7,18,4,7,10,9,5,16,22];
var result = mergeSort(arr);
console.log(result);