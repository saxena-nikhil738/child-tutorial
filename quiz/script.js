const alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

document.getElementById("image1111").addEventListener("click", getClick);
document.getElementById("image2222").addEventListener("click", getClick);
document.getElementById("image3333").addEventListener("click", getClick);

function getRandomAlpha() {
  const shuffled = alpha.sort(() => 0.5 - Math.random());

  let selected = shuffled.slice(0, 3);

  return selected;
}
var x = getRandomAlpha();

var ran = Math.floor(Math.random() * 3 + 1);
var a = "../audio/onlyletters/" + x[ran - 1] + ".mp3";
var audio = new Audio(a);

var answerText = document.getElementById("answer");

function quizAns() {
  answerText.style.display = "none";

  x = getRandomAlpha();
  var str1 = "../images/alpha/" + x[0] + ".png";
  document.getElementById("image1111").src = str1;

  var str2 = "../images/alpha/" + x[1] + ".png";
  document.getElementById("image2222").src = str2;

  var str3 = "../images/alpha/" + x[2] + ".png";
  document.getElementById("image3333").src = str3;

  a = "../audio/onlyletters/" + x[ran - 1] + ".mp3";
  audio = new Audio(a);
  audio.loop = true;
  audio.play();
}

window.onload = quizAns();

function getClick() {
  audio.pause();
  answerText.style.display = "block";

  if (ran == this.id.substring(6, 7)) {
    document.getElementById("correct_image").src = "../images/correct.png";
    var c = "../audio/correct.mp3";
    var correct = new Audio(c);
    correct.play();

    // alert("You are Correct");
  } else {
    document.getElementById("correct_image").src = "../images/wrong.png";
    var w = "../audio/wrong.mp3";
    var wrong = new Audio(w);
    wrong.play();

    // alert("You are Wrong");
  }

  ran = Math.floor(Math.random() * 3 + 1);

  setTimeout(quizAns, 2500);
}
