/**
 * Created by Administrator on 2018/5/28.
 */
define(function () {
   function Changing(obj){
        this.container=$('<div class="container"></div>');
        this.changingBtn1=$('<ul class="changing-btn1"></ul>');
       this.changingBtn2=$('<div class="changing-btn2"></div>');
       this.changingPrev=$('<span class="changing-prev">&lt;</span>');
       this.changingNext=$('<span class="changing-next">&lt;</span>');


   }
   Changing.prototype.start=function (obj) {
       for(var i=0;i<obj.img.length;i++){
           $('<a href='+obj.alink[i]+' class="chang-box"></a>').append($('<img src='+obj.img[i]+'>')).appendTo(this.container);
       }
       for(var i=0;i<obj.num.length;i++){
           $(this.changingBtn1).append('<li>'+(i+1)+'</li>');
       }
       $(this.container).append(this.changingBtn1);
       $(this.changingBtn2).append(this.changingPrev).append(this.changingNext).appendTo(this.container);
       $(obj.select).append(this.container);
   };







   return Changing
});