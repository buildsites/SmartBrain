var question = 1;
var answer = 1;
var score = 0;
questions();

// brain teasers question

function questions() {
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
}

function questionOne() {
  if (question === 1) {
    document.querySelector("p").textContent = "What is HTML";
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
    document.querySelector("p").textContent = "What Is CSS";
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
    document.querySelector("p").textContent = "What is JS";
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

    alert("Your score " + score);
  }
}

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
