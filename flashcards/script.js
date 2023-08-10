var letterClassName = "letter-a";
for (var i = 97; i <= 122; i += 1) {
  document
    .getElementById(String.fromCharCode(i))
    .addEventListener("click", playAudio);
}

const alphaImages = {
  a: "apple.jfif",
  b: "baseball.jpg",
  c: "clock.png",
  d: "donkey.jfif",
  e: "elephant.jpg",
  f: "father.jfif",
  g: "grandmother.jfif",
  h: "hungry.jfif",
  i: "internet.jfif",
  j: "justice.png",
  k: "kangaroo.png",
  l: "london.jfif",
  m: "monkey.jfif",
  n: "norway.jpg",
  o: "overtime.png",
  p: "pillow.jfif",
  q: "question.jfif",
  r: "rabbit.jfif",
  s: "superman.jfif",
  t: "telephone.jfif",
  u: "underwear.jfif",
  v: "vaccinated.jfif",
  w: "www.png",
  x: "xylophone.jfif",
  y: "yogurt.jfif",
  z: "zebra.jfif",
};

function playAudio() {
  //change image

  var x = this.id;

  var str22 = "../images/flash-cards/flash-cards/" + alphaImages[x];

  document.getElementById("image2222").src = str22;

  var str = "../images/alpha/" + this.id + ".png";

  document.getElementById("image1111").src = str;

  var a = "../audio/sounds/" + this.id + ".mp3";
  var audio = new Audio(a);
  audio.play();
}
