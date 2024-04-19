document.body.onload = function(){
    setTimeout(showPage, 1200);
	$( ".load" ).mgGlitch({
		destroy : false,
	    glitch: true,
	    scale: true,
	    blend : true,
	    blendModeType : 'hue',
		glitch1TimeMin : 10
	});
}
  
function showPage() {
    document.getElementById("start").style.display = "none";
    document.getElementById("page").style.display = "block";
}
