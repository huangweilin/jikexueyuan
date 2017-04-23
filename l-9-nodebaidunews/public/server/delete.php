<?php
    require_once('db.php');
    $newsid=$_REQUEST['newsid'];   
    $sql= "DELETE FROM news WHERE newsid =".$newsid ;
    mysqli_query($link,"set names 'utf8'");
    $result = mysqli_query($link,$sql);
    echo json_encode(array('success'=>'您已成功删除1条新闻！'));
    mysqli_close($link);
?>