/**
 * Created by Administrator on 2018/6/2.
 */
var i=0;
var oCainter=document.getElementById('container');
var ul=document.createElement('ul');
while (i<60){
    var li=document.createElement('li');
    ul.appendChild(li);
    li.className='num'+i;
    li.style.transform='rotate('+i*6+'deg)';
    i++
}
oCainter.appendChild(ul);

