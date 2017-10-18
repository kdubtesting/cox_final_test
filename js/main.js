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

//This changes the text of the single date
$("#single-date-editor").keyup(function() {

	var textChange = $(this).val();

	$("#single-date-pre").html(textChange);

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

//This is to move the font selectors
var leftFontClick = $(".left-font-click");
var rightFontClick = $(".right-font-click");
var inFontList = $(".in-font-list");
var titleFamilyArea = $(".title-family-area");
var fonts = $(".fonts");

function firstFontChange(i) {

	if(i >= 0 && i < 9) {

		$(rightFontClick[0]).click(function() {

			if(i < 9) {

				$(inFontList[0]).css("margin-left", "-=90vw");
				i++;
				var fontFamilyChange = $(fonts[i]).css("font-family");
				$(titleFamilyArea[0]).css("font-family", fontFamilyChange);

			}

		});

	}

	if(i < 9 && i >= 0) {

		$(leftFontClick[0]).click(function() {

			if(i > 0) {

				$(inFontList[0]).css("margin-left", "+=90vw");
				i--;
				var fontFamilyChange = $(fonts[i]).css("font-family");
				$(titleFamilyArea[0]).css("font-family", fontFamilyChange);

			}

		});

	}

}

function secondFontChange(i) {

	if(i >= 0 && i < 9) {

		$(rightFontClick[1]).click(function() {

			if(i < 9) {

				$(inFontList[1]).css("margin-left", "-=90vw");
				i++;
				var fontFamilyChange = $(fonts[i]).css("font-family");
				$(titleFamilyArea[1]).css("font-family", fontFamilyChange);

			}

		});

	}

	if(i < 9 && i >= 0) {

		$(leftFontClick[1]).click(function() {

			if(i > 0) {

				$(inFontList[1]).css("margin-left", "+=90vw");
				i--;
				var fontFamilyChange = $(fonts[i]).css("font-family");
				$(titleFamilyArea[1]).css("font-family", fontFamilyChange);

			}

		});

	}

}

function thirdFontChange(i) {

	if(i >= 0 && i < 9) {

		$(rightFontClick[2]).click(function() {

			if(i < 9) {

				$(inFontList[2]).css("margin-left", "-=90vw");
				i++;
				var fontFamilyChange = $(fonts[i]).css("font-family");
				$(titleFamilyArea[2]).css("font-family", fontFamilyChange);

			}

		});

	}

	if(i < 9 && i >= 0) {

		$(leftFontClick[2]).click(function() {

			if(i > 0) {

				$(inFontList[2]).css("margin-left", "+=90vw");
				i--;
				var fontFamilyChange = $(fonts[i]).css("font-family");
				$(titleFamilyArea[2]).css("font-family", fontFamilyChange);

			}

		});

	}

}

function fourthFontChange(i) {

	if(i >= 0 && i < 9) {

		$(rightFontClick[3]).click(function() {

			if(i < 9) {

				$(inFontList[3]).css("margin-left", "-=90vw");
				i++;
				var fontFamilyChange = $(fonts[i]).css("font-family");
				$(titleFamilyArea[3]).css("font-family", fontFamilyChange);

			}

		});

	}

	if(i < 9 && i >= 0) {

		$(leftFontClick[3]).click(function() {

			if(i > 0) {

				$(inFontList[3]).css("margin-left", "+=90vw");
				i--;
				var fontFamilyChange = $(fonts[i]).css("font-family");
				$(titleFamilyArea[3]).css("font-family", fontFamilyChange);

			}

		});

	}

}

firstFontChange(0);
secondFontChange(0);
thirdFontChange(0);
fourthFontChange(0);

