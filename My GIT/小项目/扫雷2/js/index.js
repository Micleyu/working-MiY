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
for (var i=0;i<aButton.length;i++){
    aButton[i].index=i;
    aButton[i].onclick=function () {
        oTable.innerHTML='';
        oTable.className='content';
        $(oTable).addClass('container-'+model[this.index]);
        var oContent=document.querySelector('.content');
        for (var j=0;j<num[this.index];j++){
            var oTr=document.createElement('tr');
            for(var k=0;k<num[this.index];k++){
                var oTd= document.createElement('td');
                oTd.innerHTML='<span></span>';
                $(oTd).attr('date-row',''+j);
                $(oTd).attr('date-col',''+k);
                oTr.appendChild(oTd);
            }
            oContent.appendChild(oTr)
        }
        var aTd=document.getElementsByTagName('td');
        count=aTd.length;
        mine(count,num[this.index]);
    };
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
