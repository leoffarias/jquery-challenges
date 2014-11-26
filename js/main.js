$(document).ready(function(){
	//challenge 1
	$("#btn-menu").click(function(){
		$(".nav-main").slideToggle("slow");
	});

	//challenge 2
	$(".panel-title").click(function(){
		$(this).next().slideToggle("slow");
		$(this).next().siblings().slideDown("slow");
	});
});