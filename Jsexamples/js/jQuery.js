
function handler() {
    this.style.display='none'
};

elem.addEventListener("click", handler);



function color() {
		    var test = $('li.test');
		for(var i = 0; i < test.length; i++) {
			test.get(i).style.color = "red";
		}
};

function settimeout() {
		 setTimeout("$('p.test').get(0).style.color = 'green'", 2000);
};

function colorfirst() {
		  var colfirst = $('.test:first');		
			colfirst.get(0).style.color = "blue";		
};

function colorsecond() {
		  var colsecond = $('.test:eq(1)');		
			colsecond.get(0).style.color = "yellow";		
};

function valid() {
		  var state = $("input[name='sex']:checked").val();
		  $("#message").show();		
			if(!state) return $("#message").html("<font style='color:red'>Вы не указали Ваш пол!</font><br/>");
			$("#message").hide();
			alert(state);
			if(state == "женский")
				$("#img").show();
};

function quantity () {
	var quant = $("li, input");
	console.log(quant);
};

function addattr () {
	$(":not(img[alt])").attr("alt", "jQuery");
};

function finfattr () {
	var elements = $("img");
	var text = "";
	for(var i = 0; i < elements.length; i++)
		text += elements[i].alt + "\n";
	alert(text);
};

function selectcolor() {
	var select = prompt("1 или 2?");
	while(select != 1 && select != 2) {
		alert("Пожалуйста, введите число 1 или 2");
		select = prompt("1 или 2?");
};

$("#div").attr ("class", "div_" + select);
};

function changestyle() {
	$("#font_size").css("font-size", "25px");
	$("#font_size").css("color", "#F82929");
	$("#font_size").css("background-color", function() {
		return "#5578E9"
	});
	$("#font_size").css("width", "150px");
	$("#font_size").css("height", function() {
		return $(this).width();
	});
};

function changeheight() {
	$("#font_size").css("height", function() {
		var height = prompt("введите высоту: ");
		return height + "px";
	});
};

function html() {
		alert($("#blok").html());
};

function text() {
		alert($("#blok").text());
};

function newp() {
		$("#blok p").html("<p>Новый абзац</p>");
};

function clone() {
		var block = $("#blok").clone();	
		$(".article_3").append(block);
		
};

function clonestyle() {
		block.html("<p>Новый абзац</p>");
		block.css("color", "#F82929");
};

function addelem() {
		$("#blok2, #empty").append("<span>Новый текст</span>");		
};

function addto() {
		$(".addimg").appendTo($("#blok2, #empty"));		
};

function addtolast() {
		$(".addimg").appendTo($("#empty"));		
};

function wrap() {
		$("a").wrap("<p style='font-size:20px'></p>");		
};

function remove() {
		$(".addimg").remove();		
};

function empty() {
		$("#blok2").empty();		
};

function appendTo() {
		$("<p>Новый абзац</p>").appendTo("#blok2");		
};

function prependTo() {
		$("<p>Новый абзац</p>").prependTo("#blok2");		
};

function insertbefore() {
		$("<p>Новый абзац</p>").insertBefore("#blok2>p");		
};

function val () {
		var text = $("#text").val ();
		alert(text);	
};

function valpass() {
		var text = $("#password").val ();
		alert(text);	
};

function inSize (event) {

		var width = Number(event.target.style.width.substring(0, event.target.style.width.length - 2));
		 event.target.style.width = (width + 5) + "px";
		 $("<p>Координаты мышки при нажатии: x = " + event.screenX + ", y - " + event.screenY + "</p>").insertAfter("#rectungle");

}
	$(document).ready(function() {
			$("#rectungle").bind("click", inSize);
			$(document).on("click", "p", function (){
				this.remove();		
			});
	});


	$(function() {

    $("#rectungle").hover(showHelp, hideHelp);

function showHelp() {

    var $text = $(this).attr('title');
    var $elem = $(this).parent();

    if(!$elem.find('.help').length) {
        $elem.append('<div class="col-sm-4 help"></div>');
        $elem.find('.help').text($text).animate({
            opacity: '1',
            },500);
    }
}

function hideHelp() {

    var $elem = $(this).parent().parent();

    $elem.find('.help').remove();
}

$('.btn-secondary').on('click', function(e) {
    e.preventDefault();
    if (!$('.help').length) {
    $('.form-group input').each(showHelp);
    }

});

});


$(document).ready(function() {
	$(document).on("click", "#add_comments", function(){
		var form = $("form[name='form']");
		form.css("display", "block");
		$("#add_comments").replaceWith(form);  //замена блоков
	});

	$(document).on("click", "input[name='send']", function() {
		var comment = $("textarea[name='comment']").val ();
		$("<p>" + comment + "</p>").appendTo("#comments");
	});
});


function hideComments() {
	$("#comments2").hide(1000, function () {
			$("#hide").hide();
			$("#show").show();
	});
}
function showComments() {
	$("#comments2").show(500, function () {
			$("#hide").show();
			$("#show").hide();
	});
}

$(document).ready(function() {
	$("#hide").bind ("click", hideComments);
	$("#show").bind ("click", showComments);
});


function hideComments2() {
	$("#comments3").slideUp(1000, function () {
			$("#hide2").hide();
			$("#show2").show();
	});
}
function showComments2() {
	$("#comments3").slideDown(500, function () {
			$("#hide2").show();
			$("#show2").hide();
	});
}

$(document).ready(function() {
	$("#hide2").bind ("click", hideComments2);
	$("#show2").bind ("click", showComments2);
});


function hideComments3() {
	$("#comments4").fadeOut(1000, function () {
			$("#hide3").hide();
			$("#show3").show();
	});
}
function showComments3() {
	$("#comments4").fadeIn(500, function () {
			$("#hide3").show();
			$("#show3").hide();
	});
}

$(document).ready(function() {
	$("#hide3").bind ("click", hideComments3);
	$("#show3").bind ("click", showComments3);
});

$(document).ready(function() {
	$("#imgbig").bind("click", function (event) {
		
		$(event.target).animate ({
			width: $(event.target).width()*10,
			height: $(event.target).height()*10,
		}, 3000);
	});
});


$(document).ready(function() {

	

	$("#addBlock").click (function () {
		var randName = GetNumber(1, 700);
		$('.article_5').append ("<div class='square " + randName +"'>" + randName + "</div>");

		$('.' + randName).css("background", "#" + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9)); // берем блок с класом с именем randName и применяем к немк Css

	});

	function GetNumber (min, max) {
		 return Math.floor(Math.random() * (max - min + 1)) + min;
	}
});


