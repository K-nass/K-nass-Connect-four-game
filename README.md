Connect Four Game (React + TypeScript)

A fully interactive Connect Four game built with React, TypeScript, and Tailwind CSS.
Two players take turns dropping colored markers into columns — the first to connect four in a row wins!

🎮 Demo

(Optional) Add a link here if you plan to host it (e.g. GitHub Pages or Vercel)

✨ Features

🎯 Two-player gameplay (Player 1 vs Player 2)

🧠 Win detection in all directions (horizontal, vertical, and diagonal)

🏆 Live score tracking using React Context API

🔄 Automatic board reset after each round

⚡ Built with React + TypeScript + Tailwind CSS

♻️ Clean, modular, and reusable component structure

🧩 Project Structure

src/
├── assets/
│   └── images/                # Player markers and icons
├── components/
│   ├── Board/                 # Main game board
│   │   ├── Board.tsx
│   │   ├── checkWin.ts        # Win detection logic
│   │   └── cell.ts            # Cell definitions
│   ├── Cell/                  # Individual grid cell component
│   ├── Marker/                # Floating marker preview
│   └── PlayerCard/            # Score and player info card
├── context/
│   └── winnerContext.tsx      # Context to track player scores
├── App.tsx                    # Root component
└── main.tsx                   # App entry point

🧠 Game Rules
Players alternate turns dropping colored markers into the board.
The marker will always fall to the lowest empty space in the selected column.
The first player to align four markers in a row (horizontally, vertically, or diagonally) wins.
After a win, the score updates and the board resets automatically.

🧰 Key Components
Board.tsx → Handles game logic, player turns, and rendering cells.
checkWin.ts → Determines when a player has connected four.
winnerContext.tsx → Stores and updates player scores globally.
PlayerCard.tsx → Displays player info and live score updates.
Marker.tsx → Shows the hovering marker above active column.

🚀 Future Improvements
Add sound effects and animations 🎵
Highlight winning cells ✨
Add player name input and match history 🧾
Add an option to manually restart the game 🔁
