var winW = $(window).width();

//This is the mobile menu to open the tools
var mobileHead = $(".mobile-heading");
var mobileHeadA = new Array();
var mobileMenu = $(".mobile-menu");

//This will change the text for the convention title
$("#title-editor").keyup(function() {

	var textChange = $(this).val();

	$("#title-pre").html(textChange);
});

$("#button-text").keyup(function() {

	var textChange = $(this).val();

	$("#button-pre").html(textChange);

});


//This is the font size editor
var fontButton = $(".font-button")
var fontButtonA = new Array();
var fontSizeText = $(".font-size-text");

for(var i = 0; i < fontButton.length; i++) {

	fontButtonA[i] = fontButton[i];

}

for(var i = 0; i < fontButton.length; i++) {

	$(fontButton[i]).click(function() {

		var n = fontButtonA.indexOf(this);

		if(n == 0) {

			var fontText = $(fontSizeText[0]).html();

			var fontTextP = parseInt(fontText);

			fontTextP++;

			$("#title-pre").css("font-size", fontTextP + "px");

			if(fontTextP <= 35) {

				$(fontSizeText[0]).html(fontTextP);

			}

		}

		if(n == 1) {

			var fontText = $(fontSizeText[0]).html();

			var fontTextP = parseInt(fontText);

			fontTextP--;

			$("#title-pre").css("font-size", fontTextP + "px");

			if(fontTextP >= 10) {

				$(fontSizeText[0]).html(fontTextP);

			}

		}

	});

}

