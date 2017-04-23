<?php
  header("Content-type:application/json;charset=utf-8");
  $link=mysqli_connect("localhost",'root','','baidunews');
  if(!$link){
	  die (json_encode(array('连接信息' => '连接失败')));
  }
?>