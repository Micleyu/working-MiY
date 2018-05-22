/**
 * Created by Administrator on 2018/5/20.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','dialog'],function ($,dialog) {
    $('button').on('click',function () {
        dialog.open({
            width:300,
            height:300,
            title:'登录'
        })
    })
});