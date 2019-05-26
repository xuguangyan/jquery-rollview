/*
 * jQuery rollview plug-in
 * http://www.dasheng.com/
 *
 * Copyright (c) 2010-2012
 * Author: Dasheng
 *
 * Date: 2010-01-10
 * Revision: 0.01
 */
(function($){
	$.fn.rollview=function(setting){
		return this.each(function(){
			
			//分析参数并设定默认值
			var count	=0;			//方块个数:(必填) 默认值:0
			var direct	="next";	//方向:"prev"|"next" 默认值:"next"
			var speed	=300;		//显示速度:(毫秒数) 默认值:300
			var auto	= false;	//自动滚动:true|false 默认值:false
			var delay	=1;			//自滚延时:(秒) 默认值:1
			
			if(!(typeof(setting)=="undefined")){
				if(!(typeof(setting.count)=="undefined")) count=setting.count;
				if(!(typeof(setting.direct)=="undefined")) direct=setting.direct;
				if(!(typeof(setting.speed)=="undefined")) speed=setting.speed;
				if(!(typeof(setting.auto)=="undefined")) auto=setting.auto;
				if(!(typeof(setting.delay)=="undefined")) delay=setting.delay;
			}

			var mainBox=$(this);
			var index=0;
			var timerId=null;
			
			//初始化方块
			function initBox(){
				for(var i=0;i<count;i++){
					var zone=mainBox.find("#zone_"+i);
					var box=mainBox.find("#box_"+i);
					var l=zone.offset().left;
					var t=zone.offset().top;
					var w=zone.width();
					var h=zone.height();
					box.animate({left:l,top:t,width:w,height:h},{duration:0});
				}
			}
			
			//移动方块
			function moveBox(dir){
				index=(dir=="prev") ? (index+1)%count : (index+count-1)%count;
				for(var i=0;i<count;i++){
					var zone=mainBox.find("#zone_"+i);
					var box=mainBox.find("#box_"+(i+index)%count);
					var l=zone.offset().left;
					var t=zone.offset().top;
					var w=zone.width();
					var h=zone.height();
					box.animate({opacity:0.5},{duration:speed});
					box.animate({left:l,top:t,width:w,height:h,opacity:1},{duration:speed});
				}
			}
			
			//往前点击
			$("#prev_btn").click(function(){
				moveBox("prev");
			});
			
			//往后点击
			$("#next_btn").click(function(){
				moveBox("next");
			});
			
			//初始化
			initBox();
			
			//添加定时器
			if(auto){
				timerId=setInterval(function(){moveBox.apply(this,[direct]);},delay*1000+speed*2);
			}
		});
	}
})(jQuery);