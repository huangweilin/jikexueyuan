<?php
    require_once('db.php');
    $newstitle=$_REQUEST['newstitle'];
    $newstype=$_REQUEST['newstype'];
    $newstime=$_REQUEST['newstime'];
    $newshref=$_REQUEST['newshref'];
    $newssrc=$_REQUEST['newssrc'];
    $newsimg1=$_REQUEST['newsimg1'];
    $newsimg2=$_REQUEST['newsimg2'];
    $newsimg3=$_REQUEST['newsimg3'];
    $sql = "INSERT INTO `news` (`newstitle`,`newstype`,`newshref`,`newstime`,`newssrc`,`newsimg1`,`newsimg2`,`newsimg3`) VALUES ('{$newstitle}','{$newstype}','{$newshref}','{$newstime}','{$newssrc}','{$newsimg1}','{$newsimg2}','{$newsimg3}');";
    mysqli_query($link,"set names 'utf8'");
    $result = mysqli_query($link,$sql);
    echo json_encode(array('success'=>'您已成功添加1条新闻！'));
    mysqli_close($link);
?>