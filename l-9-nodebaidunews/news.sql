-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-02-16 07:54:08
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(11) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newssrc` varchar(255) NOT NULL,
  `newstime` date NOT NULL,
  `newstype` char(50) NOT NULL,
  `newshref` varchar(200) NOT NULL,
  `newsimg1` varchar(200) NOT NULL,
  `newsimg2` varchar(200) NOT NULL,
  `newsimg3` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newssrc`, `newstime`, `newstype`, `newshref`, `newsimg1`, `newsimg2`, `newsimg3`) VALUES
(1, '还等什么？这些谷歌VR游戏现在就能玩儿', '谷歌', '2017-02-01', '精选', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#/detail/6519975026278139638?_k=270zca', 'http://t12.baidu.com/it/u=4177479524,3250097295&fm=170&s=BB80EB0732EB1AA6CE94E91E0100C0E3&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=4140618653,3219477943&fm=170&s=B2A869A34E0114CC5280101A0300C0D0&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=4146112229,3223648107&fm=170&s=68E2AA46A261894D4E79E8930300C083&w=218&h=146&img.JPEG'),
(2, '大理一男子在酒吧门口被打残 警方发案情通报', '凤凰头条', '2017-02-02', '精选', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#/detail/14985214011459681776?_k=8f9qv9', 'http://t11.baidu.com/it/u=3320062987,907267471&fm=170&s=0100F1135AE7468A8D44FCD40300C0E0&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=1331119727,3577956685&fm=170&s=8C10E41209D874CA025015DE0000E0B1&w=218&h=146&img.JPEG', 'http://t10.baidu.com/it/u=1604437326,3412307138&fm=170&s=05107D93DCEC0E8A326824D3030080E0&w=218&h=146&img.JPEG'),
(3, 'ofo连下33城，中国重回自行车时代', '百家原创', '2017-02-23', '精选', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#/detail/6062088316077904709?_k=3pi1bw', '', 'http://t12.baidu.com/it/u=2384031356,4261412781&fm=170&s=8CC27A230AB38ACC2C5198860100E081&w=218&h=146&img.JPEG', 'http://t10.baidu.com/it/u=2379797037,208701209&fm=170&s=D1C0E7A342A38CE73EB8E9290300A057&w=218&h=146&img.JPEG'),
(4, '港媒：调查显示中国年轻人对世界未来最乐观', '凤凰头条', '2017-02-03', '本地', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#/detail/7582043569808991676?_k=rg76fe', 'http://t12.baidu.com/it/u=1318928330,783772773&fm=170&s=4800EC199F937ED2106890CA0300E0B3&w=218&h=146&img.JPG', '', ''),
(5, '软银2016年4至12月净利润翻番 创下历史新高', '人民报', '2017-01-01', '百家', '', 'http://t10.baidu.com/it/u=1506263640,2060244443&fm=170&s=03009B4F41071AF254E8811E030090C3&w=218&h=146&img.JPEG', '', ''),
(6, '互联网电视品牌集中化趋势下，看酷开如何做领头羊', '百家原创', '2017-02-16', '精选', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40320_1001%2Cta%40iphone_2_6.0_3_537&bd_page_type=1#/detail/3044239884673106652?_k=9ms9pp', 'http://t12.baidu.com/it/u=2474227778,3289648461&fm=170&s=470229ABEEFA3DA35CADC00B0300F093&w=218&h=146&img.JPEG', '', ''),
(8, '没有图片', '没有图片', '2017-02-19', '娱乐', '没有图片', '', '', ''),
(9, '没有图片', '没有图片', '2017-02-26', '精选', '没有图片', '', '', ''),
(11, '1张图片', '1张图片', '2017-02-19', '精选', '1张图片', 'http://t11.baidu.com/it/u=578608423,3825982529&fm=170&s=5A2DA144CC107CD60FA0D4800300509F&w=218&h=146&img.JPEG', '', '11111'),
(13, '互联网电视品牌集中化趋势下，看酷开如何做领头羊', '百家原创', '2017-02-16', '精选', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40320_1001%2Cta%40iphone_2_6.0_3_537&bd_page_type=1#/detail/3044239884673106652?_k=9ms9pp', 'http://t12.baidu.com/it/u=2474227778,3289648461&fm=170&s=470229ABEEFA3DA35CADC00B0300F093&w=218&h=146&img.JPEG', '', ''),
(14, '互联网电视品牌集中化趋势下，看酷开如何做领头羊', '百家原创', '2017-02-16', '精选', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40320_1001%2Cta%40iphone_2_6.0_3_537&bd_page_type=1#/detail/3044239884673106652?_k=9ms9pp', 'http://t12.baidu.com/it/u=2474227778,3289648461&fm=170&s=470229ABEEFA3DA35CADC00B0300F093&w=218&h=146&img.JPEG', '', ''),
(15, '2张图片', '2张图片', '2017-02-19', '精选', '2张图片', 'http://t11.baidu.com/it/u=578608423,3825982529&fm=170&s=5A2DA144CC107CD60FA0D4800300509F&w=218&h=146&img.JPEG', 'http://t11.baidu.com/it/u=578608423,3825982529&fm=170&s=5A2DA144CC107CD60FA0D4800300509F&w=218&h=146&img.JPEG', ''),
(16, '3张图片', '3张图片', '2017-02-19', '精选', '3张图片', 'http://t11.baidu.com/it/u=578608423,3825982529&fm=170&s=5A2DA144CC107CD60FA0D4800300509F&w=218&h=146&img.JPEG', 'http://t11.baidu.com/it/u=578608423,3825982529&fm=170&s=5A2DA144CC107CD60FA0D4800300509F&w=218&h=146&img.JPEG', 'http://t11.baidu.com/it/u=578608423,3825982529&fm=170&s=5A2DA144CC107CD60FA0D4800300509F&w=218&h=146&img.JPEG'),
(17, 'ofo连下33城，中国重回自行车时代', '百家原创', '2017-02-23', '精选', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#/detail/6062088316077904709?_k=3pi1bw', 'http://t10.baidu.com/it/u=223500999,2223386550&fm=170&s=B9E4678767CE50F4511BE26F0300C07F&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=2384031356,4261412781&fm=170&s=8CC27A230AB38ACC2C5198860100E081&w=218&h=146&img.JPEG', 'http://t10.baidu.com/it/u=2379797037,208701209&fm=170&s=D1C0E7A342A38CE73EB8E9290300A057&w=218&h=146&img.JPEG'),
(18, 'ofo连下33城，中国重回自行车时代', '百家原创', '2017-02-23', '本地', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#/detail/6062088316077904709?_k=3pi1bw', 'http://t10.baidu.com/it/u=223500999,2223386550&fm=170&s=B9E4678767CE50F4511BE26F0300C07F&w=218&h=146&img.JPEG', '', 'http://t10.baidu.com/it/u=2379797037,208701209&fm=170&s=D1C0E7A342A38CE73EB8E9290300A057&w=218&h=146&img.JPEG'),
(19, 'ofo连下33城，中国重回自行车时代', '百家原创', '2017-02-23', '精选', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#/detail/6062088316077904709?_k=3pi1bw', 'http://t10.baidu.com/it/u=223500999,2223386550&fm=170&s=B9E4678767CE50F4511BE26F0300C07F&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=2384031356,4261412781&fm=170&s=8CC27A230AB38ACC2C5198860100E081&w=218&h=146&img.JPEG', ''),
(20, '互联网电视品牌集中化趋势下，看酷开如何做领头羊', '百家原创', '2017-02-16', '娱乐', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40320_1001%2Cta%40iphone_2_6.0_3_537&bd_page_type=1#/detail/3044239884673106652?_k=9ms9pp', 'http://t12.baidu.com/it/u=2474227778,3289648461&fm=170&s=470229ABEEFA3DA35CADC00B0300F093&w=218&h=146&img.JPEG', '', ''),
(21, '互联网电视品牌集中化趋势下，看酷开如何做领头羊', '百家原创', '2017-02-16', '精选', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40320_1001%2Cta%40iphone_2_6.0_3_537&bd_page_type=1#/detail/3044239884673106652?_k=9ms9pp', 'http://t12.baidu.com/it/u=2474227778,3289648461&fm=170&s=470229ABEEFA3DA35CADC00B0300F093&w=218&h=146&img.JPEG', '', ''),
(23, '互联网电视品牌集中化趋势下，看酷开如何做领头羊', '百家原创', '2017-02-16', '本地', 'http://m.news.baidu.com/news?fr=mohome&ssid=1415bbc6cea1c1d61320&from=&uid=&pu=sz%40320_1001%2Cta%40iphone_2_6.0_3_537&bd_page_type=1#/detail/3044239884673106652?_k=9ms9pp', 'http://t12.baidu.com/it/u=2474227778,3289648461&fm=170&s=470229ABEEFA3DA35CADC00B0300F093&w=218&h=146&img.JPEG', '', ''),
(27, '哈哈哈', '哈哈哈', '2017-02-26', '精选', '哈哈哈', '', '', ''),
(32, 'ddd', 'ddd', '2017-02-05', '百家', 'ddd', '', '', ''),
(33, 'hh', 'hh', '2017-02-10', '百家', 'hh', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
