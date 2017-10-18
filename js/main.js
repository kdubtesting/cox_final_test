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

			$("#single-date-pre").css("font-size", fontTextP + "px");
			$("#first-date-pre").css("font-size", fontTextP + "px");
			$("#between-text-pre").css("font-size", fontTextP + "px");
			$("#second-date-pre").css("font-size", fontTextP + "px");

			if(fontTextP <= 35) {

				$(fontSizeText[1]).html(fontTextP);

			}

		}

		if(n == 3) {

			var fontText = $(fontSizeText[1]).html();

			var fontTextP = parseInt(fontText);

			fontTextP--;

			$("#single-date-pre").css("font-size", fontTextP + "px");
			$("#first-date-pre").css("font-size", fontTextP + "px");
			$("#between-text-pre").css("font-size", fontTextP + "px");
			$("#second-date-pre").css("font-size", fontTextP + "px");

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
	
	$("#single-date-pre").css("display", "block");
	$("#multiple-date-setup").css("display", "none");

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

	$("#single-date-pre").css("display", "none");
	$("#multiple-date-setup").css("display", "block");


});

//This will change the text for the first date editor
$("#first-date-editor").keyup(function() {

	var textChange = $(this).val();
	$("#first-date-pre").html(textChange);

});

//This is the between text for the multiple date
$("#bet-text-editor").keyup(function() {

	var textChange = $(this).val();
	$("#between-text-pre").html(textChange);

});

