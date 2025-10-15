# Quiz Challenge: Single-Page Web App

## 📝 Overview

This project is a simple, five-question trivia quiz built using pure HTML, CSS, and JavaScript. The application is implemented as a single HTML page with dynamic content switching, eliminating the need for separate navigation pages.

The quiz tests general knowledge and provides immediate feedback on the final score.

## ✨ Features

* **Single-Page Application (SPA) Flow:** Seamless transition between the Start Screen, Quiz Screen, and Results Screen without refreshing the page.

* **Dynamic Question Loading:** JavaScript loads questions and generates answer options dynamically from a structured data array.

* **Score Tracking:** The user's score is updated instantly upon submission of each answer.

* **Responsive Layout:** Designed to look good on various screen sizes (assuming basic Tailwind or flexible CSS is applied).

* **Replayability:** A "Try Again" button on the results screen resets the game state and relaunches the quiz.

## 🚀 Setup and Running the Application

Since this is a client-side application with no backend dependencies, setting up the quiz is very straightforward.

### Prerequisites

You only need a modern web browser (Chrome, Firefox, Safari, Edge, etc.).

### Steps to Run

1. **Save the files:** Ensure you have the following two files saved in the same directory:

   * `index.html` (The combined HTML structure)

   * `script.js` (The core quiz logic)

   * `style.css` (Your custom styles)

2. **Open in Browser:** Simply double-click on the `index.html` file. It will automatically open in your default web browser.

## 📂 Project Structure

| File Name | Description | 
 | ----- | ----- | 
| **`index.html`** | The main and only HTML file. It contains the structures for the Start Screen, the Quiz Screen, and the Results Screen, which are toggled by JavaScript. | 
| **`script.js`** | Contains the quiz data (`QUIZ_QUESTIONS`), state management, DOM manipulation, and the core functions (`startQuiz`, `loadQuestion`, `checkAnswer`, `showResults`) that drive the application logic. | 
| **`style.css`** | (Expected) Contains the styling for the application, defining colors, layout, and responsiveness. | 

## 🕹️ How to Play

1. **Start:** Click the **Start Quiz** button on the initial screen.

2. **Answer:** Select one radio button option for the current question.

3. **Submit:** Click **Submit Answer** to check your choice and advance to the next question.

4. **Results:** Once all 5 questions are answered, the Results Screen will appear, showing your final score.

5. **Replay:** Click **Try Again** to reset the game and start from the first question.
