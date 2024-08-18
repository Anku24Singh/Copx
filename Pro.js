// // Check if the user has already answered all the questions
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("questionsAnswered") === "true") {
        showTitleScreen();
    }
});

function nextQuestion(nextQuestionId) {
    // Hide the current question
    const currentQuestion = document.querySelector('.question-card:not([style*="display: none"])');
    currentQuestion.style.display = "none";
    
    // Show the next question
    const nextQuestion = document.getElementById(`question-${nextQuestionId}`);
    if (nextQuestion) {
        nextQuestion.style.display = "block";
    }
}

function navigateToNextPage() {
    // Mark that the user has answered all questions
    localStorage.setItem("questionsAnswered", "true");

    // Redirect to the title screen or another page
    window.location.href = "title_screen.html"; // Replace this with the desired URL
}

//Check if the user has already answered all the questions
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("questionsAnswered") === "true") {
        showTitleScreen();
    }
});

function nextQuestion(nextQuestionId) {
    // Hide the current question
    const currentQuestion = document.querySelector('.question-card:not([style*="display: none"])');
    currentQuestion.style.display = "none";
    
    // Show the next question
    const nextQuestion = document.getElementById(`question-${nextQuestionId}`);
    if (nextQuestion) {
        nextQuestion.style.display = "block";
    }
}

function showTitleScreen() {
    // Mark that the user has answered all questions
    // localStorage.setItem("questionsAnswered", "true");

    // Hide the question container and show the title screen
    // document.getElementById("question-container").style.display = "none";
    // document.getElementById("title-screen").style.display = "block";
    window.location.href = "title_screen.html";

}


// Commented out the part that checks if the user has already answered all the questions
// document.addEventListener("DOMContentLoaded", () => {
//     // if (localStorage.getItem("questionsAnswered") === "true") {
//     //     showTitleScreen();
//     // }
// });

// function nextQuestion(nextQuestionId) {
//     // Hide the current question
//     const currentQuestion = document.querySelector('.question-card:not([style*="display: none"])');
//     currentQuestion.style.display = "none";
    
//     // Show the next question
//     const nextQuestion = document.getElementById(`question-${nextQuestionId}`);
//     if (nextQuestion) {
//         nextQuestion.style.display = "block";
//     }
// }

// function showTitleScreen() {
//     // Mark that the user has answered all questions
//     // localStorage.setItem("questionsAnswered", "true");

//     // Hide the question container and show the title screen
//     document.getElementById("question-container").style.display = "none";
//     document.getElementById("title-screen").style.display = "block";
// }


// document.addEventListener("DOMContentLoaded", () => {
//     // Temporarily block the check that would skip to the title screen on reload
//     // The questions will appear every time the page is loaded
// });

// function nextQuestion(nextQuestionId) {
//     // Hide the current question
//     const currentQuestion = document.querySelector('.question-card:not([style*="display: none"])');
//     currentQuestion.style.display = "none";
    
//     // Show the next question
//     const nextQuestion = document.getElementById(`question-${nextQuestionId}`);
//     if (nextQuestion) {
//         nextQuestion.style.display = "block";
//     }
// }

// function showTitleScreen() {
//     // Mark that the user has answered all questions
//     // localStorage.setItem("questionsAnswered", "true");

//     // Hide the question container and show the title screen
//     // document.getElementById("question-container").style.display = "none";
//     // document.getElementById("title-screen").style.display = "block";
//     // Redirect to the title screen page
//     window.location.href = "title_screen.html";
// }


