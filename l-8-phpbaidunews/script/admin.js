$(document).ready(function() {
    var $newstbody = $('#tbody');
    // 显示新闻的数目
    var showNum = 10;
    refresNews(showNum);
    // 增加新闻
    $('#sumBtn').on('click', function(e) {
        e.preventDefault();
        // 输入前的判断
        if ($('#newstitle').val().trim() === '' || $('#newshref').val().trim() === '' ||
            $('#newstime').val().trim() === '' || $('#newssrc').val().trim() === '') {
            if ($('#newstitle').val().trim() === '') {
                $('#newstitle').parent().addClass('has-error');
            }
            if ($('#newshref').val().trim() === '') {
                $('#newshref').parent().addClass('has-error');
            }
            if ($('#newstime').val().trim() === '') {
                $('#newstime').parent().addClass('has-error');
            }
            if ($('#newssrc').val().trim() === '') {
                $('#newssrc').parent().addClass('has-error');
            }
            alert('必填项不能为空！请重新输入');
        } else {
            $('#newstitle').parent().removeClass('has-error');
            $('#newshref').parent().removeClass('has-error');
            $('#newstime').parent().removeClass('has-error');
            $('#newssrc').parent().removeClass('has-error');
            var jsonNews = {
                newstitle: $('#newstitle').val().trim(),
                newstype: $('#newstype').val().trim(),
                newssrc: $('#newssrc').val().trim(),
                newshref: $('#newshref').val().trim(),
                newstime: $('#newstime').val().trim(),
                newsimg1: $('#newsimg1').val().trim(),
                newsimg2: $('#newsimg2').val().trim(),
                newsimg3: $('#newsimg3').val().trim()
            };
            $.ajax({
                url: './server/insert.php',
                type: 'post',
                datatype: 'json',
                data: jsonNews,
                success: function(data) {
                    // console.log(data);
                    console.log(data.success);
                    refresNews(showNum);
                    // 重置输入框
                    $('#newstitle').val('');
                    $('#newstype').val('精选');
                    $('#newssrc').val('');
                    $('#newshref').val('');
                    $('#newstime').val('');
                    $('#newsimg1').val('');
                    $('#newsimg2').val('');
                    $('#newsimg3').val('');
                }
            });
        }
    });
    // 删除新闻
    var delId = null;
    $newstbody.on('click', '.btn-danger', function(e) {
        e.stopPropagation();
        // console.log('ok');
        $('#delModal').modal('show');
        // 删除按钮的父级（td），往前第（9）个兄弟（td）的内容
        delId = $(this).parent().prevAll().eq(8).html();
        // console.log(delId);
    });
    $('#delModal #del').on('click', function() {
        // console.log('ok');
        if (delId) {
            $.ajax({
                url: './server/delete.php',
                type: 'post',
                datatype: 'json',
                data: { newsid: delId },
                success: function(data) {
                    console.log(data.success);
                    $('#delModal').modal('hide');
                    refresNews(showNum);
                }
            });
        }
    });
    // 修改新闻
    var updateId = null;
    $newstbody.on('click', '.btn-warning', function(e) {
        e.stopPropagation();
        // console.log('ok');
        $('#updateModal').modal('show');
        // 删除按钮的父级（td），往前第（9）个兄弟（td）的内容
        updateId = $(this).parent().prevAll().eq(8).html();
        // console.log(updateId);
        $.ajax({
            url: './server/currnews.php',
            type: 'post',
            datatype: 'json',
            data: { newsid: updateId },
            success: function(data) {
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewshref').val(data[0].newshref);
                $('#unewssrc').val(data[0].newssrc);
                $('#unewsimg1').val(data[0].newsimg1);
                $('#unewsimg2').val(data[0].newsimg2);
                $('#unewsimg3').val(data[0].newsimg3);
                var utime = data[0].newstime.split(' ')[0];
                $('#unewstime').val(utime);
            }
        });
    });
    $('#updateModal #update').on('click', function() {
        if ($('#unewstitle').val().trim() === '' || $('#unewshref').val().trim() === '' ||
            $('#unewstime').val().trim() === '' || $('#unewssrc').val().trim() === '') {
            if ($('#unewstitle').val().trim() === '') {
                $('#unewstitle').parent().addClass('has-error');
            }
            if ($('#unewshref').val().trim() === '') {
                $('#unewshref').parent().addClass('has-error');
            }
            if ($('#unewstime').val().trim() === '') {
                $('#unewstime').parent().addClass('has-error');
            }
            if ($('#unewssrc').val().trim() === '') {
                $('#unewssrc').parent().addClass('has-error');
            }
            alert('必填项不能为空！请重新输入');
        } else {
            $('#unewstitle').parent().removeClass('has-error');
            $('#unewshref').parent().removeClass('has-error');
            $('#unewstime').parent().removeClass('has-error');
            $('#unewssrc').parent().removeClass('has-error');
            $.ajax({
                url: './server/update.php',
                type: 'post',
                datatype: 'json',
                data: {
                    newsid: updateId,
                    newstitle: $('#unewstitle').val().trim(),
                    newstype: $('#unewstype').val().trim(),
                    newssrc: $('#unewssrc').val().trim(),
                    newshref: $('#unewshref').val().trim(),
                    newstime: $('#unewstime').val().trim(),
                    newsimg1: $('#unewsimg1').val().trim(),
                    newsimg2: $('#unewsimg2').val().trim(),
                    newsimg3: $('#unewsimg3').val().trim()
                },
                success: function(data) {
                    // console.log(data);
                    $('#updateModal').modal('hide');
                    refresNews(showNum);
                }
            });
        }
    });
    // 搜索新闻
    $('#searchBtn').on('click', function() {
        var keyWord = $('#content').val().trim();
        var showNum;
        console.log('keyWord:'+keyWord)
        refresNews(showNum, keyWord);
    });
    // 分页查询
    $('#pageadmin a').on('click', function(e) {
        e.preventDefault();
        // e.stopPropagation();
        $('#pageadmin li').removeClass('active');
        $(this).parent().addClass('active');
         var num=$(this).text()*10;
        // console.log('showNum:'+showNum);
        refresNews(num);
    });
    // 刷新新闻
    function refresNews(showNum, keyWord) {
        $newstbody.empty();
        var jsonContent = {
            showNum: showNum,
            keyWord: keyWord,
        }
        $.ajax({
            url: './server/getnews.php',
            type: 'post',
            datatype: 'json',
            data: jsonContent,
            success: function(data) {
                // console.log(data);
                // forEach()中的参数意义：element是遍历的数组内容，index对应数组索引，
                // array数组本身
                data.forEach(function(element, index, array) {
                    var $tr = $('<tr></tr>').appendTo($newstbody);
                    var $newsid = $('<td>').appendTo($tr).html(element.newsid);
                    var $newstitle = $('<td>').appendTo($tr).html(element.newstitle);
                    var $newstype = $('<td>').appendTo($tr).html(element.newstype);
                    var $newssrc = $('<td>').html(element.newssrc).appendTo($tr);
                    var $newshref = $('<td>').html(element.newshref).appendTo($tr);
                    var $newstime = $('<td>').html(element.newstime).appendTo($tr);
                    var $newsimg1 = $('<td>').html(element.newsimg1).appendTo($tr);
                    var $newsimg2 = $('<td>').html(element.newsimg2).appendTo($tr);
                    var $newsimg3 = $('<td>').html(element.newsimg3).appendTo($tr);
                    var $tedit = $('<td>').appendTo($tr);
                    // var $tr.append($newsid, $newstitle, $newstype, $newssrc,
                    //     $newshref, $newstime, $newsimg1, $newsimg2, $newsimg3);
                    var $updateBtn = $('<button>').html('修改')
                        .addClass('btn btn-warning btn-sm').appendTo($tedit);
                    var $delBtn = $('<button>').html('删除')
                        .addClass('btn btn-danger btn-sm').appendTo($tedit);

                });
            }
        });
    }
});
