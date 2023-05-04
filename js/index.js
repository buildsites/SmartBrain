// var themes = prompt ('Select a color theme to continue. Dark or Light?');

// if (themes == 'Dark'){
//   document.querySelector("#style").setAttribute("href", "darktheme.css");
// } else {
//   document.querySelector("#style").setAttribute("href", "styles.css");
// }

//color themes
//dark theme

function darkTheme() {
  document.querySelector("#style").setAttribute("href", "css/darktheme.css");
}

function lightTheme() {
  document.querySelector("#style").setAttribute("href", "css/lighttheme.css");
}

function goldTheme() {
  document.querySelector("#style").setAttribute("href", "css/goldtheme.css");
}

var question = 1;
var answer = 1;
var score = 0;
questions();

//////////// brain teasers question and options and all the functions behind the question\\\\\\\\\\\

function questions() {
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();
  questionEight();
  questionNine();
  questionTen();
  questionEleven();
}

function questionOne() {
  if (question === 1) {
    document.querySelector("p").textContent =
      "What Belongs to you But Others Use it more than you";
    document.querySelector(".hint-question").textContent =
      "What Belongs to you But Others Use it more than you";

    document.querySelector(".opt-one").textContent = "Your Name";
    document.querySelector(".opt-two").textContent = "Your Wife";
    document.querySelector(".opt-three").textContent = "Your Money";
    document.querySelector(".opt-four").textContent = "Your Book";

    document.querySelector(".hint-text").textContent =
      "It annoys you when you are trying to concentrate on something and someone keeps using it to disturb you";

    document.querySelector(".count").textContent = 1;

    answer = document.getElementsByTagName("button")[0];
  }
}

function questionTwo() {
  if (question === 2) {
    document.querySelector("p").textContent = "What has hands but cannot clap";
    document.querySelector(".hint-question").textContent =
      "What has hands but cannot clap";

    document.querySelector(".opt-one").textContent = "A goat";
    document.querySelector(".opt-two").textContent = "A Clock";
    document.querySelector(".opt-three").textContent = "A Bird";
    document.querySelector(".opt-four").textContent = "A Scissors";

    document.querySelector(".hint-text").textContent = "No Hint. Ask a friend";
    document.querySelector(".count").textContent = 2;

    answer = document.getElementsByTagName("button")[1];
  }
}

function questionThree() {
  if (question === 3) {
    document.querySelector("p").textContent =
      "What gets wetter the more it dries";
    document.querySelector(".hint-question").textContent =
      "What gets wetter the more it dries";

    document.querySelector(".opt-one").textContent = "A Towel";
    document.querySelector(".opt-two").textContent = "A Sponge";
    document.querySelector(".opt-three").textContent = "A Bathub";
    document.querySelector(".opt-four").textContent = "A Toilet";

    document.querySelector(".hint-text").textContent = "No Hint. Ask a friend";

    document.querySelector(".count").textContent = 3;

    answer = document.getElementsByTagName("button")[0];
  }
}

function questionFour() {
  if (question === 4) {
    document.querySelector("p").textContent =
      "First I am dried, then I am wet. The longer I swim, the more taste you get. What am I?";
    document.querySelector(".hint-question").textContent =
      "First I am dried, then I am wet. The longer I swim, the more taste you get. What am I?";

    document.querySelector(".opt-one").textContent = "Salt";
    document.querySelector(".opt-two").textContent = "Fish";
    document.querySelector(".opt-three").textContent = "Tea";
    document.querySelector(".opt-four").textContent = "Flour";

    document.querySelector(".hint-text").textContent = "No Hint. Ask a friend";

    document.querySelector(".count").textContent = 4;

    answer = document.getElementsByTagName("button")[2];
  }
}

function questionFive() {
  if (question === 5) {
    document.querySelector("p").textContent =
      "You're in a dark room with a candle, a wood, a stove and a lamp. You only have one match, so what do you light first?";
    document.querySelector(".hint-question").textContent =
      "You're in a dark room with a candle, a wood, a stove and a lamp. You only have one match, so what do you light first?";

    document.querySelector(".opt-one").textContent = "Candle";
    document.querySelector(".opt-two").textContent = "Wood Stove";
    document.querySelector(".opt-three").textContent = "Match";
    document.querySelector(".opt-four").textContent = "Gas Lamp";

    document.querySelector(".hint-text").textContent = "No Hint. Ask a friend";

    document.querySelector(".count").textContent = 5;

    answer = document.getElementsByTagName("button")[2];
  }
}

function questionSix() {
  if (question === 6) {
    document.querySelector("p").textContent =
      "What can you hold in your right hand, but never in your left hand";
    document.querySelector(".hint-question").textContent =
      "What can you hold in your right hand, but never in your left hand";

    document.querySelector(".opt-one").textContent = "Money";
    document.querySelector(".opt-two").textContent = "Pen";
    document.querySelector(".opt-three").textContent = "Left hand";
    document.querySelector(".opt-four").textContent = "Phone";

    document.querySelector(".hint-text").textContent = "No Hint. Ask a friend";

    document.querySelector(".count").textContent = 6;

    answer = document.getElementsByTagName("button")[2];
  }
}

function questionSeven() {
  if (question === 7) {
    document.querySelector("p").textContent =
      "I speak without a mouth and hear without ears. I have no body, but i come alive with wind. What am i";
    document.querySelector(".hint-question").textContent =
      "I speak without a mouth and hear without ears. I have no body, but i come alive with wind. What am i";

    document.querySelector(".opt-one").textContent = "Dust";
    document.querySelector(".opt-two").textContent = "Mouth";
    document.querySelector(".opt-three").textContent = "Ears";
    document.querySelector(".opt-four").textContent = "Echo";

    document.querySelector(".hint-text").textContent = "No Hint. Ask a friend";

    document.querySelector(".count").textContent = 7;

    answer = document.getElementsByTagName("button")[3];
  }
}

