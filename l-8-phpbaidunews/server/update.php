<?php
    require_once('db.php');
    $newsid=$_REQUEST['newsid'];
    $newstitle=$_REQUEST['newstitle'];
    $newstype=$_REQUEST['newstype'];
    $newstime=$_REQUEST['newstime'];
    $newshref=$_REQUEST['newshref'];
    $newssrc=$_REQUEST['newssrc'];
    $newsimg1=$_REQUEST['newsimg1'];
    $newsimg2=$_REQUEST['newsimg2'];
    $newsimg3=$_REQUEST['newsimg3'];
    $sql = "UPDATE `news` SET `newstitle`='{$newstitle}',`newssrc`='{$newssrc}',`newstime`='{$newstime}',`newstype`='{$newstype}',`newshref`='{$newshref}',`newsimg1`='{$newsimg1}',`newsimg2`='{$newsimg2}',`newsimg3`='{$newsimg3}' WHERE `newsid`='{$newsid}'";
    mysqli_query($link,"set names 'utf8'");
    $result = mysqli_query($link,$sql);
    echo json_encode(array('success'=>'您已成功修改1条新闻！'));
    mysqli_close($link);
?>