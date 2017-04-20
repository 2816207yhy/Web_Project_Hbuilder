//导航菜单 Nav
var lis = document.getElementById("nav").getElementsByTagName("li");
for(var i=0; i<lis.length; i++){
	lis[i].onmouseover=function(){
		this.className+=(this.className.length>0?" ":"") + "show";
	}
	lis[i].onmouseout=function(){
		this.className=this.className.replace(new RegExp("( ?|^)show\\b"), "");
	}
}
//代码运行框
function getid(id) {
    return (typeof id == 'string') ? document.getElementById(id) : id
};
function Webtest() {
	var win = window.open();
	win.document.open();
	win.document.write(getid('code').value);
	win.document.close();
}
function saveCode() {
	var win = window.open('', '', 'top=10000,left=10000');
	win.document.write(document.all.code.innerText)
	win.document.execCommand('SaveAs', '', '文件名称.htm')
	win.close();
}
//设置代码高亮
$(window).load(function () {
  $("pre").addClass("prettyprint linenums");
  prettyPrint();
})
//返回顶部
$(function(){
$(function () {
$(window).scroll(function(){
	if ($(window).scrollTop()>100){
		$("#go-top").fadeIn(500);
	}
	else
	{
		$("#go-top").fadeOut(500);
	}
});
$("#go-top").click(function(){
	$('body,html').animate({scrollTop:0},500);
	return false;
});});});