var choose = function (arr) {
    var index, minNum;
    var length = arr.length;
    for(var i=0;i<length;i++){
        minNum = Number.MAX_VALUE;
        index = -1;
        for(var j =i;j<length;j++){
            if(minNum>arr[j]){
                minNum = arr[j];
                index = j;
            }
        }
        var intermediate = arr[index];
        arr[index] = arr[i];
        arr[i] = intermediate;
    }
    console.log(arr);
}
var arr = [7,11,3,1,5,19,22,6,3,10,11];
choose(arr);
/*
最好情况 = 最差情况：
    (n-1)+(n-2)+...+3+2 = ((n-1)+2)*(n-2)/2 = Θ(n^2);
*/