$(document).ready(function() {
    // 判断是否清空加载，0为清空
    var refresh = 0;
    // 显示新闻数目
    var showNum = 7;
    // 默认搜索新闻的类型
    var typeName = '精选';
    // 刷新获取新闻
    refreshNews(typeName, showNum);
    // nav内的排序
    // 获得设备的宽高
    var deviceWidth = $('body').width();
    var deviceHeight = $('body').height();
    $('nav li').each(function(index, value) {
        var liWidth = $(this).children('a').text().split('').length;
        // console.log(liWidth);
        if (liWidth > 2) {
            $(this).width(deviceWidth / 3);
        } else {
            $(this).width(deviceWidth / 6);
        }
    });

    // 点击nav内容时，出现下划线，并切换新闻类型
    $('nav a').on('click', function(e) {
        e.preventDefault();
        $('nav a').removeClass('border-bottom-color');
        $(this).addClass('border-bottom-color');
        typeName = $(this).text();
        if (typeName != '更多') {
            refreshNews(typeName, 7);
        }
    });
    // 点击“更多”事件
    $('#moreshow').on('click', function() {
        $('#morenav').removeClass('dn');
        $('#navedit').removeClass('dn');
        $(this).parent().addClass('dn');
        $(this).parent().next().removeClass('dn');
    });
    // 点击“收起”事件
    $('#moreclose').on('click', function() {
        $('#morenav').addClass('dn');
        $('#navedit').addClass('dn');
        $('#moreshow').parent().removeClass('dn');
        $('#moreshow').parent().next().addClass('dn');
        $('#moreshow').removeClass('border-bottom-color');
    });
    // 滚动条监听事件
    window.onscroll = function() {
        // 滚动条滚动一定高度时，出现回到顶部按钮
        var scrollTop = 0;
        scrollTop = document.body.scrollTop;
        if (scrollTop > (deviceHeight / 2)) {
            $('.gotop').css('display', 'block');
        } else {
            $('.gotop').css('display', 'none');
        }
        // 当滚动条达到底部时，再次加载新闻
        if (scrollTop >= $(document).height() - deviceHeight) {
            // 获取当前新闻类型
            typeName = $('.border-bottom-color').text();
            // 加载的新闻数目
            showNum += 7;
            // console.log(typeName+''+showNum);
            refresh = 1;
            refreshNews(typeName, showNum);
        }
    };
    // 点击回到顶部
    $('#gotop').on('click', function() {
        $('body,html').animate({ 'scrollTop': '0' }, 200);
    });

    function refreshNews(typeName, showNum) {
        var lists = $('.news-lists');
        if (refresh === 0) {
            lists.empty();
        }

        $.ajax({
            url: './baidunews',
            type: 'get',
            datatype: 'json',
            // beforeSend:function(){$('#addr_modify').html('[获取中...]')},
            data: {
                newstype: typeName,
                showNum: showNum,
            },
            success: function(data) {
                // console.log(data);
                data.forEach(function(element, index, array) {
                    // // 没有图片时采用排版1
                    if (element.newsimg1 == '' && element.newsimg2 == '' && element.newsimg3 == '') {
                        var list2 = $('<li>').addClass('news-list2').appendTo(lists);
                        var a = $('<a>').attr('href', element.newshref).appendTo(list2)
                        var h1 = $('<h1>').html(element.newstitle).appendTo(a);
                        var newscontent2 = $('<div>').addClass('newscontent2').appendTo(a);
                        var p = $('<p>').appendTo(newscontent2);
                    } else if (element.newsimg1 != '' && element.newsimg2 != '' && element.newsimg3 != '') {
                        // 3张图片时采用排版2
                        var list2 = $('<li>').addClass('news-list2').appendTo(lists);
                        var a = $('<a>').attr('href', element.newshref).appendTo(list2)
                        var h1 = $('<h1>').html(element.newstitle).appendTo(a);
                        var newsImg2 = $('<div>').addClass('newsimg2').appendTo(a);
                        var img1 = $('<img>').attr('src', element.newsimg1).appendTo(newsImg2);
                        var img2 = $('<img>').attr('src', element.newsimg2).appendTo(newsImg2);
                        var img3 = $('<img>').attr('src', element.newsimg3).appendTo(newsImg2);
                        var newscontent2 = $('<div>').addClass('newscontent2').appendTo(a);
                        var p = $('<p>').appendTo(newscontent2);
                    } else {
                        // 至少1张图片时采用排版3，只显示1张图片
                        var list1 = $('<li>').addClass('news-list1').appendTo(lists);
                        var a = $('<a>').attr('href', element.newshref).appendTo(list1)
                        var newsImg1 = $('<div>').addClass('newsimg1').appendTo(a);
                        if (element.newsimg1 != '') {
                            var img = $('<img>').attr('src', element.newsimg1).appendTo(newsImg1);
                        } else if (element.newsimg2 != '') {
                            var img = $('<img>').attr('src', element.newsimg2).appendTo(newsImg1);
                        } else if (element.newsimg2 != '') {
                            var img = $('<img>').attr('src', element.newsimg3).appendTo(newsImg1);
                        }
                        var newscontent1 = $('<div>').addClass('newscontent1').appendTo(a);
                        var h1 = $('<h1>').html(element.newstitle).appendTo(newscontent1);
                        var p = $('<p>').appendTo(newscontent1);
                    }
                    var newstime = $('<span>').addClass('newstime').html(element.newstime).appendTo(p);
                    var newsrc = $('<span>').addClass('newssrc').html(element.newssrc).appendTo(p);
                });
                // 执行判断
                refresh = 0;
            }
        });
    }
});
