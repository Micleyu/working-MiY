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

var day=new Date();
var dayHour=day.getHours();
var dayMinute=day.getMinutes();
var daySecond=day.getSeconds();
oHour.style.transform='rotate('+(dayHour%12)*30+'deg)';
oMinute.style.transform='rotate('+dayMinute*6+'deg)';
oSecond.style.transform='rotate('+daySecond*6+'deg)';
console.log(dayHour,dayMinute,daySecond);
setInterval(function () {
        daySecond++;
    oSecond.style.transform='rotate('+daySecond*6+'deg)';
    if (daySecond%60==0){
        dayMinute++;
        oMinute.style.transform='rotate('+dayMinute*6+'deg)';
    }
    if (dayMinute%60==0){
        dayHour++;
        oHour.style.transform='rotate('+(dayHour%12)*30+'deg)';
    }
        console.log(dayHour)
},1000);