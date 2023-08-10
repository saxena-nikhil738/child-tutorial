for (var i = 97; i <= 122; i += 1) {
  var k = "letter-s" + String.fromCharCode(i);
  document.getElementById(k).addEventListener("click", playAudio);
}
function playAudio() {
  var a = "../audio/onlyletters/" + this.id.substring(8, 9) + ".mp3";
  var audio = new Audio(a);
  audio.play();
}
