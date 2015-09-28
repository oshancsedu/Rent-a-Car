$('document').ready(function(){
	var active = $(".active");
	text=active.parent().attr('class');
	if(text=="dropdown-menu")
	{
		active.parent().parent().addClass("active");
	}
});