//轮播
$(function(){
	//计算移动时间
	var clearTime = null;
	//当前展示图片下标
	var currentIndex = 0;
	//下一张即将展示图片的下标
	var futureIndex = 0;

	//鼠标悬浮在li上，切换到相应的图片，并自动播放停止
	//mouseover()进父元素和子元素都记一次数，mouseenter()进父元素记一次数，进子元素不会计数
	$("#aNum a").mouseenter(function(){
		futureIndex = $(this).index();
		//下一下标为鼠标移动到的那个元素
		//停止自动播放
		clearInterval(clearTime);
		if(futureIndex>currentIndex){
			scrollPlay(1);
		}else{
			scrollPlay(2);
		}
		currentIndex = futureIndex ;
	}).mouseout(function(){
		autoPlay();
	})
	
	
	//图片移动的方法（使用传参进行确定向左还是向右）
	function scrollPlay(pama){
		//滚动条样式，给将要的进度条加上active
		$("#aNum a").eq(futureIndex).addClass("active").siblings().removeClass("active");
		//siblings()同胞元素去除这个class
		
		if(pama == 1){ //当前图片往左移
			$("#banner_imgs li").eq(currentIndex).stop().animate({"margin-left":"-810px"});  
			$("#banner_imgs li").eq(futureIndex).css({"margin-left":"810px"}).stop().animate({"margin-left":"0px"});
		}
		else{
			$("#banner_imgs li ").eq(currentIndex).stop().animate({"margin-left":"810px"});  
			$("#banner_imgs li").eq(futureIndex).css({"margin-left":"-810px"}).stop().animate({"margin-left":"0px"});
		}
	}

	//自动播放
	function autoPlay(){
		clearTime  = setInterval(function(){
			futureIndex++;  //当前下标加1
			if(futureIndex > 3){
				futureIndex = 0;
			}
			scrollPlay(1);
			currentIndex =  futureIndex;
		},8000);
	}

	autoPlay(); //调用方法
})