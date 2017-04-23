$(function() {
    box();
    var loadImg = {
        'data': [{ "src": '1.jpg' }, { "src": '2.jpg' }, { "src": '3.jpg' }, { "src": '4.jpg' },
            { "src": '5.jpg' }, { "src": '6.jpg' }, { "src": '7.jpg' }, { "src": '8.jpg' },
            { "src": '9.jpg' }, { "src": '10.jpg' }, { "src": '11.jpg' }, { "src": '12.jpg' },
            { "src": '13.jpg' }, { "src": '14.jpg' }, { "src": '15.jpg' }, { "src": '16.jpg' },
            { "src": '17.jpg' }, { "src": '18.jpg' }
        ]
    }
    // 当浏览器窗口变化时，清除之前样式并重新加载
    $(window).resize(function() {
        // 删除img-wrap内的子元素
       // $('.img-wrap').empty();// $('.box').remove();使用这2种会清除BOX，则box（）运行会报错
        $('.box').css({
            'position': '',
            'top': '',
            'left': ''
        });
        $('.img-wrap').css('width','');
        box();
        // console.log("窗口宽度1：" + $(window).width());
    });
    // 滚动条监听事件
    window.onscroll = function() {
        //判断是否加载图片
        if (scrollSide()) {
            $.each(loadImg.data, function(index, value) {
                var box = $('<div>').addClass('box').appendTo($('.img-wrap'));
                var content = $('<div>').addClass('content').appendTo(box);
                $('<img>').attr('src', 'imgs/' + $(value).attr('src')).appendTo(content);
            });
            // 图片加载后重新排序
            box();
        }
        // 滚动条滚动一定高度时，搜索框fixed
        var scrollTop = 0;
        scrollTop = document.body.scrollTop;
        // console.log('scrollTop:' + scrollTop);
        if (scrollTop > 135) {
            $("#fixed").addClass('fixed');
            $('.bd-logo').css('display', 'none');
            $('.fiex-logo').css('display', 'block');
        } else {
            $("#fixed").removeClass('fixed');
            $('.bd-logo').css('display', 'block');
            $('.fiex-logo').css('display', 'none');
        }
    };

});

function scrollSide() {
    var box = $('.box');
    // JQ中获得的都是数组,box.last()虽然是最后1个，也是数组对象，.get(0)获得数组中的第一个对象
    //.offsetTop：距离浏览器顶部距离
    var lastBoxHight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    // 当前可视浏览器的高度
    var windowHeight = $(window).height();
    // console.log('windowHeight:'+windowHeight);
    // var documentHeight = $(document).height();// 当前已经加载后浏览器的高度
    var srcollHeight = $(window).scrollTop();
    // console.log('srcollHeight:'+srcollHeight);
    return (lastBoxHight < windowHeight + srcollHeight) ? true : false;
}

function box() {
    var box = $('.box');
    var boxWidth = box.eq(0).width();
    //每行的box数量
    var colNum = Math.floor($(window).width() / boxWidth);
    // console.log(colNum);
    // 图片容器居中处理
    $('.img-wrap').css({
        'width':boxWidth*colNum,
        'margin-top':'20px'
    });
    var boxArr = [];
    box.each(function(index, value) {
        //index为盒子的编号，value为盒子对象
        // console.log('index:'+index+';value:'+value);
        // 获取每行每个box的高度
        // var boxHeight = box.eq(index).height();
        var boxHeight = $(this).height();
        if (index < colNum) {
            boxArr[index] = boxHeight + box.first().get(0).offsetTop;
            // console.log('boxHeight:'+boxHeight);
            // 第一个图片距离顶部的高度
            // console.log('top:'+box.first().get(0).offsetTop);
        } else {
            // 获取当前boxArr中的最小高度
            var minBoxHeight = Math.min.apply(null, boxArr);
            // 获取最小高度box的位置
            var minIndex = $.inArray(minBoxHeight, boxArr);
            // console.log(minIndex);
            // 当前对象value绝对布局到最小高度box下方
            // $(value).css({
            $(this).css({
                'position': 'absolute',
                // 'top': minBoxHeight,
                'top': minBoxHeight,
                'left': box.eq(minIndex).position().left
            });
            // 最小的高度+当前value的高度
            // boxArr[minIndex] += box.eq(index).height();
            boxArr[minIndex] += $(this).height();
        }
    });
}
