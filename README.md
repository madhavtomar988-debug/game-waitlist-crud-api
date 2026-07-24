# Game Waitlist CRUD API

A RESTful CRUD API built using Node.js and Express for managing a game waitlist with route parameters.

## Features

- Get all games
- Get a game by ID
- Add a new game
- Update a game by ID
- Delete a game by ID
- Input validation
- XSS input sanitization
- Empty-state handling
- 404 error handling
- Simulated analytics logging

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /games | Get all games |
| GET | /games/:id | Get game by ID |
| POST | /games | Add a new game |
| PUT | /games/:id | Update a game |
| DELETE | /games/:id | Delete a game |

## Run Locally

Install dependencies:

npm install

Start the server:

npm start

Development mode:

npm run dev

Server runs at:

http://localhost:3001

## Technologies

- Node.js
- Express.js
- ESLint
- Nodemon