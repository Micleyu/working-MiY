/**
 * Created by Administrator on 2018/5/20.
 */
define(function () {
    function sortArray(arr) {
        arr.sort(function (x,y) {
            return y-x
        });
        return arr
    }
    return sortArray
});