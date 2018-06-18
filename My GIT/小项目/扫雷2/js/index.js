/**
 * Created by Administrator on 2018/6/12.
 */
var aButton=document.getElementsByTagName('button');
var oTable=document.querySelector('.content');
var model=[
    'easy','nomal','difficult'
];
var num=[
    '6','8','10'
];
var count=0;
var type=0;
var winWay=0;
var clickNum=0;
for (var i=0;i<aButton.length;i++){
    aButton[i].index=i;
    aButton[i].addEventListener('click',function () {
        clickNum=0;
        oTable.innerHTML=''
        oTable.className='content';
        $(oTable).addClass('container-'+model[this.index]);
        var oContent=document.querySelector('.content');
        for (var j=0;j<num[this.index];j++){
            var oTr=document.createElement('tr');
            for(var k=0;k<num[this.index];k++){
                var oTd= document.createElement('td');
                $(oTd).addClass('mark');
                oTd.innerHTML='<span></span>';
                $(oTd).attr('date-row',''+j);
                $(oTd).attr('date-col',''+k);
                oTr.appendChild(oTd);
            }
            oContent.appendChild(oTr)
        }
        var aTd=document.getElementsByTagName('td');
        count=aTd.length;
        type=num[this.index];
        winWay=count-type;
        mine(count,num[this.index]);
        for(var i=0;i<num[this.index];i++){
            var ri=$('.mine:eq('+i+')').attr('date-row')*1;
            var ci=$('.mine:eq('+i+')').attr('date-col')*1;
            addNum(ri-1,ci-1,num[this.index]);
            addNum(ri-1,ci*1,num[this.index]);
            addNum(ri-1,ci*1+1,num[this.index]);
            addNum(ri,ci-1,num[this.index]);
            addNum(ri,ci*1+1,num[this.index]);
            addNum(ri*1+1,ci-1,num[this.index]);
            addNum(ri*1+1,ci*1,num[this.index]);
            addNum(ri*1+1,ci*1+1,num[this.index]);
        }
        $('.result').css({
            display:'none'
        });
        $('.result span').css({
            display:'none'
        });
    });

}

function mine(idx,onum) {
    var arr=[];
    for(var z=0;z<onum;z++){
        arr[z]=Math.floor(Math.random()*idx);
        for(var o=0;o<z;o++){
          if (arr[o]==arr[z]){
              arr[z]=Math.floor(Math.random()*idx);
          }
        }
        $('td').eq(arr[z]).addClass('mine')
    }
}
function addNum(ri,ci,k) {
    var idx=ri*k+ci;
    if(ri < 0 || ri >= k || ci < 0 || ci >= k){
        return
    }else{
        if ($('td:eq('+idx+')').hasClass('mine')){
            return;
        }else {
            var str=$('td:eq('+idx+')').children().text()*1+1;
            $('td:eq('+idx+')').children().text(str);
        }
    }
}
function open(ri,ci,k) {
    if (ri < 0 || ri >= k || ci < 0 || ci >= k) {
        return;
    }
    var i = ri * k + ci;
    $('td:eq(' + i + ')').trigger('click');
}


$(document).on('click','.mark',function () {
    $(this).removeClass('mark');
    clickNum++;
    $(this).css('background-color','white');
    $(this).children().css({
        // background:'red',
        opacity:'1'
    });
        if ($(this).hasClass('mine')){
            $('.result').css({
                display:'block'
            });
            $('.result-lost').css({
                display:'block'
            });
            return
        }else {
            if($(this).children().text()==''){
                var ri=$(this).attr('date-row')*1;
                var ci=$(this).attr('date-col')*1;
                open(ri-1,ci-1,type);
                open(ri - 1, ci,type);
                open(ri - 1, ci + 1,type);
                open(ri, ci - 1,type);
                open(ri, ci + 1,type);
                open(ri + 1, ci - 1,type);
                open(ri + 1, ci,type);
                open(ri + 1, ci + 1,type);
            }
        }
    console.log(clickNum);
    if (clickNum>=winWay){
        $('.result').css({
            display:'block'
        });
        $('.result-win').css({
            display:'block'
        });
    }
}).on('contextmenu','.mark',function (e) {
    if(e.which==3){
        $(this).toggleClass('flag')
    }
    if($('.mine[class~="flag"]').length==type&&$('.flag').length==type){
        $('.result').css({
            display:'block'
        });
        $('.result-win').css({
            display:'block'
        });
    }
    return false
});