/**
 * Created by Administrator on 2018/6/1.
 */
var aBLOCK=document.querySelectorAll('td');
for(var i=0;i<aBLOCK.length;i++){
    $(aBLOCK).addClass('no-mine')
}
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
$(aBLOCK[arr[0]]).addClass('mine').removeClass('no-mine');
$(aBLOCK[arr[1]]).addClass('mine').removeClass('no-mine');
$(aBLOCK[arr[2]]).addClass('mine').removeClass('no-mine');
$(aBLOCK[arr[3]]).addClass('mine').removeClass('no-mine');
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
// console.log($('.mine:eq(0)').attr('row'));
// console.log($('.mine:eq(0)').attr('col'));
function turn(r,c) {
    var idx=r*6+c;
    if(c>=0&&c<=5){
        if($(aBLOCK[idx]).hasClass('mine')||$(aBLOCK[idx]).children().text()!=''){
            return
        } else {$(aBLOCK[idx]).trigger('click');
        console.log(111)
        }
    }
    if(c<0){
        return
    }
    if(c<0){
        return
    }
}
$('td').on('click',function () {

    var ri=$(this).attr('row');
    var ci=$(this).attr('col');
    console.log(ri,ci);
        turn(ri-1,ci-1);
        turn(ri-1,ci*1);
        // turn(ri-1,ci*1+1);
        // turn(ri,ci-1);
        // turn(ri,ci*1+1);
        // turn(ri*1+1,ci-1);
        // turn(ri*1+1,ci*1);
        // turn(ri*1+1,ci*1+1);

});