function questionEight() {
  if (question === 8) {
    document.querySelector("p").textContent =
      "If there are three apples and you take two, how many do you have?";
    document.querySelector(".hint-question").textContent =
      "If there are three apples and you take two, how many do you have?";

    document.querySelector(".opt-one").textContent = "One";
    document.querySelector(".opt-two").textContent = "Two";
    document.querySelector(".opt-three").textContent = "Three";
    document.querySelector(".opt-four").textContent = "Zero";

    document.querySelector(".hint-text").textContent = "No Hint. Ask a friend";

    document.querySelector(".count").textContent = 8;

    answer = document.getElementsByTagName("button")[1];
  }
}

function questionNine() {
  if (question === 9) {
    document.querySelector("p").textContent =
      "A is the brother of B, B is the brother of C. C is the Father of D. So how is D related to A?";
    document.querySelector(".hint-question").textContent =
      "A is the brother of B, B is the brother of C. C is the Father of D. So how is D related to A?";

    document.querySelector(".opt-one").textContent = "A is D's Nephew";
    document.querySelector(".opt-two").textContent = "A is D;s second cousin";
    document.querySelector(".opt-three").textContent = "A is D's uncle";
    document.querySelector(".opt-four").textContent = "A is D's brother in-law";

    document.querySelector(".hint-text").textContent = "No Hint. Ask a friend";

    document.querySelector(".count").textContent = 9;

    answer = document.getElementsByTagName("button")[2];
  }
}

function questionTen() {
  if (question === 10) {
    document.querySelector("p").textContent =
      "You're escaping a labryrinth, and there are three doors in front of you. The door on the left leads to a raging inferno. The door in the center leads to a deadly assassin. The door on the right leads to a lion that hasn't eaten in three months. Which door do you choose";
    document.querySelector(".hint-question").textContent =
      "You're escaping a labryrinth, and there are three doors in front of you. The door on the left leads to a raging inferno. The door in the center leads to a deadly assassin. The door on the right leads to a lion that hasn't eaten in three months. Which door do you choose";

    document.querySelector(".opt-one").textContent = "The door on the right";
    document.querySelector(".opt-two").textContent = "The door on the left";
    document.querySelector(".opt-three").textContent = "Just let him catch me";
    document.querySelector(".opt-four").textContent = "The door on the center";

    document.querySelector(".hint-text").textContent = "No Hint. Ask a friend";

    document.querySelector(".count").textContent = 10;

    answer = document.getElementsByTagName("button")[0];
  }
}

function questionEleven() {
  if (question === 11) {
    document.querySelector("p").textContent = score + "/10";
    document.querySelector(".display-options").style.display = "none";
    document.querySelector(".count").textContent = "score sheet";
    document.querySelector(".question-container").style.padding = "15px";
    document.querySelector(".try-again").textContent = "Try agian";
    document.querySelector(".next-level").textContent = "Next Level";
    document.querySelector(".try-again").setAttribute("href", "index.html");
    document.querySelector(".custom-pagination-class").style.display = "none";

    if (score <= 4) {
      document.querySelector(".score-image-lost").style.display = "block";
    } else if (score > 4 && score <= 7) {
      document.querySelector(".score-image-tried").style.display = "block";
    } else if (score > 7 && score <= 10) {
      document.querySelector(".score-image-smile").style.display = "block";
      document
        .querySelector(".next-level")
        .setAttribute("href", "programming.html");
    } else {
    }
  }
}

// function questionEleven() {
//   if (question === 11) {
//     document.querySelector("p").textContent = score + "/10";
//     document.querySelector(".display-options").style.display = "none";
//     document.querySelector(".count").textContent = "score sheet";
//     document.querySelector(".question-container").style.padding = "15px";
//     document.querySelector(".try-again").textContent = "Try agian";
//     document.querySelector(".next-level").textContent = "Next Level";
//     document.querySelector(".try-again").setAttribute("href", "index.html");
//     document.querySelector(".custom-pagination-class").style.display =
//       "none";

//   }
// }
//question page end here

//pagination code starts

function questionOnePage() {
  question = 1;
  questionOne();
}

function questionTwoPage() {
  question = 2;
  questionTwo();
}

function questionThreePage() {
  question = 3;
  questionThree();
}

function questionFourPage() {
  question = 4;
  questionFour();
}

function questionFivePage() {
  question = 5;
  questionFive();
}

function questionSixPage() {
  question = 6;
  questionSix();
}

function questionSevenPage() {
  question = 7;
  questionSeven();
}

function questionEightPage() {
  question = 8;
  questionEight();
}

function questionNinePage() {
  question = 9;
  questionNine();
}

function questionTenPage() {
  question = 10;
  questionTen();
}

//pagination code end

//buttons onclick functions

function firstButton() {
  if (answer === document.getElementsByTagName("button")[0]) {
    score++;
    nextQuestion();
  } else {
    nextQuestion();
  }
}

function secondButton() {
  if (answer === document.getElementsByTagName("button")[1]) {
    score++;
    nextQuestion();
  } else {
    nextQuestion();
  }
}

function thirdButton() {
  if (answer === document.getElementsByTagName("button")[2]) {
    score++;
    nextQuestion();
  } else {
    nextQuestion();
  }
}

function fourthButton() {
  if (answer === document.getElementsByTagName("button")[3]) {
    score++;
    nextQuestion();
  } else {
    nextQuestion();
  }
}

function nextQuestion() {
  question++;
  questions();
}

function previousQuestion() {
  question--;
  score--;
  questions();
}
// clickable button section to go to the next question and to score if it was the option buttons that were clicked ends here\\\\\\\\
