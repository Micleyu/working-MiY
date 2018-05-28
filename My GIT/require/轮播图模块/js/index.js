/**
 * Created by Administrator on 2018/5/28.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','changing'],function ($,Changing) {
    var changing1=new Changing({
        alink:['#','#','#','#'],
        img:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        num:['1','2','3','4']
    });
    $('.box').append(changing1.container);



});
