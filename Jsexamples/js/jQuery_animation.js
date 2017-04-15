$(document).ready(function() {
	$("#imgbig").bind("click", function (event) {
		$(event.target).parent().css("text-align", "center");
		$(event.target).animate ({
			width: $(event.target).width()*3,
			height: $(event.target).height()*3,
		}, 3000);
	});
});