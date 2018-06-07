/**
 * Created by Administrator on 2018/6/1.
 */
var aBLOCK=document.querySelectorAll('td');
// for(var i=0;i<aBLOCK.length;i++){
//     $(aBLOCK).addClass('no-mine')
// }
var arr=[
];
for(var i=0;i<4;i++){
    arr[i]=Math.floor(Math.random()*36);
}
while (arr[1]==arr[0]){
    arr[1]=Math.floor(Math.random()*36);
}
while (arr[2]==arr[0]||arr[2]==arr[1]){
    arr[2]=Math.floor(Math.random()*36);
}
while (arr[3]==arr[0]||arr[3]==arr[1]||arr[3]==arr[2]){
    arr[3]=Math.floor(Math.random()*36);
}
$(aBLOCK[arr[0]]).addClass('mine');
$(aBLOCK[arr[1]]).addClass('mine');
$(aBLOCK[arr[2]]).addClass('mine');
$(aBLOCK[arr[3]]).addClass('mine');
function num(r,c){
    var idx=r*6+c;
    if(c>=0&&c<=5){
        if($(aBLOCK[idx]).hasClass('mine')){
            return
        } else {$(aBLOCK[idx]).children().text($(aBLOCK[idx]).children().text()*1+1)
        }
    }
    if(c<0){
        return
    }
    if(c<0){
        return
    }
}
for(var i=0;i<4;i++){
  var ri=$('.mine:eq('+i+')').attr('row');
  var ci=$('.mine:eq('+i+')').attr('col');
    num(ri-1,ci-1);
    num(ri-1,ci*1);
    num(ri-1,ci*1+1);
    num(ri,ci-1);
    num(ri,ci*1+1);
    num(ri*1+1,ci-1);
    num(ri*1+1,ci*1);
    num(ri*1+1,ci*1+1);
}
function clickTd(ri, ci) {
    if (ri < 0 || ri >= 6 || ci < 0 || ci >= 6) {
        return;
    }
    var i = ri * 6 + ci;
    $('td:eq(' + i + ')').trigger('click');
}
var count=0;
$(document).on('click','.close',function () {
    $(this).removeClass('close');
    count++;
    $(this).css('background-color','white');
    $(this).children().css({
        // background:'red',
        opacity:'1'
    });
        if($(this).hasClass('mine')){
            $('.result').css({
                display:'block'
            });
            $('.result-lost').css({
                display:'block'
            });
            return
        }else if($(this).children().text()=='') {
                var ri=$(this).attr('row')*1;
                var ci=$(this).attr('col')*1;
                clickTd(ri - 1, ci - 1);
                clickTd(ri - 1, ci);
                clickTd(ri - 1, ci + 1);
                clickTd(ri, ci - 1);
                clickTd(ri, ci + 1);
                clickTd(ri + 1, ci - 1);
                clickTd(ri + 1, ci);
                clickTd(ri + 1, ci + 1);
        }
        if(count==32){
            $('.result').css({
                display:'block'
            });
            $('.result-win').css({
                display:'block'
            });
        }
}).on('contextmenu','.close',function (e) {
    if(e.which==3){
        $(this).toggleClass('flag')
    }
    if($('.mine[class~="flag"]').length==4&&$('.flag').length==4){
        $('.result').css({
            display:'block'
        });
        $('.result-win').css({
            display:'block'
        });
    }
    return false
});

