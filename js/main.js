var winW = $(window).width();

//This is the mobile menu to open the tools
var mobileHead = $(".mobile-heading");
var mobileHeadA = new Array();
var mobileMenu = $(".mobile-menu");

//This is the close open to close the tools
var closeToolSec = $(".close-tools-sections");
var closeToolSecA = new Array();
var tools = $(".tools");

function fillArray(arrA, arr) {

	for(var i = 0; i < arr.length; i++) {

		arrA[i] = arr[i];

	}

}

function openMenu(winW, menuOA, menuO) {

	fillArray(menuOA, menuO);

	if(winW <= 425) {

		for(var i = 0; i < menuO.length; i++) {

			$(menuO[i]).click(function() {

				var n = menuOA.indexOf(this);
				$(mobileMenu[n]).css("margin-left", "-8em");

			});

		}

	} else if(winW >= 426 && winW <= 768) {

		for(var i = 0; i < menuO.length; i++) {

			$(menuO[i]).click(function() {

				var n = menuOA.indexOf(this);
				$(mobileMenu[n]).css("margin-left", "-8em");

			});

		}
		
	}

}

function closeTools(winW, closeTA, closeT) {

	fillArray(closeTA, closeT);

	if(winW <= 425) {

		for(var i = 0; i < closeT.length; i++) {

			$(closeT[i]).click(function() {

				var n = closeTA.indexOf(this);
				$(tools[n]).css("height", "3em");

			});

		}

	}

}

function closeSection(winW) {

	if(winW <= 425) {

		$("#back-button").click(function() {

			$("#mobile-tools-section").css("bottom", "100vh");

		});

	}

}

openMenu(winW, mobileHeadA, mobileHead);

closeTools(winW, closeToolSecA, closeToolSec);

closeSection(winW);

$(window).resize(function() {

	var winWR = $(window).width();
	var winHR = $(window).height();

	openMenu(winWR, mobileHeadA, mobileHead);

	closeTools(winWR, closeToolSecA, closeToolSec);

	closeSection(winWR);

});