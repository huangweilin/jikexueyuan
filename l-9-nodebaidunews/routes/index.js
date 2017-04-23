var express=require('express');
var router =express.Router();
var mysql=require('mysql');
// 主页获取新闻的请求
router.get('/',function(req,res,next){
    var newstype =req.query.newstype;
    var showNum =req.query.showNum;
    var num =showNum-7;
    var connection=mysql.createConnection({
    	host:'localhost',
    	port:3306,
    	user:'root',
    	password:'',	
    	database:'baidunews'
    });
    connection.connect();
    connection.query('SELECT * FROM `news` WHERE `newstype`=? ORDER BY `newsid` DESC LIMIT ?,7',
        [newstype,num],function(err,rows,fields){
    	// console.log(rows);
    	res.json(rows);
    });
});
module.exports=router;
