document.getElementById("num-1").addEventListener("click", playAudio);
document.getElementById("num-2").addEventListener("click", playAudio);
document.getElementById("num-3").addEventListener("click", playAudio);
document.getElementById("num-4").addEventListener("click", playAudio);
document.getElementById("num-5").addEventListener("click", playAudio);
document.getElementById("num-6").addEventListener("click", playAudio);
document.getElementById("num-7").addEventListener("click", playAudio);
document.getElementById("num-8").addEventListener("click", playAudio);
document.getElementById("num-9").addEventListener("click", playAudio);
document.getElementById("num-0").addEventListener("click", playAudio);

function playAudio() {
  var a = "../audio/sounds/" + this.id.substring(4, 5) + ".mp3";
  var audio = new Audio(a);
  audio.play();
}
