var calMatrix = function(matrix1,matrix2){
    var length = matrix1.length;
    if(matrix1.length != matrix2.length){
        return;
    }
    var resultArr = [];
    for(var i=0;i<length;i++){
        var innerArr = [];
        for(var j = 0;j<length;j++){
            var innerItem = 0;
            for(var k =0;k<length;k++){
                innerItem = innerItem + matrix1[i][k] * matrix2[k][j];
            }
            innerArr.push(innerItem);
        }
        resultArr.push(innerArr);
    }
    return resultArr;
}
// var a = [[1,2,3,4],[2,1,4,1],[3,2,3,2],[1,4,1,3]];
// var b =[[1,4,3,3],[4,4,4,4],[2,1,3,1],[3,3,2,2]];
var a = [[3,4],[4,1]];
var b =[[2,1],[3,3]];

var result = calMatrix(a,b);
console.log(result);
