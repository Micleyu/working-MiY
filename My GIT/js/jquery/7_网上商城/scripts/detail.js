/**
 * Created by Administrator on 2018/5/16.
 */
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
//尺寸选择按钮
$('.pro_size li').on('click',function () {
    $(this).addClass('cur').siblings().removeClass('cur');
    $('.pro_size strong').text($(this).text())
});
//星星选择按钮
$('.rating .one').on('click',function (e) {
   alert('您给你商品的评价是:1分');
       $(this).parent().attr('class','rating onestar');
       e.preventDefault();
       e.returnValue=false
    });
$('.rating .two').on('click',function (e) {
    alert('您给你商品的评价是:2分');
    $(this).parent().attr('class','rating twostar');
    e.preventDefault();
    e.returnValue=false
});
$('.rating .three').on('click',function (e) {
    alert('您给你商品的评价是:3分');
    $(this).parent().attr('class','rating threestar');
    e.preventDefault();
    e.returnValue=false
});
$('.rating .four').on('click',function (e) {
    alert('您给你商品的评价是:4分');
    $(this).parent().attr('class','rating fourstar');
    e.preventDefault();
    e.returnValue=false
});
$('.rating .five').on('click',function (e) {
    alert('您给你商品的评价是:5分');
    $(this).parent().attr('class','rating fivestar');
    e.preventDefault();
    e.returnValue=false
});
//属性、尺码、介绍按钮
$('.tab_menu li').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.tab_box div').eq($(this).index()).removeClass('hide').siblings().addClass('hide')
});
//颜色选择按钮
var imgCol=[
    'blue','yellow','green'
];
$('.color-change-box img').on('click',function () {
    $('.color-change-box img').removeClass('hover');
    $(this).addClass('hover');
    $('.color_change strong').text(this.alt);
    $('#thickImg').attr('href','images/pro_img/'+imgCol[$(this).attr('value')]+'_one_big.jpg');
    $('.zoomWrapperImage img').attr('src','images/pro_img/'+imgCol[$(this).attr('value')]+'_one_big.jpg');
    $('.jqzoomWrap>a>img').attr('src','images/pro_img/'+imgCol[$(this).attr('value')]+'_one_small.jpg');
    $('.imgList_blue').css('display','none');
    $('.imgList_yellow').css('display','none');
    $('.imgList_green').css('display','none');
    $('.imgList_'+imgCol[$(this).attr('value')]).css('display','block');
});
//放大镜
$('.jqzoomWrap')
    .on('mouseenter',function(e){
    $('<div class="zoomPup"></div>').appendTo($('.jqzoomWrap a')).css({
        width:131,
        height:131
        }).offset({
        left:e.pageX-131/2,
        top:e.pageY-131/2
    });
        $left=$('.jqzoomWrap').offset().left;
        $top=$('.jqzoomWrap').offset().top;
        $width=$('.jqzoomWrap').width();
        $height=$('.jqzoomWrap').height();
        $BigLeft=($('.zoomPup').offset().left-$left)*800/310;
        $BigTop=($('.zoomPup').offset().top-$top)*800/310;
        // console.log($BigLeft)
        $('.zoomWindow').css({
            display:'block'
        });

        $('.zoomWrapperImage img').css({
            left:-$BigLeft,
            top:-$BigTop
        })
}).on('mousemove',function(e){

    $('.zoomPup').offset({
        left:e.pageX-131/2,
        top:e.pageY-131/2
    });
    if($('.zoomPup').offset().left<=$left){
        $('.zoomPup').offset({
            left:$left
        })
    }
    if($('.zoomPup').offset().top<=$top){
        $('.zoomPup').offset({
            top:$top
        })
    }
    if($('.zoomPup').offset().left>$left+$width-131){
        $('.zoomPup').offset({
            left:$left+$width-131
        })
    }
    if($('.zoomPup').offset().top>$top+$height-131){
        $('.zoomPup').offset({
            top:$top+$height-131
        })
    }
    $('.zoomWrapperImage img').css({
        left:-($('.zoomPup').offset().left-$left)*800/310,
        top:-($('.zoomPup').offset().top-$top)*800/310
    })
}).on('mouseleave',function () {
    $('.zoomPup').remove();
    $('.zoomWindow').css({
        display:'none'
    })
});

//选择放大按钮
var colCount=[
    'one','two','three'
];
$('.imgList_blue img').each(function (idx,ele) {
    $(ele).on('click',function () {
        $('#thickImg').attr('href','images/pro_img/'+imgCol[0]+'_'+colCount[idx]+'_big.jpg');
        $('.jqzoomWrap>a>img').attr('src','images/pro_img/'+imgCol[0]+'_'+colCount[idx]+'_small.jpg');
        $('.zoomWrapperImage img').attr('src','images/pro_img/'+imgCol[0]+'_'+colCount[idx]+'_big.jpg')
    })
});
$('.imgList_yellow img').each(function (idx,ele) {
    $(ele).on('click',function () {
        $('#thickImg').attr('href','images/pro_img/'+imgCol[1]+'_'+colCount[idx]+'_big.jpg');
        $('.jqzoomWrap>a>img').attr('src','images/pro_img/'+imgCol[1]+'_'+colCount[idx]+'_small.jpg');
        $('.zoomWrapperImage img').attr('src','images/pro_img/'+imgCol[1]+'_'+colCount[idx]+'_big.jpg')
    })
});
$('.imgList_green img').each(function (idx,ele) {
    $(ele).on('click',function () {
        $('#thickImg').attr('href','images/pro_img/'+imgCol[2]+'_'+colCount[idx]+'_big.jpg');
        $('.jqzoomWrap>a>img').attr('src','images/pro_img/'+imgCol[2]+'_'+colCount[idx]+'_small.jpg');
        $('.zoomWrapperImage img').attr('src','images/pro_img/'+imgCol[2]+'_'+colCount[idx]+'_big.jpg')
    })
});
//下拉框件数选择按钮
$('#num_sort').on('change',function () {
$('#num_sort option:selected').each(function () {
    $('.pro_price strong').text(200*$(this).text())
})
});


//观看清晰图片按钮



//购物车按钮














