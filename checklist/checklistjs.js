$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(enter){
	if(enter.which === 13){
		var newtext = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + newtext + "</li>")
	}
});

