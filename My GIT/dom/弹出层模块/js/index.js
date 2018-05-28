/**
 * Created by Administrator on 2018/5/20.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','dialog2'],function ($,Dialog) {
    $('button').on('click',function(){
        var dialog1=new Dialog({
            width:300,
            height:300,
            title:'登录',
            content:'js/text.html'
        });
        dialog1.open();
        // dialog.open({
        //     width:300,
        //     height:300,
        //     title:'登录',
        //     content:'js/text.html'
        // });


            // dialog.open({
            //     width:200,
            //     height:100,
            //     title:'登录',
            //     content:'js/text.html'
            // });
        });
    $('body').on('click','.confirm-btn',function(){
        var dialog2=new Dialog({
            width:200,
            height:100,
            title:'登录',
            content:'js/text.html'
        });
        dialog2.open();

    });
});