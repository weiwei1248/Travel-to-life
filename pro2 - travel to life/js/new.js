$(window).scroll(function(){
	$(".slideanimation").each(function(){
	var pos = $(this).offest().top;
	var winTop = $(window).scrollTop();
	if (pos  < winTop +600)
	{
		$(this).addClass("slide");
	}


	})
});