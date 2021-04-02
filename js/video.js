var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video= document.querySelector("#player1");
    volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	let vol = document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	console.log("Play Video");
	document.getElementById("volume").innerHTML = video.volume * 100 + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});
document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.95;
	console.log("Video speed is " + video.playbackRate * 100 + "%");
});
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate /= 0.95;
	console.log("Video speed is " + video.playbackRate * 100 + "%");
});
document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime < video.duration -15){
		video.currentTime += 15
	}
	else{
		video.currentTime = 0
		console.log("Going back")
	}
});
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = 'Unmute';
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = 'Mute';
	}
});
var slider = document.getElementById("slider");
var output = document.getElementById("volume");


 slider.oninput = function() {
   output.innerHTML = slider.value + "%";
	 video.volume = slider.value / 100;
	 console.log(slider.value / 100);
 }

 document.querySelector("#vintage").addEventListener("click", function() {
 	 document.querySelector("video").classList.add('oldSchool');
 	 console.log("Style changed to old school");
  });
document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").classList.remove('oldSchool');
	console.log("Style changed to original");
 });