//This is the text for the second date editor
$("#second-date-editor").keyup(function() {

	var textChange = $(this).val();
	$("#second-date-pre").html(textChange);

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

//This is the text transform editor
var borderCheck = $(".border-check");
var borderCheckA = new Array();
var noBorder = $(".no-border");
var noBorderA = new Array();
var capLock = $(".caps-lock");
var capLockA = new Array();
var capUnlock = $(".caps-unlock");
var capUnlockA = new Array();
var normalFont = $(".normal-font");
var normalFontA = new Array();
var thin = $(".thin");
var thinA = new Array();
var bold = $(".bold");
var boldA = new Array();
var italic = $(".italic");
var italicA = new Array();
var normalWeight = $(".normal-weight");
var normalWeightA = new Array();

for(var i = 0; i < borderCheck.length; i++) {

	borderCheckA[i] = borderCheck[i];
	noBorderA[i] = noBorder[i];
	capLockA[i] = capLock[i];
	capUnlockA[i] = capUnlock[i];
	normalFontA[i] = normalFont[i];
	thinA[i] = thin[i];
	boldA[i] = bold[i];
	italicA[i] = italic[i];
	normalWeightA[i] = normalWeight[i];

}

for(var i = 0; i < borderCheck.length; i++) {

	$(borderCheck[i]).click(function() {

		var n = borderCheckA.indexOf(this);

		$(borderCheck[n]).css("background-color", "#484848");
		$(borderCheck[n]).css("color", "#f3f3f3");

		$(noBorder[n]).css("background-color", "transparent");
		$(noBorder[n]).css("color", "#484848");

		if(n == 0) {

			$("#title-pre").css("border", "2px solid #fff");
			$("#text-transform-demo").css("border", "2px solid #fff");

		} else if(n == 1) {

			$("#single-date-setup").css("border", "2px solid #fff");
			$("#date-transform-demo").css("border", "2px solid #fff");

		}

	});

}

for(var i = 0; i < noBorder.length; i++) {

	$(noBorder[i]).click(function() {

		var n = noBorderA.indexOf(this);

		$(noBorder[n]).css("background-color", "#484848");
		$(noBorder[n]).css("color", "#f3f3f3");

		$(borderCheck[n]).css("background-color", "transparent");
		$(borderCheck[n]).css("color", "#484848");

		if(n == 0) {

			$("#title-pre").css("border", "2px solid transparent");
			$("#text-transform-demo").css("border", "2px solid transparent");

		} else if(n == 1) {

			$("#single-date-setup").css("border", "2px solid transparent");
			$("#date-transform-demo").css("border", "2px solid transparent");

		}

	});

}

for(var i = 0; i < capLock.length; i++) {

	$(capLock[i]).click(function() {

		var n = capLockA.indexOf(this);

		$(capLock[n]).css("background-color", "#484848");
		$(capLock[n]).css("color", "#f3f3f3");

		$(normalFont[n]).css("background-color", "trasparent");
		$(normalFont[n]).css("color", "#484848");

		$(capUnlock[n]).css("background-color", "transparent");
		$(capUnlock[n]).css("color", "#484848");

		if(n == 0) {

			$("#title-pre").css("text-transform", "uppercase");
			$("#text-transform-demo").css("text-transform", "uppercase");

		} else if(n == 1) {

			$("#single-date-setup").css("text-transform", "uppercase");
			$("#date-transform-demo").css("text-transform", "uppercase");

		}

	});

}

for(var i = 0; i < capUnlock.length; i++) {

	$(capUnlock[i]).click(function() {

		var n = capUnlockA.indexOf(this);

		$(capUnlock[n]).css("background-color", "#484848");
		$(capUnlock[n]).css("color", "#f3f3f3");

		$(normalFont[n]).css("background-color", "transparent");
		$(normalFont[n]).css("color", "#484848");

		$(capLock[n]).css("background-color", "transparent");
		$(capLock[n]).css("color", "#484848");

		if(n == 0) {

			$("#title-pre").css("text-transform", "lowercase");
			$("#text-transform-demo").css("text-transform", "lowercase");

		} else if(n == 1) {

			$("#single-date-setup").css("text-transform", "lowercase");
			$("#date-transform-demo").css("text-transform", "lowercase");

		}

	});

}

for(var i = 0; i < normalFont.length; i++) {

	$(normalFont[i]).click(function() {

		var n = normalFontA.indexOf(this);

		$(normalFont[n]).css("background-color", "#484848");
		$(normalFont[n]).css("color", "#f3f3f3");

		$(capUnlock[n]).css("background-color", "transparent");
		$(capUnlock[n]).css("color", "#484848");

		$(capLock[n]).css("background-color", "transparent");
		$(capLock[n]).css("color", "#484848");

		if(n == 0) {

			$("#title-pre").css("text-transform", "none");
			$("#text-transform-demo").css("text-transform", "none");

		} else if(n == 1) {

			$("#single-date-setup").css("text-transform", "none");
			$("#date-transform-demo").css("text-transform", "none");

		}

	});

}

for(var i = 0; i < thin.length; i++) {

	$(thin[i]).click(function() {

		var n = thinA.indexOf(this);

		$(thin[n]).css("background-color", "#484848");
		$(thin[n]).css("color", "#f3f3f3");

		$(bold[n]).css("background-color", "transparent");
		$(bold[n]).css("color", "#484848");

		$(italic[n]).css("background-color", "transparent");
		$(italic[n]).css("color", "#484848");

		$(normalWeight[n]).css("background-color", "transparent");
		$(normalWeight[n]).css("color", "#484848");

		if(n == 0) {

			$("#title-pre").css("font-weight", "lighter");
			$("#title-pre").css("font-style", "normal");
			$("#text-transform-demo").css("font-weight", "lighter");
			$("#text-transform-demo").css("font-style", "normal");

		} else if(n == 1) {

			$("#single-date-setup").css("font-weight", "lighter");
			$("#single-date-setup").css("font-style", "normal");
			$("#date-transform-demo").css("font-weight", "lighter");
			$("#date-transform-demo").css("font-style", "normal");

		}

	});

}

for(var i = 0; i < bold.length; i++) {

	$(bold[i]).click(function() {

		var n = boldA.indexOf(this);

		$(thin[n]).css("background-color", "transparent");
		$(thin[n]).css("color", "#484848");

		$(bold[n]).css("background-color", "#484848");
		$(bold[n]).css("color", "#f3f3f3");

		$(italic[n]).css("background-color", "transparent");
		$(italic[n]).css("color", "#484848");

		$(normalWeight[n]).css("background-color", "transparent");
		$(normalWeight[n]).css("color", "#484848");

		if(n == 0) {

			$("#title-pre").css("font-weight", "bold");
			$("#title-pre").css("font-style", "normal");
			$("#text-transform-demo").css("font-weight", "bold");
			$("#text-transform-demo").css("font-style", "normal");

		} else if(n == 1) {

			$("#single-date-setup").css("font-weight", "bold");
			$("#single-date-setup").css("font-style", "normal");
			$("#date-transform-demo").css("font-weight", "bold");
			$("#date-transform-demo").css("font-style", "normal");

		}

	});

}

for(var i = 0; i < italic.length; i++) {

	$(italic[i]).click(function() {

		var n = italicA.indexOf(this);

		$(thin[n]).css("background-color", "transparent");
		$(thin[n]).css("color", "#484848");

		$(bold[n]).css("background-color", "transparent");
		$(bold[n]).css("color", "#484848");

		$(italic[n]).css("background-color", "#484848");
		$(italic[n]).css("color", "#f3f3f3");

		$(normalWeight[n]).css("background-color", "transparent");
		$(normalWeight[n]).css("color", "#484848");

		if(n == 0) {

			$("#title-pre").css("font-style", "italic");
			$("#text-transform-demo").css("font-style", "italic");

		} else if(n == 1) {

			$("#single-date-setup").css("font-style", "italic");
			$("#date-transform-demo").css("font-style", "italic");

		}

	});

}

for(var i = 0; i < normalWeight.length; i++) {

	$(normalWeight[i]).click(function() {

		var n = normalWeightA.indexOf(this);

		$(thin[n]).css("background-color", "transparent");
		$(thin[n]).css("color", "#484848");

		$(bold[n]).css("background-color", "transparent");
		$(bold[n]).css("color", "#484848");

		$(italic[n]).css("background-color", "transparent");
		$(italic[n]).css("color", "#484848");

		$(normalWeight[n]).css("background-color", "#484848");
		$(normalWeight[n]).css("color", "#f3f3f3");

		if(n == 0) {

			$("#title-pre").css("font-weight", "normal");
			$("#title-pre").css("font-style", "normal");
			$("#text-transform-demo").css("font-weight", "normal");
			$("#text-transform-demo").css("font-style", "normal");

		} else if(n == 1) {

			$("#single-date-setup").css("font-weight", "normal");
			$("#single-date-setup").css("font-style", "normal");
			$("#date-transform-demo").css("font-weight", "normal");
			$("#date-transform-demo").css("font-style", "normal");

		}

	});

}

//This will close the entire tool section
$("#back-button").click(function() {

	$(this).css("display", "none");
	$("#mobile-tools-section").css("bottom", "100vh");
	$(".specific-tools-section").css("display", "none");

});

//This will close the entire editor
var menuIcon = $(".menu-icon");
var menuIconA = new Array();

for(var i = 0; i < menuIcon.length; i++) {
	menuIconA[i] = menuIcon[i];
}

for(var i = 0; i < menuIcon.length; i++) {

	$(menuIcon[i]).click(function() {

		var n = menuIconA.indexOf(this);

		if(n == 0) {

			$("#menu-options-mobile").css("bottom", "-3em");
			$("#mobile-tools-section").css("bottom", "100vh");
			$("#main-menu-mobile").css("bottom", "100vh");

		}

	});

}

//This will open the individual tools
var mobileMenu = $(".mobile-menu");
var mobileHeading = $(".mobile-heading");
var mobileHeadingA = new Array();
var closeSection = $(".close-section");
var closeSectionA = new Array();
var toolOpenSection = $(".tool-open-section");
var toolOpenSectionA = new Array();

var specificToolSection = $(".specific-tools-section");

for(var i = 0; i < mobileHeading.length; i++) {
	mobileHeadingA[i] = mobileHeading[i];
	closeSectionA[i] = closeSection[i];
	toolOpenSectionA[i] = toolOpenSection[i];
}

for(var i = 0; i < mobileHeading.length; i++) {

	$(mobileHeading[i]).click(function() {

		var n = mobileHeadingA.indexOf(this);

		$(mobileMenu[n]).css("margin-left", "-8em");

	});

}

for(var i = 0; i < toolOpenSection.length; i++) {

	$(toolOpenSection[i]).click(function() {

		var n = toolOpenSectionA.indexOf(this);

		$("#mobile-tools-section").css("bottom", "2.5em");
		$("#back-button").css("display", "block");
		$(specificToolSection[n]).css("display", "block");

	});

}

for(var i = 0; i < closeSection.length; i++) {

	$(closeSection[i]).click(function() {

		var n = closeSectionA.indexOf(this);

		$(mobileMenu[n]).css("margin-left", "0px");

	});

}

//This will close each of the independent sections
var closeToolsSections = $(".close-tools-sections");
var closeToolsSectionsA = new Array();
var tools = $(".tools");

for(var i = 0; i < closeToolsSections.length; i++) {
	closeToolsSectionsA[i] = closeToolsSections[i];
}

for(var i = 0; i < closeToolsSections.length; i++) {

	$(closeToolsSections[i]).click(function() {

		var n = closeToolsSectionsA.indexOf(this);
		$(tools[n]).css("height", "3em");

	});

}

//This will open each independent section
var headSection = $(".head-section");
var headSectionA = new Array();

for(var i = 0; i < headSection.length; i++) {
	headSectionA[i] = headSection[i];
}

for(var i = 0; i < headSection.length; i++) {

	$(headSection[i]).click(function() {

		var n = headSectionA.indexOf(this);
		$(tools[n]).css("height", "auto");

	});

}









