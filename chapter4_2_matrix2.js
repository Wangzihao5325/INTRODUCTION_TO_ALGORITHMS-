var calMatrix = function(matrix1,matrix2){
    var height1 = matrix1.length;
    var height2 = matrix2.length;
    var length1 = matrix1[0].length;
    var length2 = matrix2[0].length;

    if(length1 !== height2){
        return 'they can not calculate.'
    }
    var result = [];
    for(var i = 0;i<height1;i++){
        var innerArr = [];
        for(var j = 0; j<length2;j++){
            var innerItem = 0;
            for(var k = 0;k<length1;k++){
                innerItem  = innerItem+matrix1[i][k]*matrix2[k][j];
            }
            innerArr.push(innerItem);
        }
        result.push(innerArr);
    }
    return result;
}
var a = [[3],[6]];
var b = [[4,1]];
var result = calMatrix(a,b);
console.log(result);
//普通算法三层for循环 O(n^3)