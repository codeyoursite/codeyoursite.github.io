document.body.onload = function(){
	$( ".load" ).mgGlitch({
			destroy : false,
	        glitch: true,
	        scale: true,
	        blend : true,
	        blendModeType : 'hue',
		glitch1TimeMin : 10
	});
    setTimeout(showPage, 1200);
}
  
function showPage() {
    document.getElementById("start").style.display = "none";
    document.getElementById("page").style.display = "block";
}
