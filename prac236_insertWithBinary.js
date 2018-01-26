var sort = function(arr){
    var innerArr =[];
    innerArr.push(arr[0]); 
    for(var i =0;i<arr.length-1;i++){
        v = arr[i+1];
        binary(innerArr,0,i,v);
    }
    return innerArr;
}
var binary = function(arr,begin,end,v){
    if(begin == end){
        if(arr[begin]>=v){arr.splice(begin,0,v);return;}
        if(arr[begin]<v){arr.splice(begin+1,0,v);return;}
    }else{
        var middle = Math.ceil((begin+end)/2);
        if(arr[middle]==v)
        {arr.splice(middle,0,v);return;}
        if(arr[middle]>v){
            binary(arr,begin,middle-1,v);
        }
        if(arr[middle]<v){
            binary(arr,middle+1,end,v);
        }
    }
}
var arr = [9,8,7,6,5,4,3,2,1];
var resArr = sort(arr);
console.log(resArr);