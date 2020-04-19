/* 登录页面
*记录cookie,实现免登录
 * */
 window.onload=function(){
	 SevenCookie();
 }
 
 //七天免登录
 function SevenCookie(){
	 var aInput = document.getElementById("login").getElementsByTagName("input");
	 if(getCookie("username")){
		 aInput[0].value = getCookie("username");
		 aInput[1].value = getCookie("pwd");
		 aInput[2].checked = true;
	 }
	 
	 aInput[4].onclick = function(){
		 var username = aInput[0].value;
		 var pwd = aInput[1].value;
		 if(aInput[2].checked){
			 setCookie("username" , username ,7);
			 setCookie("pwd" , pwd , 7);
		 }
	 }
 }
 
 function setCookie(name,value,day){
	 var d = new Date();
	 d.setDate(d.getDate() + day);
	 document.cookie = name +"="+ value + ";expires="+day;
 }
 function getCookie(name){
	 var str = document.cookie;
	 var arr = str.split('; ');
	 for(var i = 0;i<arr.length; i++){
		 var arr1 = arr[i].split("=");
		 if(arr1[0] == name){
			 return arr1[1];
		 }
	 } 
 }