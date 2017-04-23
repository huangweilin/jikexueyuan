$(function() {

    getStyle();
    // 打开顶部搜索框
    $('#search-btn1').on('click', function() {
        $('.searching-container').animate({
            width: '850px',
            opacity: "show",
            display: 'block'
        }, 500);
        // $('.searching-container').slideDown(500);    
    });
    // 关闭顶部的搜索框
    $('#close-btn').on('click', function() {
        $('.searching-container').animate({
            width: 0,
            display: 'none'
        }, 100);
    });
    // 分类栏hover时下拉窗口
    $('.sort dl').on('mouseover', function() {
        $(this).children('dd').slideDown(100);
    });
    $('.sort dl').on('mouseleave', function() {
        $(this).children('dd').slideUp(100);
    });
    // 改变排版样式2
    $('#style-1').on('click', changeStyle2);
    // 改变排版样式1
    $('#style-2').on('click', changeStyle1);
    // 排版样式的通用hover效果
    $('.lesson-list li').on('mouseenter', lessonPlayShow);
    $('.lesson-list li').on('mouseleave', lessonPlayHidden);
    // 排版样式1的hover效果
    $('.style-1').on('mouseenter', function() {
        $(this).find('.lesson-infor-1').stop().animate({ height: '175px' }, 300);
        $(this).find('.study-time-1').stop().animate({ top: '115px' }, 300);
        $(this).find('.level-1').stop().css({ display: 'block' });
        $(this).find('.learn-number-1').stop().animate({ opacity: "1" }, 300);
        $(this).find('.explain-1').stop().slideDown(300);
    });
    // 排版样式2的hover效果
    $('.style-1').on('mouseleave', function() {
        $(this).find('.lesson-infor-1').stop().animate({ height: '90px' }, 300);
        $(this).find('.study-time-1').stop().animate({ top: '60px' }, 300);
        $(this).find('.level-1').stop().css({ display: 'none' });
        $(this).find('.learn-number-1').stop().animate({ opacity: "0" }, 300);
        $(this).find('.explain-1').stop().slideUp(300);
    });


    // 监听滚动条
    (function() {
        var throttle = function(type, name, obj) {
            var obj = obj || window;
            var running = false;
            var func = function() {
                if (running) {
                    return;
                }
                running = true;
                requestAnimationFrame(function() {
                    obj.dispatchEvent(new CustomEvent(name));
                    running = false;
                });
            };
            obj.addEventListener(type, func);
        };

        // 将scroll事件重定义为optimizedScroll事件
        throttle('scroll', 'optimizedScroll');
    })();
    window.addEventListener('optimizedScroll', function() {
        var scrollTop = 0;
        scrollTop = document.body.scrollTop;
        if (scrollTop > 0) {
            $("#gotop").fadeIn(300);
        } else {
            $("#gotop").fadeOut(300);
        }
    });
    // 点击回到顶部
    $('#gotop').on('click', function() {
        $('body,html').animate({ 'scrollTop': '0' }, 500);
    });
});
// 页面刷新时获取排版样式
function getStyle() {
    var valueSession = sessionStorage.getItem("style");
    if (valueSession == 'style-2') {
        changeStyle2();
        // $('.lesson-list li').removeClass('style-1').addClass('style-2');
        // console.log(valueSession);
    } else if (valueSession == 'style-1') {
        changeStyle1();
        // $('.lesson-list li').removeClass('style-2').addClass('style-1');
        // console.log(valueSession);
    } else return false;
}
// 切换排版样式2
function changeStyle2() {
    sessionStorage.setItem('style', 'style-2');
    $('.style-1').addClass('style-2').removeClass('style-1');
    $('.pic-box-1').addClass('pic-box-2').removeClass('pic-box-1');
    $('.lesson-play-1').addClass('lesson-play-2').removeClass('lesson-play-1');
    $('.lesson-infor-1').addClass('lesson-infor-2').removeClass('lesson-infor-1');
    $('.lesson-title-1').addClass('lesson-title-2').removeClass('lesson-title-1');
    $('.explain-1').css('display', 'block').addClass('explain-2').removeClass('explain-1');
    $('.study-time-1').css('top', '70px').addClass('study-time-2').removeClass('study-time-1');
    $('.level-1').css('display', 'block').addClass('level-2').removeClass('level-1');
    $('.learn-number-1').css('opacity', '1').addClass('learn-number-2').removeClass('learn-number-1');
    $('.classify-1').addClass('classify-2').removeClass('classify-1');
}
// 切换排版样式1
function changeStyle1() {
    sessionStorage.setItem('style', 'style-1');
    $('.style-2').addClass('style-1').removeClass('style-2');
    $('.lesson-play-2').addClass('lesson-play-1').removeClass('lesson-play-2');
    $('.pic-box-2').addClass('pic-box-1').removeClass('pic-box-2');
    $('.lesson-infor-2').addClass('lesson-infor-1').removeClass('lesson-infor-2');
    $('.lesson-title-2').addClass('lesson-title-1').removeClass('lesson-title-2');
    $('.explain-2').css('display', 'none').addClass('explain-1').removeClass('explain-2');
    $('.study-time-2').css('top', '60px').addClass('study-time-1').removeClass('study-time-2');
    $('.level-2').css('display', 'none').addClass('level-1').removeClass('level-2');
    $('.learn-number-2').css('opacity', '0').addClass('learn-number-1').removeClass('learn-number-2');
    $('.classify-2').addClass('classify-1').removeClass('classify-2');
}

function lessonPlayShow() {
    $(this).find('.lesson-play').stop().animate({ opacity: '1' }, 200);
}

function lessonPlayHidden() {
    $(this).find('.lesson-play').stop().animate({ opacity: '0' }, 200);
}
