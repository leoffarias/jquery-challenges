$(document).ready(function(){
	//challenge 1
	$("#btn-menu").click(function(){
		$(".nav-main").slideToggle("slow");
	});

	//challenge 2
	$(".panel-title").click(function(){
		$(this).next().slideToggle("slow");
		$(".panel-content").not($(this).next()).slideUp("slow");
	});

	//challenge 3
	$(".nav-internal").sticky({topSpacing:20, className:"stuck"});
});