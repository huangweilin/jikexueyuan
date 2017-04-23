<?php
  require_once('db.php');
      $newsid=$_POST['newsid'];
      $sql="SELECT * FROM `news` WHERE `newsid` ={$newsid}";
      mysqli_query($link,"set names 'utf8'");
      $result = mysqli_query($link,$sql);
      $arr=array();
      while($row = mysqli_fetch_array($result)){
        array_push($arr,array(
          "newstitle"=>$row["newstitle"],
          "newstype"=>$row["newstype"],
          "newssrc"=>$row["newssrc"],
          "newsimg1"=>$row["newsimg1"],
          "newsimg2"=>$row["newsimg2"],
          "newsimg3"=>$row["newsimg3"],
          "newshref"=>$row["newshref"],
          "newstime"=>$row["newstime"]));
      } 
      echo json_encode($arr);
  mysqli_close($link);