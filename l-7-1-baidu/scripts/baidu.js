$(function() {
    var top = 230;
    // 左上角“消息”弹窗
    $('#message').on('click', function(e) {
        // console.log('OK');
        e.stopPropagation();
        $('.message-list').slideToggle(50);
    });
    // 右上角“设置”弹窗
    $('#setting').on('mouseover', function() {
        // console.log('OK');
        $('.setting').css('display', 'block');
    });
    $('#setting').on('mouseleave', function() {
        // console.log('OK');
        $('.setting').css('display', 'none');
    });
    // 右上角“登录”弹窗
    $('#login').on('mouseover', function() {
        // console.log('OK');
        $('.logined-list').css('display', 'block');
    });
    $('#login').on('mouseleave', function() {
        // console.log('OK');
        $('.logined-list').css('display', 'none');
    });
    // 右上角“更多产品”弹窗
    $('.more').on('mouseover', function() {
        // console.log('OK');
        $('.more-list').css('display', 'block');
    });
    $('.more-list').on('mouseleave', function() {
        // console.log('OK');
        $('.more-list').css('display', 'none');
    });
    // 阻止换肤板块冒泡
    $('.change-skin-wrap').on('click', function(e) {
        e.stopPropagation();
    });
    // 点击展开换肤板块
    $('#changskin').on('click', function(e) {
        e.stopPropagation();
        $('.change-skin-wrap').slideDown(400);
        // console.log('skin:ok');
    });
    $('.change-skin-head li').on('click', function() {
        $('.change-skin-head li').removeClass('li-hover-syle1');
        $(this).addClass('li-hover-syle1');
    });
    $('.skin-type li').on('click', function() {
        $('.skin-type li').removeClass('li-hover-syle2');
        $(this).addClass('li-hover-syle2');
    });
    // 点击‘收起’换肤板块
    $('.skin-wrap-close').on('click', function() {
        $('.change-skin-wrap').slideUp(300);
    });
    // 开启自动换肤
    $('.skin-auto').on('click', function() {
        // console.log('ok');
        $('.skin-auto div').toggleClass('open-auto');
    });

    // 背景皮肤效果预览
    $('.skins ul li').on('mouseenter', function() {
        var s = $(this).children('img').attr('src');
        $('.skin').children('img').attr('src', s);
        $('.bg-style').css('background', 'url(imgs/skin_preview_05c7c9e3.png)0px 0px no-repeat');
    });
    $('.skins ul li').on('mouseleave', function() {
        // console.log('mouseleave');
        $('.skin').children('img').attr('src', "");
        $('.bg-style').css('background', 'url(imgs/skin_preview_05c7c9e3.png)-275px 0px no-repeat');
    });
    // 点击切换皮肤及样式
    $('.skins ul li').on('click', function() {
        // e.stopPropagation();
        // 选定皮肤呈现‘选定’状态
        $('.skin-choosed').css('display', 'none');
        $(this).find('.skin-choosed').css('display', 'block');
        // 获得皮肤id
        var s = $(this).children('img').attr('id');
        // 上传皮肤id
        window.localStorage.setItem('skinid', s);
        skinChange(s);
        // console.log(s);
    });
    // 取消皮肤
    $('.no-skins').on('click', function() {
        // e.stopPropagation();
        // 上传皮肤id=0
        window.localStorage.setItem('skinid', '0');
        // 取消皮肤选定状态
        $('.skin-choosed').css('display', 'none');
        // 隐藏本按钮
        $(this).css('display', 'none');
        noSkin();
    });
    // 
    $('.main-head-fiex span').on('click', function() {
        $('.main-head-fiex span').removeClass('choosed');
        $('.mine-icon').css('background', 'url(imgs/card_setts_fdb17359.png) no-repeat -15px 0');
        $(this).addClass('choosed');
        $('.main-body>div').css('display', 'none');
        var id = $(this).attr('id');
        // console.log(id);
        switch (id) {
            case 'mine':
                $('.my-attention').css('display', 'block');
                break;
            case 'promote':
                $('.promote').css('display', 'block');
                break;
            case 'navigation':
                $('.navigation').css('display', 'block');
                break;
            case 'video':
                $('.video').css('display', 'block');
                break;
            default:
                alert('error');
                break;
        }
        $('body,html').animate({ 'scrollTop': '0' }, 200);
    });
    $('.mine').on('click', function() {
        $('.mine-icon').css('background', 'url(imgs/card_setts_fdb17359.png) no-repeat -145px 0');
        // $('.mine-icon').addClass('mine-icon2');
    });
    // 我的关注三角形的变形与弹窗
    $('.my-nav').on('click', function() {
        $('.tri').toggleClass('turndown');
        $('.nav-text').toggle();
    });
    $('.set-menu span').on('click', function(e) {
        e.stopPropagation();
    });
    // 关注视频的星形
    $('.concern').on('click', function(e) {
        e.stopPropagation();
        $(this).toggleClass('concern2');

    });
    // 点击回到顶部
    $('.gotop').on('click', function() {
        $('body,html').animate({ 'scrollTop': '0' }, 500);
    });
    // 点击空白处收起弹窗
    $('body').on('click', function() {
        $('.message-list').css('display', 'none');
        $('.change-skin-wrap').slideUp(500);
        // console.log('bodyOK');
    });
    window.addEventListener('optimizedScroll', function() {
        var scrollTop = 0;
        scrollTop = document.body.scrollTop;
        if (scrollTop < 172 || scrollTop == 0) {
            $("#fixed").removeClass('fixed-show');
            $('.fiex-logo').css('display', 'none');

        } else {
            $("#fixed").addClass('fixed-show');
            $('.fiex-logo').css('display', 'block');
        }
        if (scrollTop > 0) {
            $(".gotop").fadeIn(300);
        } else {
            $(".gotop").fadeOut(300);
        }
        // console.log('scrollTop:'+scrollTop);
        if (scrollTop > 229) {
            $('.main-head-fiex').addClass('fiex-class');
            $('.fiex-class').css('width', $(window).width());
            // if ((top - scrollTop) > 0) {
            //     $('.main-head-fiex').addClass('fiex-class');
            //     $('.fiex-class').css('width', $(window).width());
            // } else if ((top - scrollTop) == 0) {
            //     $('.main-head-fiex').addClass('fiex-class');
            //     $('.fiex-class').css('width', $(window).width());
            // }
            // top = scrollTop;
        } else {
            $('.main-head-fiex').removeClass('fiex-class');
            $('.main-head-fiex').css('width', '');
        }
        if (scrollTop > 270) {
            if ($(window).width() > 900) {
                $('.newest-hot').css({
                    'position': 'fixed',
                    'top': '115px',
                    'right': ($(window).width() - 900) / 2 + 25 + 'px'
                });
            } else {
                $('.newest-hot').css({
                    'position': 'fixed',
                    'top': '115px',
                    'right': $(window).width() - 900 - 75 + 'px'
                });
            }
        } else {
            $('.newest-hot').css({
                'position': 'absolute',
                'top': '0',
                'right': '0'
            });
        }
    });
});

// 降低监听滚动条次数为1秒60次
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
// 打开网页加载皮肤
function getSkin() {
    var skinid = window.localStorage.getItem('skinid');
    // console.log('ok!!!');
    if (skinid == '0' || skinid == null) {
        noSkin();
    } else {
        skinChange(skinid);
    }
}

function skinChange(skinid) {
    // 加载皮肤
    var url = 'url(imgs/skin-lg/' + skinid + '.jpg)round';
    $('.wrapper').css('background', url);
    // '取消皮肤'按钮显示
    $('.no-skins').css('display', 'block');
    // 改变字体和logo颜色
    $('header nav>a').addClass('fontcolor');
    $('.weather-API-box').addClass('fontcolor');
    $('.head-icron>a').addClass('fontcolor');
    $('.search_form>img').attr('src', 'imgs/logo_white_fe6da1ec.png');
}

function noSkin() {
    // 改变背景
    $('.wrapper').css('background', '');
    // 改变字体和logo颜色
    $('header nav>a').removeClass('fontcolor');
    $('.weather-API-box').removeClass('fontcolor');
    $('.head-icron>a').removeClass('fontcolor');
    $('.search_form>img').attr('src', 'imgs/bd_logo1.png');
}
