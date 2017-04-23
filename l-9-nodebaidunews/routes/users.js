var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection=mysql.createPool({
    	host:'localhost',
    	port:3306,
    	user:'root',
    	password:'',
    	database:'baidunews'
    });

// 后台管理页面
router.get('/getnews',function(req,res,next){
    var showNum =req.query.showNum;
    var num =showNum-10;
    var keyWord=req.query.keyWord;
    if (keyWord){
        keyWord='%'+keyWord+'%';
    	connection.query('SELECT * FROM news WHERE newsid LIKE ? OR newstitle LIKE ? OR newstype LIKE ? OR newstime LIKE ? ORDER BY newsid DESC'
    		,[keyWord,keyWord,keyWord,keyWord],function(err,rows,fields){
    	// console.log('rows');
    	    res.json(rows);
        });

    }else {
    	connection.query('SELECT * FROM `news` ORDER BY `newsid` DESC LIMIT ?,10',[num],function(err,rows,fields){
    	// console.log('rows');
    	    res.json(rows);
        });
    }  
});
// 增加新闻
router.post('/insert',function(req,res,next){
	var newstitle=req.body.newstitle;
    var newstype=req.body.newstype;
    var newssrc=req.body.newssrc;
    var newshref=req.body.newshref;
    var newstime=req.body.newstime;
    var newsimg1=req.body.newsimg1;
    var newsimg2=req.body.newsimg2;
    var newsimg3=req.body.newsimg3;
    connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newshref`,`newstime`,`newssrc`,`newsimg1`,`newsimg2`,`newsimg3`) VALUES (?,?,?,?,?,?,?,?)',
    	[newstitle,newstype,newshref,newstime,newssrc,newsimg1,newsimg2,newsimg3],function(err,rows,fields){
    	// console.log(rows.insertId);
    	res.json(rows.insertId);
    });
});
// 删除新闻
router.post('/delete',function(req,res,next){
    var newsid =req.body.newsid;

    connection.query('DELETE FROM news WHERE newsid =?',[newsid],function(err,rows,fields){
    	// console.log(rows.affectedRows);
    	res.json(rows.affectedRows);
    });
});
// 修改数据前获取数据
router.post('/currnews',function(req,res,next){
    var newsid =req.body.newsid;
    connection.query('SELECT * FROM `news` WHERE `newsid` =?',[newsid],function(err,rows,fields){
    	// console.log('rows');
    	res.json(rows);
    });
});
// 确认修改数据
router.post('/update',function(req,res,next){
	var newsid=req.body.newsid;
	var newstitle=req.body.newstitle;
    var newstype=req.body.newstype;
    var newssrc=req.body.newssrc;
    var newshref=req.body.newshref;
    var newstime=req.body.newstime;
    var newsimg1=req.body.newsimg1;
    var newsimg2=req.body.newsimg2;
    var newsimg3=req.body.newsimg3;
    connection.query('UPDATE `news` SET `newstitle`=?,`newssrc`=?,`newstime`=?,`newstype`=?,`newshref`=?,`newsimg1`=?,`newsimg2`=?,`newsimg3`=? WHERE `newsid`=?' 
    	,[newstitle,newssrc,newstime,newstype,newshref,newsimg1,newsimg2,newsimg3,newsid],function(err,rows,fields){
    	// console.log(rows.changedRows);
    	res.json(rows.changedRows);
    });
});
module.exports=router;