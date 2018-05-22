/**
 * Created by Administrator on 2018/5/20.
 */
define(function(){
    var dialog={
        open:function (obj) {
            var html=   '<div class="dialog-mask">'+
                            '<div class="dialog-box">'+
                                '<div class="dialog-title">'+
                                    '<h2>我是标题</h2>'+
                                    '<span>X</span>'+
                                '</div>'+
                                '<div class="dialog-content">' +
                                '</div>'+
                            '</div>'+
                        '</div>';

            $('body').append(html);
            $('.dialog-box').css({
                width:obj.width,
                height:obj.height
            });
            $('.dialog-title span').html(obj.title)
        }




    };

    return dialog

});
