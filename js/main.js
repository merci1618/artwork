$(function(){
	var numAc = $("article").length;
	var wd = $("article").width()+20;
	var widSec = numAc * wd ;
	// 총 width 값 (margin 포함)
	var widTotal = widSec + 600;
	
	$("body").height(widSec);
	$("section").width(widTotal);
	
	/*$("html, body").animate({scrollTop: widSec},2000);*/
	// body 의 heigt 만큼 scrollTop 이동
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		/*console.log(scroll);*/
		$("section").stop().animate({left: -scroll},600);
	});
	
	$("article h2").click(function(e){
		e.preventDefault();
		var i = $(this).parent().index();
		var imgsrc = $(this).children("a").attr("href");
		$("article p img").attr({src : imgsrc});
		var pos = wd * i;
		$("html, body").scrollTop(pos);
		$("article").removeClass("on");
		$(this).parent().addClass("on");
	});
	
	$("article span").click(function(){
		$(this).parent().removeClass("on");
	});
	
	$("#navi li").click(function(){
		var i = $(this).index();
		console.log(i);
		var pos = 1000 * i;
		$("#navi li, article").removeClass("on");
		$(this).addClass("on");
		$("html, body").scrollTop(pos);
	});
});