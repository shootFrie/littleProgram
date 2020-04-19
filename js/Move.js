//index.html左侧导航栏是固定的,专给index.html
window.onload=function(){
	shopClassHide();  //导航移入移出
}

function shopClassHide(){   //当鼠标在哪时出现导航页
	var shopClass=document.getElementById('shopClass');
	var LeftShow=document.getElementById('shopClassShow');
	var RightShow=document.getElementById('shopClassList');
	var dlArr = LeftShow.getElementsByTagName(".shopClass_item");
	var timer=null;
		
	/*当鼠标在LeftShow时，保持显示状态，并在鼠标离开后持续一段时间消失*/
	LeftShow.onmouseover= function(){
		clearTimeout(timer);
		HideShow(RightShow,"show shopClass_list");
	}
	LeftShow.onmouseout=function(){
		timer=setTimeout(function(){
			HideShow(RightShow,"hide shopClass_list");
		},500);
	}
	/*鼠标在左边divhover变色*/
	$('#shopClassShow dl').hover(function(){
		$(this).addClass('shopClass_item_hover');
	},function(){
		//鼠标移出时
		$(this).removeClass('shopClass_item_hover');
	});
	
	/*当鼠标在LeftShow时，RightShow也会显示*/
	RightShow.onmouseover=function(){
		clearTimeout(timer);
		HideShow(RightShow,"show shopClass_list");
	}
	RightShow.onmouseout=function(){
		timer=setTimeout(function(){
			HideShow(RightShow,"hide shopClass_list");
		},500);
	}

}

function HideShow(id,style){  //更改css样式的
	return id.className=style;
}

/*轮播*/
/*$(function(){

	var w=810;

	var l=0;

	var timer = null;

	//复制，8个li。为了解决
	var len=$("#banner_imgs li").length*2; 

	//设置ul的长度及左边
	$("#banner_imgs").append($("#banner_imgs").html()).css({'width':len*w, 'left': -len*w/2});

	//每8秒切换一次
	timer = setInterval(init,8000);
	function init(){ //选中相应的a值
		$('#scroll_js .next').trigger('click');
		//页面一加载，就启动next
	}

	$("#banner_imgs li").hover(function(){

		clearInterval(timer);

	},function(){

		timer=setInterval(init,8000);

	});

	$(".prev").click(function(){  //这里是无用，调左右的
		
		l=parseInt($('#banner_imgs').css("left"))+w; 
		//转成整数，后面要加px
		showCurrent(l);
	});
//http://www.jq22.com/demo/jquery-lunbotu-150202204549/#
	$(".next").click(function(){  //这里是无用，调左右的
		l=parseInt($('#banner_imgs').css("left"))-w; 
		//转成整数
		showCurrent(l);
	});

	function showCurrent(l){
		//图片左右切换封装成一个函数
		if($("#banner_imgs").is(':animated')){
			//当ul在执行动画时，阻止执行其他动画
			return;
		}

		$("#banner_imgs").animate({"left":l}, 500, function(){
			if(l==0){
				//当图片位置到第一份第二张马上定位到第二份的第一张
				$("#banner_imgs").css("left",-len*w/2);
				
			}else if(l==(1-len)*w){
				//图片到了最后一张时（第二份的最后一张），就把图片定位到第一份第一张
				$('#banner_imgs').css('left',(1-len/2)*w);
			}
		});
	}

});

function change(obj){
	for(var i=0;i<obj.length;i++){
		obj[i].className="";
	}

}*/






