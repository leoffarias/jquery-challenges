$(document).ready(function(){
	//challenge 1
	$("#btn-menu").click(function(){
		$(".nav-main").slideToggle("slow");
	});

	//challenge 2
	$(".panel-title").click(function(){
		$(".panel-content").slideUp("slow");
		$(this).next().slideToggle("slow");
	});
});