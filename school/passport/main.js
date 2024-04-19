document.body.onload = function(){
    setTimeout(showPage, 1200);
	$( ".glitch-img" ).mgGlitch({
	  destroy : false,
          glitch: true,
          scale: true,
          blend : true, 
          blendModeType : 'hue'
	});
}
  
function showPage() {
    document.getElementById("start").style.display = "none";
    document.getElementById("page").style.display = "block";
}
