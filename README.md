# QR Escape Room

**An engaging and interactive trivia game based on QR codes.**

## Overview

QR Escape Room is a web-based application that challenges players to answer trivia questions unlocked through scanning QR codes. Designed to mimic the exciting nature of escape rooms, players must answer the questions in sequence, ensuring they're engaged and challenged every step of the way.

## Features

- **QR Code Scanning:** Seamlessly scan QR codes to unveil trivia questions.
- **Multiple Choice Questions:** Engage with diverse questions with multiple choice answers.
- **Linear Progression:** Ensures players must answer questions in order to move to the next.
- **Feedback System:** Instant visual feedback on whether the answer was correct or incorrect.
- **Completion Screen:** A rewarding screen for players who manage to complete all questions.

## Installation and Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/morigoll/qr-escape-room.git
   ```

2. Navigate to the project directory and install all the required dependencies:

   ```bash
   cd qr-escape-room
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open a web browser and navigate to `http://localhost:3000` to access the application.

## Tech Stack

- **Backend:** Node.js and Express for creating the server.
- **Frontend:** EJS (Embedded JavaScript templates) for rendering views.
- **QR Scanning:** ZXing for seamless QR code scanning.

## Roadmap

### Current Version: 1.0.0

Release Date: 04/10/2023

#### Key Features

- QR code scanning.
- Multiple choice questions.
- Linear question progression.
- Instant feedback system.
- Completion screen for players who complete all questions.

### Next Version: 1.1.0

Estimated Release Date: Unestimated

#### Planned Features

- **Difficulty Levels:** Introduction of questions with varying difficulty levels.
- **Scoring System:** Implementation of a scoring system based on answer speed and accuracy.
- **Improved Design:** Interface upgrade to enhance the player experience.

### Future Versions

#### Version 2.0.0 - Estimated Release Date: Unestimated

- **User Registration:** System to sign up and log in, allowing tracking of time taken to solve the trivia.
- **Team Mode:** Option to play the trivia individually or as a team.
- **Admin Panel:** Interface for administrators to modify questions and answers.
- **Leaderboard:** Display of player scores and times to promote competition.

#### Version 2.1.0 - Estimated Release Date: Unestimated

- **Achievements and Rewards:** Introduction of achievements based on player performance.
- **Additional Languages:** Support for multiple languages in questions and user interface.
- **Enhanced QR Integrations:** Expansion of QR functionality to bring new forms of interaction and challenge.

## Contributing

We welcome contributions to QR Escape Room! If you're interested in enhancing its features or fixing bugs, please:

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes in your branch.
4. Create a pull request.

For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
