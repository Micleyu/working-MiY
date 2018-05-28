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
        for(var i=0;i<obj.img.length;i++){
            $('<a href='+obj.alink[i]+' class="chang-box"></a>').append($('<img src='+obj.img[i]+'>')).appendTo(this.container);
        }
        for(var i=0;i<obj.num.length;i++){
            $(this.changingBtn1).append('<li>'+(i+1)+'</li>');
        }
        $(this.container).append(this.changingBtn1);
        $(this.changingBtn2).append(this.changingPrev).append(this.changingNext).appendTo(this.container);

   // <div class="container">
   //         <a href="#" class="chang-box"><img src="img/1.jpg" alt=""></a>
   //         <a href="#" class="chang-box"><img src="img/2.jpg" alt=""></a>
   //         <a href="#" class="chang-box"><img src="img/3.jpg" alt=""></a>
   //         <a href="#" class="chang-box"><img src="img/4.jpg" alt=""></a>
   //         <ul class="changing-btn1">
   //         <li>1</li>
   //         <li>2</li>
   //         <li>3</li>
   //         <li>4</li>
   //         </ul>
   //         <div class="changing-btn2">
   //         <span class="changing-prev">&lt;</span>
   //         <span class="changing-next">&gt;</span>
   //         </div>
   //         </div>



   }
   return Changing
});