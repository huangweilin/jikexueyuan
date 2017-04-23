<?php
  require_once('db.php');
      if(isset($_POST['keyWord'])){//admin搜索语句
          $keyWord=$_POST['keyWord'];
          $sql="SELECT * FROM news WHERE newsid LIKE'%".$keyWord."%' OR newstitle LIKE'%".$keyWord."%' OR newstype LIKE'%".$keyWord."%' OR newstime LIKE '%".$keyWord."%' ORDER BY newsid DESC";
      }else if(isset($_POST['newstype'])){//baidunews搜索语句
          $newstype=$_POST['newstype'];
          $showNum=$_POST['showNum'];
          $num=$showNum-7;
          $sql="SELECT * FROM `news` WHERE `newstype` ='{$newstype}' ORDER BY `newsid` DESC LIMIT {$num},7;";
      }else if(isset($_POST['showNum'])){//admin搜索语句,默认搜索0-10条
          $showNum=$_POST['showNum'];
          $num=$showNum-10;
          $sql="SELECT * FROM `news`  ORDER BY `newsid` DESC LIMIT {$num},10";
          // echo json_encode($sql);
      }
      mysqli_query($link,"set names 'utf8'");
      $result = mysqli_query($link,$sql);
      $arr=array();
      while($row = mysqli_fetch_array($result)){
          array_push($arr,array(
              "newsid"=>$row["newsid"],
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
//不同的写法 $link->close();










// =====  上用mysqli   =================  下用mysql  =================
 //  $servername = "localhost";
 //  $username = "root";
 //  $password = "";
 //  $dbname = "baidunews";
 //  $con = mysql_connect("localhost","root","");
 //  if (!$con)
 //     {
 //       die('Could not connect: ' . mysql_error());
 //     }
 //  mysql_select_db("baidunews", $con);
 //  $sql="SELECT * FROM news order by newstime ASC";
 //  mysql_query("set names 'utf8'");
 //  $result = mysql_query($sql);
 //  $arr=array();
 //  while($row = mysql_fetch_array($result)){
	// array_push($arr,array(
	// 	"newstitle"=>$row["newstitle"],
 //  		"newstype"=>$row["newstype"],
 //  		"newssrc"=>$row["newssrc"],
 //  		"newsimg1"=>$row["newsimg1"],
 //  		"newsimg2"=>$row["newsimg2"],
 //  		"newsimg3"=>$row["newsimg3"],
 //  		"newstime"=>$row["newstime"]));
 //  }  
 //  $result=array("result"=>$arr);
 //  echo json_encode($result);
 //  mysql_close($con);

?>