function beat(img){
	var play=document.getElementById("musicPlay");
	
	if(play.paused){
		play.play();
		img.src="img/musicBtn.png"
	}else{
		play.pause();
		img.src="img/musicBtnOff.png"
	}
}
