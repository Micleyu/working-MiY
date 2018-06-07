/**
 * Created by Administrator on 2018/5/16.
 */
//轮播图
var count=0;
var timer;
function  change(idx) {
    $('.chanbtn-box a').eq(idx).addClass('chos').siblings().removeClass('chos');
    $('#JS_imgWrap img').eq(idx).stop().fadeIn(600).siblings().stop().fadeOut(600);
}
$('.chanbtn-box a').on('mouseover',function () {
    change($(this).index());
    count=$(this).index()
});
$('.chanbtn-box a').eq(0).trigger('mouseover');
function run() {
    timer=setInterval(function () {
        count++;
        if (count==$('#JS_imgWrap img').length){
            count=0;
        }
        change(count);
    },2000)
}
run();
$('#jnImageroll').hover(function () {
    clearInterval(timer);
},function () {
    run();
});
//品牌活动
$('.changlist-box li').on('click',function () {
    $(this).addClass('chos').siblings().removeClass('chos');
    var $PWidth=$('#jnBrandList').width();
    $('#jnBrandList').animate({left:-780*$(this).index()},900,'swing')
});

//搜索框
$('#inputSearch').on('focus',function () {
    $(this).val('');
}).on('blur',function () {
    $(this).val('请输入商品名称');
});
//换肤
$('#skin_0').on('click',function () {
    $('#skin_0').addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#4A4A4A');
    $('#jnCatalog h2').eq(0).css('background-color','#6E6E6E');
});
$('#skin_1').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#BE46D8');
    $('#jnCatalog h2').eq(0).css('background-color','#D49AE1');
});
$('#skin_2').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#E44072');
    $('#jnCatalog h2').eq(0).css('background-color','#F296B2');
});
$('#skin_3').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#37C7D4');
    $('#jnCatalog h2').eq(0).css('background-color','#98E0E6');
});
$('#skin_4').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#F9AF2A');
    $('#jnCatalog h2').eq(0).css('background-color','#FFCF78');
});
$('#skin_5').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#B1D410');
    $('#jnCatalog h2').eq(0).css('background-color','#CDE074');
});
//最新动态title
var title;
$('#jnNoticeInfo a').on('mouseover',function (e) {
    title=$(this).attr('title');
    $('<div class="tippy">'+title+'</div>').appendTo('body').offset({
        left:e.pageX+20,
        top:e.pageY+20
    });
    $(this).attr('title','');
}).on('mousemove',function (e) {
    $('.tippy').offset({
        left:e.pageX+20,
        top:e.pageY+20
    })
}).on('mouseout',function (e) {
    $('.tippy').remove();
    $(this).attr('title',title)
});
