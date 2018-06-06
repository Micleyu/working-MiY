/**
 * Created by Administrator on 2018/6/3.
 */
var oContainer=document.getElementsByClassName('container')[0];
var oSmallBox=document.getElementsByClassName('small-box')[0];
var aSmallImg=document.getElementsByClassName('small-img');
var aBigImg=document.getElementsByClassName('big-img');
var oContainerPrev=document.getElementById('container-prev');
var oContainerNext=document.getElementById('container-next');
for(var i=0;i<4;i++){
    for(var j=0;j<6;j++){
       var str1='<li class="small-img"></li>';
        oSmallBox.innerHTML+=str1;
    }
}
var spaceX=(oContainer.offsetWidth-135*6)/7;
var spaceY=(oContainer.offsetHeight-135*4)/5;
for (var i=0;i<4;i++){
    for(var j=0;j<6;j++){
        aSmallImg[i*6+j].row=i;
        aSmallImg[i*6+j].col=j;
        var oBigImg=document.createElement('div');
        oBigImg.className='big-img';
        aSmallImg[i*6+j].appendChild(oBigImg);
        aSmallImg[i*6+j].style.background='url(images/thumbs/'+(i*6+j+1)+'.jpg)';
        aSmallImg[i*6+j].style.webkitTransitionDelay=''+((23-(i*6+j))*100)+'ms';
        aSmallImg[i*6+j].style.webkitTransform='rotate('+(Math.random()-0.5)*40+'deg)';
        aSmallImg[i*6+j].style.left=(j+1)*spaceX+j*135+'px';
        aSmallImg[i*6+j].style.top=(i+1)*spaceY+i*135+'px';
    }
}
var bigSpaceX=(oContainer.offsetWidth-127*6)/2;
var bigSpaceY=(oContainer.offsetHeight-127*4)/2;
var flag=true;
var count=0;
for(var i=0;i<aSmallImg.length;i++){
    aSmallImg[i].index=i;
    aSmallImg[i].onclick=function () {
        count=this.index;
       if(flag){
           for(var j=0;j<aSmallImg.length;j++){
               aSmallImg[j].style.borderWidth='1px';
               aSmallImg[j].style.webkitTransitionDelay=''+0+'ms';
               aSmallImg[j].style.left=bigSpaceX+aSmallImg[j].col*127+'px';
               aSmallImg[j].style.top=bigSpaceY+aSmallImg[j].row*127+'px';
               aSmallImg[j].style.webkitTransform='rotate('+0+'deg)';
               aBigImg[j].style.display='block';
               oContainerPrev.style.display='block';
               oContainerNext.style.display='block';
               aBigImg[j].style.background='url(images/'+((this.index)+1)+'.jpg) no-repeat';
               aBigImg[j].style.backgroundPosition=-aSmallImg[j].col*125+'px'+' '+(-aSmallImg[j].row*125)+'px';
           }
       }else {
           for(var j=0;j<aSmallImg.length;j++){
               aSmallImg[j].style.borderWidth='5px';
               aSmallImg[j].style.webkitTransitionDelay=''+0+'ms';
               aSmallImg[j].style.left=(aSmallImg[j].col+1)*spaceX+aSmallImg[j].col*135+'px';
               aSmallImg[j].style.top=(aSmallImg[j].row+1)*spaceY+aSmallImg[j].row*135+'px';
               aSmallImg[j].style.webkitTransform='rotate('+(Math.random()-0.5)*40+'deg)';
               aBigImg[j].style.display='none';
               oContainerPrev.style.display='none';
               oContainerNext.style.display='none';
           }
       }
        flag=!flag;

    }
}
oContainerNext.onclick=function () {
    count++;
    if(count==24){
        count=0
    }
    for(var j=0;j<aSmallImg.length;j++){
        aBigImg[j].style.webkitTransitionDelay=''+((Math.floor(Math.random()*600)))+'ms';
        aBigImg[j].style.background='url(images/'+((count)+1)+'.jpg) no-repeat';
        aBigImg[j].style.backgroundPosition=-aSmallImg[j].col*125+'px'+' '+(-aSmallImg[j].row*125)+'px';
    }

};
oContainerPrev.onclick=function () {
    count--;
    if(count==-1){
        count=23
    }
    for(var j=0;j<aSmallImg.length;j++){
        aBigImg[j].style.webkitTransitionDelay=''+((Math.floor(Math.random()*600)))+'ms';
        aBigImg[j].style.background='url(images/'+((count)+1)+'.jpg) no-repeat';
        aBigImg[j].style.backgroundPosition=-aSmallImg[j].col*125+'px'+' '+(-aSmallImg[j].row*125)+'px';
    }

};