# jquery-rollview
<br/>jQuery rollview plug-in
<br/><b>大圣轮滚图片特效--RollView</b>
<br/>
<br/><link rel="stylesheet" type="text/css" href="css/rollview.css" />
<br/><script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
<br/><script type="text/javascript" src="js/jquery.rollview.js"></script>
<br/>
<br/><script language="javascript">
<br/>$(document).ready(function(){
<br/>	$("#mainBox").rollview({
<br/>		count	:8,			//方块个数:(必填) 默认值:0
<br/>		direct	:"next",	//方向:"prev"|"next" 默认值:"next"
<br/>		speed	:300,		//显示速度:(毫秒数) 默认值:300
<br/>		auto	:true,		//自动滚动:true|false 默认值:false
<br/>		delay	:1			//自滚延时:(秒) 默认值:1
<br/>	});
<br/>});
<br/></script>
