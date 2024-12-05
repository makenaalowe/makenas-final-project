// Interests with related questions (with added personality)
const interests = [
  {
    name: "K-pop",
    image: "images/kpop-group.png",
    questions: [
      { question: "Which image screams 'K-idol energy'?", correctImage: "images/kpop-group.png" },
    ],
  },
  {
    name: "Cooking",
    image: "images/cooking.jpg",
    questions: [
      { question: "Which image makes your mouth water just by looking at it?", correctImage: "images/cooking.jpg" },
    ],
  },
  {
    name: "Gaming",
    image: "images/gaming.jpg",
    questions: [
      { question: "Which image would you pick for an epic gaming marathon?", correctImage: "images/gaming.jpg" },
    ],
  },
  {
    name: "Travel",
    image: "images/travel.jpg",
    questions: [
      { question: "Which image screams 'dream vacation destination'?", correctImage: "images/travel.jpg" },
    ],
  },
  {
    name: "Memes",
    image: "images/memes.jpeg",
    questions: [
      { question: "Which image represents a relatable meme?", correctImage: "images/memes.jpeg" },
    ],
  },
  {
    name: "Art",
    image: "images/art.jpg",
    questions: [
      { question: "Which image represents an artwork?", correctImage: "images/art.jpg" },
    ],
  },
  {
    name: "Sanrio",
    image: "images/sanrio.jpeg",
    questions: [
      { question: "Click the photo of a large group of characters photos.", correctImage: "images/sanrio.jpeg" },
    ],
  },
  {
    name: "Eating Food",
    image: "images/eating-food.png",
    questions: [
      { question: "Which image looks like a brunch food item?", correctImage: "images/eating-food.png" },
    ],
  },
  {
    name: "Plushies",
    image: "images/plushies.png",
    questions: [
      { question: "Which plushie looks soft to touch?", correctImage: "images/plushies.png" },
    ],
  },
  {
    name: "fanfiction",
    image: "images/wattpad.jpg",
    questions: [
      { question: "Which image represents an online activity to read?", correctImage: "images/wattpad.jpg" },
    ],
  },
];

// Game state
let correctQuestion = null;
let guessesLeft = 3;

// DOM elements
const categoryDisplay = document.getElementById("categoryDisplay");
const questionDisplay = document.getElementById("questionDisplay");
const itemsContainer = document.getElementById("itemsContainer");
const message = document.getElementById("message");

// Start the CAPTCHA game
function startCaptcha() {
  guessesLeft;
  //update guesses
  updatedGuessesLeftDisplay();


  // Shuffle the interests and pick one at random
  const shuffledInterests = [...interests].sort(() => Math.random() - 0.5);
  const chosenInterest = shuffledInterests[0];
  correctQuestion = chosenInterest.questions[0]; // Use the first question for now

  // Display the question
  questionDisplay.textContent = correctQuestion.question;

  // Display images, including the correct one and random others
  itemsContainer.innerHTML = ""; // Clear any previous content
  const shuffledImages = [
    correctQuestion.correctImage,
    ...shuffledInterests.slice(1, 9).map((i) => i.image), // Now getting 9 random images
  ].sort(() => Math.random() - 0.5);

  shuffledImages.forEach((imageSrc) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Option";
    img.className = "photo";
    img.addEventListener("click", () => validateCaptcha(imageSrc));
    itemsContainer.appendChild(img);
  });

  // Reset message
  message.textContent = "Click on the correct image to verify!";
}

// Validate the CAPTCHA
function validateCaptcha(selectedImage) {
  if (selectedImage === correctQuestion.correctImage) {
    message.textContent = "Verification successful!";
    message.style.color = "#4caf50"; // Success color
    startCaptcha();
  } else {
    guessesLeft = guessesLeft -1;
    //update state html
    if (guessesLeft == 0){
      alert("Ooops ran out of guesses!! Game RESTART")
    }
    message.textContent = "Verification failed! Try again.";
    message.style.color = "#f44336"; // Error color
  }
  
  // Disable further interactions
  // disableGrid();
}

// Disable all images after a selection
function disableGrid() {
  const images = document.querySelectorAll(".photo");
  images.forEach((img) => {
    img.style.pointerEvents = "none";
    img.style.opacity = "0.5";
  });
}

function updatedGuessesLeftDisplay(){
  const guessesLeftDisplay = document.getElementById("guessesLeft");
  guessesLeftDisplay.textContent ='Guesses Left: 3'
}
// note the counting down number is still not working 

// Start the CAPTCHA on page load
startCaptcha();


//credit from CHATGPT
