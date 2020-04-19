/* 除了index.html以外的有左侧导航的页面 
*
*/
window.onload=function(){
	shopClassHide();  //导航移入移出
}

function shopClassHide(){   //当鼠标在哪时出现导航页
	var shopClass=document.getElementById('shopClass');
	var LeftShow=document.getElementById('shopClassShow');
	var RightShow=document.getElementById('shopClassList');
	var timer=null;
	/*当鼠标在shopClass时，LeftShow显示，鼠标离开后持续一段时间后消失*/
	shopClass.onmouseover=function(){
		clearTimeout(timer);
		HideShow(LeftShow,"show shopClass_show");
	};
	/*鼠标在左边divhover变色*/
	$('#shopClassShow dl').hover(function(){
		$(this).addClass('shopClass_item_hover');
	},function(){
		//鼠标移出时
		$(this).removeClass('shopClass_item_hover');
	});
	shopClass.onmouseout=function(){

		timer=setTimeout(function(){
			HideShow(LeftShow,"hide shopClass_show");
		},2000);
	}
	/*当鼠标在LeftShow时，保持显示状态，并在鼠标离开后持续一段时间消失*/
	shopClassShow.onmouseover=function(){
		clearTimeout(timer);
		HideShow(LeftShow,"show shopClass_show");
		HideShow(RightShow,"show shopClass_list");
	}
	shopClassShow.onmouseout=function(){
		timer=setTimeout(function(){
			HideShow(LeftShow,"hide shopClass_show");
			HideShow(RightShow,"hide shopClass_list");
		},500);
	}
	/*当鼠标在LeftShow时，RightShow也会显示*/
	RightShow.onmouseover=function(){
		clearTimeout(timer);
		HideShow(LeftShow,"show shopClass_show");
		HideShow(RightShow,"show shopClass_list");
	}
	RightShow.onmouseout=function(){
		timer=setTimeout(function(){
			HideShow(RightShow,"hide shopClass_list");
			HideShow(LeftShow,"hide shopClass_show");
		},500);
	}

}

function HideShow(id,style){  //更改css样式的
	return id.className=style;
}







