// 城市和天气
var city = document.getElementById("weahter-city");
city.addEventListener("click", loCity, false);

function loCity() {
    var c = document.getElementById("cities");
    var w = document.getElementById("weather");
    var t = document.getElementById("tri1");
    if (c.style.display == "none") {
        c.style.display = "block";
        t.style.backgroundPosition = "-52px -104px";
        w.style.backgroundColor = "#f7f7f7";
        w.style.borderLeft = "1px solid #d6d6d6";
        w.style.borderRight = "1px solid #d6d6d6";
        w.style.borderBottom = "1px solid #f7f7f7";
        w.style.padding = "0 9px";
    } else {
        c.style.display = "none";
        t.style.backgroundPosition = "-52px -97px";
        w.style.backgroundColor = "";
        w.style.borderLeft = "";
        w.style.borderRight = "";
        w.style.borderBottom = "";
        w.style.padding = "";
    }
}
// 日期
month();
weekday();
// 获得月份和日期
function month() {
    var date = new Date();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    d = (d < 10) ? ("0" + d) : d;
    document.getElementById("month").innerText = m + "月" + d + "日";
}
// 获得星期
function weekday() {
    var date = new Date();
    var day = date.getDay();
    switch (day) {
        case 0:
            day = "周日";
            break;
        case 1:
            day = "周一";
            break;
        case 2:
            day = "周二";
            break;
        case 3:
            day = "周三";
            break;
        case 4:
            day = "周四";
            break;
        case 5:
            day = "周五";
            break;
        case 6:
            day = "周六";
            break;
    }
    document.getElementById("weekday").innerText = day;
}
// 星座运势弹窗
var star = document.getElementById("star1");
star.addEventListener("mouseenter", showOpen, false);
star.addEventListener("mouseleave", showClose, false);

function showOpen() {
    var s2 = document.getElementById("star2");
    s2.style.display = "block";
}

function showClose() {
    var s2 = document.getElementById("star2");
    s2.style.display = "none";
}
// 邮箱弹窗
var mail1 = document.getElementById("mail1");
var can = document.getElementById("cancel");
mail1.addEventListener("click", mailLogin, false);
can.addEventListener("click", mailCancel, false);

function mailLogin() {
    var maillogin = document.getElementById("maillogin");
    var m = document.getElementById("mail2");
    // var t = document.getElementById("tri1");
    if (maillogin.style.display == "none") {
        maillogin.style.display = "block";
        // t.style.backgroundPosition = "-52px -104px";
        mail1.style.backgroundColor = "#f7f7f7";
        mail1.style.borderLeft = "1px solid #d6d6d6";
        mail1.style.borderRight = "1px solid #d6d6d6";
        mail1.style.borderBottom = "1px solid #f7f7f7";
        mail1.style.padding = "0 3px";
    } else {
        maillogin.style.display = "none";
        // t.style.backgroundPosition = "-52px -97px";
        mail1.style.backgroundColor = "";
        mail1.style.borderLeft = "";
        mail1.style.borderRight = "";
        mail1.style.borderBottom = "";
        mail1.style.padding = "";
    }
}
// 邮箱弹窗取消
function mailCancel() {
    var maillogin = document.getElementById("maillogin");
    maillogin.style.display == "none";
    // e.stopPropagation();
}
// 搜索框分类展开
var showtab = document.getElementById("show-tab");
var tabs = document.getElementById("tabs");
showtab.addEventListener("click", showTab, false);

function showTab() {
    var tri = document.getElementById("tri3");

    if (tabs.style.display == "none") {
        tabs.style.display = "block";
        tri.style.backgroundPosition = "-52px -104px";
    } else {
        tabs.style.display = "none";
        tri.style.backgroundPosition = "-52px -97px";
    }

}

// 搜索框新闻展开
var ipu = document.getElementById("ipu");
var newsNum = document.getElementById("news-num");
ipu.addEventListener("click", news, false);
newsNum.addEventListener("click", function(e) { news(e); }, false);

function news(e) {
    e.stopPropagation();
    var news = document.getElementById("news");
    var newsNum = document.getElementById("news-num");
    // var tabs = document.getElementById("tabs");
    if (news.style.display == "none") {
        news.style.display = "block";
        newsNum.style.backgroundPosition = "3px -87px";
        newsNum.innerText = "";
    } else {
        news.style.display = "none";
        newsNum.style.backgroundPosition = "3px -19px";
        newsNum.innerText = "5";
    }
}
// 点击空白处收起弹窗
document.getElementsByTagName("body")[0].onclick = function() {
        var news = document.getElementById("news");
        news.style.display = "none";
        newsNum.style.backgroundPosition = "3px -19px";
        newsNum.innerText = "5";
    }
    // 搜索框分类//使用代理绑定事件
var tabslist = document.getElementById("tabs-list");
tabslist.addEventListener("click", function(e) {
    var l = document.getElementById("show-tab-list");
    l.innerHTML = e.target.innerHTML;
    tabs.style.display = "none";
}, false);


// 测试//使用代理绑定事件
// var skc = document.getElementById("skin-change");
// skc.addEventListener("click", function(e) {
//     var bgcolor = document.getElementById("bgcolor");
//     // div.setAttribute("class", "abc"); 
//     bgcolor.style.background = e.target.style.background;
//     // localStorage.a=25;
//     localStorage.setItem("skin", bgcolor.style.background);
//     // console.log(localStorage.skin);
//     // e.stopPropagation();
// }, false);
//不使用代理绑定
var skin1 = document.getElementById("skin-1");
var skin2 = document.getElementById("skin-2");
var skin3 = document.getElementById("skin-3");
skin1.addEventListener("click", function(e) { skinChange(1); }, false);
skin2.addEventListener("click", function(e) { skinChange(2); }, false);
skin3.addEventListener("click", function(e) { skinChange(3); }, false);
// skin1.addEventListener("click", skinChange(1), false);//这样写不点击函数也会自动执行
function skinChange(e) {
    var bgcolor = document.getElementById("bgcolor");
    // console.log("this.style.background:"+this.background);
    switch (e) {
        case 1:
            bgcolor.style.background = "#fbd0fb";
            break;
        case 2:
            bgcolor.style.background = "#aeacfd";
            break;
        case 3:
            bgcolor.style.background = "#a9efa9";
            break;
    }
    // console.log("bgcolor.style.background:" + bgcolor.style.background);
    localStorage.setItem("skin", bgcolor.style.background);
}

function getSkin() {
    var bgcolor = document.getElementById("bgcolor");
    bgcolor.style.background = localStorage.getItem("skin");
    // test.style.background = lbgcolorlStorage.skin;
}

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
// window.addEventListener('scroll', function() {
    var scrollTop = 0;
    scrollTop = document.body.scrollTop;
    console.log("scrollTop:"+scrollTop);
    var scr1 = document.getElementById("scroll1");
    if (scrollTop > 61) {
        scr1.className = "search-panel-box-fixed";
    } else {
        scr1.className = "search-panel-box";
    }
});


// 热门游戏滑动效果
var hotgame = document.getElementById("hot-game");
var hotgame2 = document.getElementById("hot-game2");
hotgame.addEventListener("mouseover", moveIn, false);
hotgame.addEventListener("mouseleave", moveOut, false);

function moveIn() {
    hotgame2.style.display = "block";
}

function moveOut() {
    hotgame2.style.display = "none";
}
