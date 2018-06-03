/**
 * Created by Administrator on 2018/6/2.
 */
var i=0;
var oCainter=document.getElementById('container');
var ul=document.createElement('ul');
var oHour=document.createElement('div');
oHour.className='hour';
var oMinute=document.createElement('div');
oMinute.className='minute';
var oSecond=document.createElement('div');
oSecond.className='second';

while (i<60){
    var li=document.createElement('li');
    ul.appendChild(li);
    li.className='num'+i;
    li.style.transform='rotate('+i*6+'deg)';
    i++
}
oCainter.appendChild(ul);
oCainter.appendChild(oHour);
oCainter.appendChild(oMinute);
oCainter.appendChild(oSecond);


function  run() {
    var day=new Date();
    var dayHour=day.getHours();
    var dayMinute=day.getMinutes();
    var daySecond=day.getSeconds();
    oHour.style.transform='rotate('+((dayHour%12)*30+dayMinute*0.5)+'deg)';
    oMinute.style.transform='rotate('+(dayMinute*6+daySecond*0.1)+'deg)';
    oSecond.style.transform='rotate('+daySecond*6+'deg)';
}
setInterval(function () {
        run();
        console.log(oMinute.style.transform);
    console.log(oHour.style.transform);
},1000);