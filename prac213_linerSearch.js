var linerSearch = function (arr,v){
    var length = arr.length;
    var indexArr = [];
    for(var i =0;i<length;i++){
        if(arr[i]===v){
            indexArr.push(i);
        }
    }
    if(indexArr.length ==0){
        indexArr = null;
    }
    console.log(indexArr);
    return indexArr;
}
var arr = [3,5,7,8,11,6,4,1,8];
var result = linerSearch(arr,10);
/*
平均情况:
    1/n+2/n+...+n/n = (1+n)n/2n = (n+1)/2 = Θ(n);
最差情况:
    n = Θ(n);
*/