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
}

function questionOne() {
  if (question === 1) {
    document.querySelector("p").textContent =
      "What Belongs to you But Others Use it more than you";
    document.querySelector(".opt-one").textContent = "Your Name";
    document.querySelector(".opt-two").textContent = "Your Wife";
    document.querySelector(".opt-three").textContent = "Your Money";
    document.querySelector(".opt-four").textContent = "Your Book";

    document.querySelector(".count").textContent = 1;

    answer = document.getElementsByTagName("button")[0];
	
  }
}

function questionTwo() {
  if (question === 2) {
    document.querySelector("p").textContent = "What has hands but cannot clap";
    document.querySelector(".opt-one").textContent = "A goat";
    document.querySelector(".opt-two").textContent = "A Clock";
    document.querySelector(".opt-three").textContent = "A Bird";
    document.querySelector(".opt-four").textContent = "A Scissors";

    document.querySelector(".count").textContent = 2;

    answer = document.getElementsByTagName("button")[1];
  }
}

function questionThree() {
  if (question === 3) {
    document.querySelector("p").textContent =
      "What gets wetter the more it dries";
    document.querySelector(".opt-one").textContent = "A Towel";
    document.querySelector(".opt-two").textContent = "A Sponge";
    document.querySelector(".opt-three").textContent = "A Bathub";
    document.querySelector(".opt-four").textContent = "A Toilet";

    document.querySelector(".count").textContent = 3;

    answer = document.getElementsByTagName("button")[0];
  }
}

function questionFour() {
  if (question === 4) {
    document.querySelector("p").textContent =
      "You can always do better Kudos to You";
    document.querySelector(".opt-one").textContent = "#Nelson";
    document.querySelector(".opt-two").textContent = "#Ejumedia";
    document.querySelector(".opt-three").textContent =
      "#Edu-Champs Programming hub";
    document.querySelector(".opt-four").textContent = "#Game Stars";

    document.querySelector(".count").textContent = 4;

    answer = document.getElementsByTagName("button")[0];
  }
}

function questionFive() {
  if (question === 5) {
    document.querySelector("p").textContent =
      "You can always do better Kudos to You";
    document.querySelector(".opt-one").textContent = "#Nelson";
    document.querySelector(".opt-two").textContent = "#Ejumedia";
    document.querySelector(".opt-three").textContent =
      "#Edu-Champs Programming hub";
    document.querySelector(".opt-four").textContent = "#Game Stars";

    document.querySelector(".count").textContent = 5;

    answer = document.getElementsByTagName("button")[0];
  }
}

function questionSix() {
  if (question === 6) {
    document.querySelector("p").textContent =
      "You can always do better Kudos to You";
    document.querySelector(".opt-one").textContent = "#Nelson";
    document.querySelector(".opt-two").textContent = "#Ejumedia";
    document.querySelector(".opt-three").textContent =
      "#Edu-Champs Programming hub";
    document.querySelector(".opt-four").textContent = "#Game Stars";
    document.querySelector(".count").textContent = 6;

    answer = document.getElementsByTagName("button")[0];
  }
}

function questionSeven() {
  if (question === 7) {
    document.querySelector("p").textContent =
      "You can always do better Kudos to You";
    document.querySelector(".opt-one").textContent = "#Nelson";
    document.querySelector(".opt-two").textContent = "#Ejumedia";
    document.querySelector(".opt-three").textContent =
      "#Edu-Champs Programming hub";
    document.querySelector(".opt-four").textContent = "#Game Stars";

    document.querySelector(".count").textContent = 7;
    answer = document.getElementsByTagName("button")[0];
  }
}

function questionEight() {
  if (question === 8) {
    document.querySelector("p").textContent = "8 better Kudos to You";
    document.querySelector(".opt-one").textContent = "#Nelson";
    document.querySelector(".opt-two").textContent = "#Ejumedia";
    document.querySelector(".opt-three").textContent =
      "#Edu-Champs Programming hub";
    document.querySelector(".opt-four").textContent = "#Game Stars";

    document.querySelector(".count").textContent = 8;

    answer = document.getElementsByTagName("button")[0];
  }
}

function questionNine() {
  if (question === 9) {
    document.querySelector("p").textContent =
      "9 can always do better Kudos to You";
    document.querySelector(".opt-one").textContent = "#Nelson";
    document.querySelector(".opt-two").textContent = "#Ejumedia";
    document.querySelector(".opt-three").textContent =
      "#Edu-Champs Programming hub";
    document.querySelector(".opt-four").textContent = "#Game Stars";

    document.querySelector(".count").textContent = 9;

    answer = document.getElementsByTagName("button")[0];
  }
}

function questionTen() {
  if (question === 10) {
    document.querySelector("p").textContent =
      "10 can always do better Kudos to You";
    document.querySelector(".opt-one").textContent = "#Nelson";
    document.querySelector(".opt-two").textContent = "#Ejumedia";
    document.querySelector(".opt-three").textContent =
      "#Edu-Champs Programming hub";
    document.querySelector(".opt-four").textContent = "#Game Stars";

    document.querySelector(".count").textContent = 10;

    answer = document.getElementsByTagName("button")[0];
  }
}

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
