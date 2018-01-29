//Strassen算法
//暂不知如何处理矩阵阶数不是2的整数次幂情况
var calculateMatrix = function(matrix1,matrix2){
    var height1 = matrix1.length;
    var height2 = matrix2.length;
    var length1 = matrix1[0].length;
    var length2 = matrix2[0].length;

    if(length1 != height2){
        return 'can not calculate';
    }

}