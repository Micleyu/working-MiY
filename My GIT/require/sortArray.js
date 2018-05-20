/**
 * Created by Administrator on 2018/5/20.
 */
define(['isArray'],function (isArray) {
    function sortArray(arr) {
        if (isArray(arr)){
            arr.sort(function (x,y) {
                return y-x
            });
            return arr
        }
        else {
            return '请传数组'
        }
    }
    return sortArray
});