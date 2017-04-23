$(function() {
    var top = 230;
    var header = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            var me = this;
            // 左上角“消息”弹窗
            me.msg = $('#message');
            // 右上角“设置”弹窗
            me.setting = $('#setting');
            // 右上角“登录”弹窗
            me.login = $('#login');
            // 右上角“更多产品”弹窗
            me.more = $('#more');
            me.moreList = $('#moreList');
        },
        bind: function() {
            var me = this;
            me.msg.on('click', function(e) {
                //业务逻辑取出去
                e.stopPropagation();
                me.msgShow();
            });
            // 右上角“设置”弹窗
            me.setting.on('mouseenter', function() {
                me.settingEnter();
            });
            me.setting.on('mouseleave', function() {
                me.settingLeave();
            });
            // 右上角“登录”弹窗
            me.login.on('mouseenter', function() {
                me.loginEnter();
            });
            me.login.on('mouseleave', function() {
                me.loginLeave();
            });
            // 右上角“更多产品”弹窗
            me.more.on('mouseenter', function() {
                me.moreEnter();
            });
            me.moreList.on('mouseleave', function() {
                me.moreLeave();
            });

        },
        msgShow: function() {
            $('.message-list').slideToggle(50);
        },
        settingLeave: function() {
            $('.setting').css('display', 'none');
        },
        settingEnter: function() {
            $('.setting').css('display', 'block');
        },
        loginLeave: function() {
            $('.logined-list').css('display', 'none');
        },
        loginEnter: function() {
            $('.logined-list').css('display', 'block');
        },
        moreEnter: function() {
            $('.more-list').css('display', 'block');
        },
        moreLeave: function() {
            $('.more-list').css('display', 'none');
        }
    };
    //换肤模块
    var skin = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            var me = this;
            me.wrap = $('.change-skin-wrap');
            // 点击展开换肤板块
            me.skinBtn = $('#changskin');
            // 点击关闭换肤板块
            me.wrapClose = $('.skin-wrap-close');
            // 背景皮肤效果预览
            me.skinPreview = $('.skins ul li');
            //一级分类
            me.skinHeader = $('.change-skin-head li');
            //二级分类
            me.skinType = $('.skin-type li');
            // 取消皮肤
            me.noSkin = $('.no-skins');
            // 点击切换皮肤及样式
            me.change = $('.skins ul li');
            //桌面背景
            me.bgStyle=$('.bg-style');
            //取消选定
            me.choosed=$('.skin-choosed');
            me.auto=$('.skin-auto');
        },
        bind: function() {
            var me = this;
            // 阻止换肤板块冒泡
            me.wrap.on('click', function(e) {
                e.stopPropagation();
            });
            // 点击展开换肤板块
            me.skinBtn.on('click', function(e) {
                e.stopPropagation();
                me.wrap.slideDown(400);
            });
            //一级分类
            me.skinHeader.on('click', function() {
                me.skinHeader.removeClass('li-hover-syle1');
                $(this).addClass('li-hover-syle1');
            });
            //二级分类
            me.skinType.on('click', function() {
                me.skinType.removeClass('li-hover-syle2');
                $(this).addClass('li-hover-syle2');
            });
            // 点击‘收起’换肤板块
            me.wrapClose.on('click', function() {
                me.wrap.slideUp(300);
            });
            // 开启自动换肤
            me.auto.on('click', function() {
                me.auto.children().toggleClass('open-auto');
            });

            // 背景皮肤效果预览
            me.skinPreview.on('mouseenter', function() {
                var s = $(this).children('img').attr('src');
                $('.skin').children('img').attr('src', s);
                me.bgStyle.css('background', 'url(imgs/skin_preview_05c7c9e3.png)0px 0px no-repeat');
            });
            me.skinPreview.on('mouseleave', function() {
                // console.log('mouseleave');
                $('.skin').children('img').attr('src', "");
                me.bgStyle.css('background', 'url(imgs/skin_preview_05c7c9e3.png)-275px 0px no-repeat');
            });
            // 点击切换皮肤及样式
            me.change.on('click', function() {
                // e.stopPropagation();
                // 选定皮肤呈现‘选定’状态
                me.choosed.css('display', 'none');
                $(this).find('.skin-choosed').css('display', 'block');
                // 获得皮肤id
                var s = $(this).children('img').attr('id');
                // 上传皮肤id
                window.localStorage.setItem('skinid', s);
                skinChange(s);
                // console.log(s);
            });
            // 取消皮肤
            me.noSkin.on('click', function() {
                // e.stopPropagation();
                // 上传皮肤id=0
                window.localStorage.setItem('skinid', '0');
                // 取消皮肤选定状态
                me.choosed.css('display', 'none');
                // 隐藏本按钮
                $(this).css('display', 'none');
                noSkin();
            });
        },
    }
    header.init();
    skin.init();


    // 百度搜索框fiex
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
        if (scrollTop > 229) {
            $('.main-head-fiex').addClass('fiex-class');
            $('.fiex-class').css('width', $(window).width());
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
