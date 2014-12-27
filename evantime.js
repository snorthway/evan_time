function evanTime() {
	var bodyCSS = {
		"background": "url(http://giant.gfycat.com/RichUglyBarnowl.gif) repeat-y center center",
		"background-size": "contain"	
	}

	function convertBackground(elementArray) {
		elementArray.each(function(){
			if (!!($(this).css("background"))) {
				var bg = $(this).css("background-color");
				color = bg.substring(bg.indexOf("(")+1, bg.indexOf(")")).split(",");
				var r = color[0];
				var g = color[1];
				var b = color[2];
				var a;

				if (!!(color[3])) {
					if (!$(this).text().trim().length){
						a = 0;
					} else {
						a = color[3];
					}
				} else {
					if (!$(this).text().trim().length){
						a = 0;
					} else {
						a = 0.5;
					}
				}
				
				$(this).css("background-color", "rgba("+r+", "+g+", "+b+", "+a+")");
			}
		});
	}

	$("body").css(bodyCSS);
	convertBackground($("body").find("*"));
};

evanTime();