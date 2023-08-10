var letterClassName = "letter-a";
for (var i = 1; i <= 9; i += 1) {
  document.getElementById(i).addEventListener("click", playAudio);
}

const alphaImages = {
  1: "apple.jfif",
  2: "baseball.jpg",
  3: "clock.png",
  4: "donkey.jfif",
  5: "elephant.jpg",
  6: "father.jfif",
  7: "grandmother.jfif",
  8: "hungry.jfif",
  9: "internet.jfif",
};

function playAudio() {
  //change image

  var x = this.id;

  var str22 = "../images/counting/" + this.id + ".png";

  document.getElementById("image2222").src = str22;

  var str = "../images/alpha/" + this.id + ".png";

  document.getElementById("image1111").src = str;

  var a = "../audio/sounds/" + this.id + ".mp3";
  var audio = new Audio(a);
  audio.play();
}
