var winW = $(window).width();

var leftSide = $(".left-side-tools");

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

		if(n == 2) {

			var fontText = $(fontSizeText[1]).html();

			var fontTextP = parseInt(fontText);

			fontTextP++;

			//$("#title-pre").css("font-size", fontTextP + "px");

			if(fontTextP <= 35) {

				$(fontSizeText[1]).html(fontTextP);

			}

		}

		if(n == 3) {

			var fontText = $(fontSizeText[1]).html();

			var fontTextP = parseInt(fontText);

			fontTextP--;

			//$("#button-pre").css("font-size", fontTextP + "px");

			if(fontTextP >= 10) {

				$(fontSizeText[1]).html(fontTextP);

			}

		}

		if(n == 4) {

			var fontText = $(fontSizeText[2]).html();

			var fontTextP = parseInt(fontText);

			fontTextP++;

			//$("#title-pre").css("font-size", fontTextP + "px");

			if(fontTextP <= 35) {

				$(fontSizeText[2]).html(fontTextP);

			}

		}

		if(n == 5) {

			var fontText = $(fontSizeText[2]).html();

			var fontTextP = parseInt(fontText);

			fontTextP--;

			//$("#button-pre").css("font-size", fontTextP + "px");

			if(fontTextP >= 10) {

				$(fontSizeText[2]).html(fontTextP);

			}

		}

		if(n == 6) {

			var fontText = $(fontSizeText[3]).html();

			var fontTextP = parseInt(fontText);

			fontTextP++;

			$("#button-pre").css("font-size", fontTextP + "px");

			if(fontTextP <= 35) {

				$(fontSizeText[3]).html(fontTextP);

			}

		}

		if(n == 7) {

			var fontText = $(fontSizeText[3]).html();

			var fontTextP = parseInt(fontText);

			fontTextP--;

			$("#button-pre").css("font-size", fontTextP + "px");

			if(fontTextP >= 10) {

				$(fontSizeText[3]).html(fontTextP);

			}

		}

	});

}

//These are the date setup buttons
$("#single-date").click(function() {

	$(this).css("background-color", "#484848");
	$(this).css("color", "#f3f3f3");

	$("#multiple-dates").css("background-color", "transparent");
	$("#multiple-dates").css("color", "#484848");

	var leftSideChild = $(leftSide[1]).children();

	$(leftSideChild[2]).css("display", "block");

	$(leftSideChild[3]).css("display", "none");
	$(leftSideChild[4]).css("display", "none");
	$(leftSideChild[5]).css("display", "none");
	

});

$("#multiple-dates").click(function() {

	$(this).css("background-color", "#484848");
	$(this).css("color", "#f3f3f3");

	$("#single-date").css("background-color", "transparent");
	$("#single-date").css("color", "#484848");

	var leftSideChild = $(leftSide[1]).children();

	$(leftSideChild[2]).css("display", "none");
	
	$(leftSideChild[3]).css("display", "block");
	$(leftSideChild[4]).css("display", "block");
	$(leftSideChild[5]).css("display", "block");

});

