<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:42:"template/datll_wapian/html/vod\detail.html";i:1525947998;s:62:"D:\wamp\www\banana\template\datll_wapian\html\public\head.html";i:1526009054;}*/ ?>
﻿<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta http-equiv="cache-control" content="no-siteapp">
	
	
<link rel='stylesheet' id='main-css'  href='<?php echo $maccms['path_tpl']; ?>css/style.css' type='text/css' media='all' />
<link rel='stylesheet' id='main-css'  href='<?php echo $maccms['path_tpl']; ?>css/index.css' type='text/css' media='all' />
<link rel='stylesheet' id='main-css'  href='<?php echo $maccms['path_tpl']; ?>css/play.css' type='text/css' media='all' />
	

<script src="<?php echo $maccms['path_tpl']; ?>js/jquery.js"></script>
<script src="<?php echo $maccms['path_tpl']; ?>js/jquery.lazyload.js"></script>
<script src="<?php echo $maccms['path_tpl']; ?>js/jquery.autocomplete.js"></script>
<script src="<?php echo $maccms['path_tpl']; ?>js/home.js"></script>
<script src="<?php echo $maccms['path_tpl']; ?>js/tpl.js"></script>
<script type='text/javascript' src='<?php echo $maccms['path_tpl']; ?>js/jquery.min.js?ver=0.5'></script>
<meta name="keywords" content="头号玩家在线观看,高清头号玩家在线观看,枪版头号玩家在线观看">
<meta name="description" content="提供最新最快的影视资讯和在线播放">
	
	
<title>头号玩家在线观看-挖片网</title>
<link rel="Shortcut Icon" href="<?php echo $maccms['path_tpl']; ?>/template/qwysmb-html/images/favicon.png">
<link rel="Bookmark" href="<?php echo $maccms['path_tpl']; ?>/template/qwysmb-html/images/favicon.png">
<!--[if lt IE 9]><script src="js/html5.js"></script><![endif]-->
<style>
.w-newfigure{list-style:none; float:left;}
.list{ margin-left:-40px;}
</style>
</head>
<body class="page-template page-template-pages page-template-posts-play page-template-pagesposts-play-php page page-id-16">

	<header class="header">
  <div class="container">
    <h1 class="logo"><a href="/" title="<?php echo $maccms['site_name']; ?>"><img src="<?php echo $maccms['path_tpl']; ?>images/logo.png"><span><?php echo $maccms['site_name']; ?></span></a></h1>
    <div class="sitenav">
      <ul>
		  
        <li id="menu-item-18" class="menu-item"><a <?php if(($maccms['aid']==1)): ?> class="menu-itema-two"<?php else: endif; ?>   href="/">首页</a> </li>
		  <?php $__TAG__ = '{"ids":"parent","order":"asc","by":"sort"}';$__LIST__ = model("Type")->listCacheData($__TAG__); if(is_array($__LIST__['list']) || $__LIST__['list'] instanceof \think\Collection || $__LIST__['list'] instanceof \think\Paginator): $key = 0; $__LIST__ = $__LIST__['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
        <li id="menu-item-<?php echo $vo['type_id']; ?>" class="menu-item"><a <?php if(($obj['type_name']==$vo['type_name'])): ?> class="menu-itema-two"<?php else: endif; ?> href="<?php echo mac_url_type($vo); ?>"><?php echo $vo['type_name']; ?></a></li>
		   <?php endforeach; endif; else: echo "" ;endif; ?>
       
      </ul>
    </div>
    <span class="sitenav-on"><i class="icon-list"></i></span> <span class="sitenav-mask"></span>
    <div class="accounts"> <a class="account-weixin" href="javascript:;"><i class="fa"></i>
      <div class="account-popover">
        <div class="account-popover-content"><img src="<?php echo $maccms['path_tpl']; ?>images/qrcode.png"></div>
      </div>
      </a> </div>
    <span class="searchstart-on"><i class="icon-search"></i></span> <span class="searchstart-off"><i class="icon-search"></i></span>
    <form class="searchform"  name="search" method="POST" action="<?php echo mac_url('vod/search'); ?>" method="post" id="search">
      <button tabindex="3" class="sbtn" type="submit"><i class="fa"></i></button>
      <input tabindex="2" class="sinput" name="wd" type="text" placeholder="输入关键字" value="">
    </form>
  </div>
</header>
<div class="header_end"></div>
<div id="homeso">
  <form method="post" id="soform" style="text-align: center;float: none"  name="search" action="<?php echo mac_url('vod/search'); ?>">
    <img id="imgsrc" style="margin:10px" src="<?php echo $maccms['path_tpl']; ?>images/sologo.png"><br>
    <br>
    <input tabindex="2" class="homesoin" id="sos" name="wd" type="text" placeholder="输入你要观看的视频" value="">
    <button id="button" tabindex="3" class="homesobtn" type="submit"><i class="fa">搜索</i></button>
  </form>
</div>


<script type="text/javascript">
	var url=window.location.host;
 window.location.href="http://"+url+"/index.php/vod/play/id/<?php echo $obj['vod_id']; ?>/sid/1/nid/1.html"; 
</script>
</body>
</html>