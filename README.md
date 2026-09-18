# MERN Stack Lab Activity — Student Notes CRUD Micro-App

## Student Details
- Name: Giri Purna Chandra Nukala
- Student ID: 2026201002
- GitHub Repository:https://github.com/chandunukala/notes_app.git

## Tech Stack
- MongoDB
- Mongoose
- Express.js
- React + Vite
- Axios
- Node.js

## Project Structure
- `server/` — Express + MongoDB backend
- `client/` — React frontend
- `screenshots/` — required visual proof

## Prerequisites
- Node.js installed
- MongoDB running locally on port 27017

## Database
The application connects to:

`mongodb://localhost:27017/notes_db`

## Backend Setup
```bash
cd server
npm install
npm start
```

The Express server runs on port 5000.

## Frontend Setup
Open another terminal:

```bash
cd client
npm install
npm run dev
```

The Vite development server runs on port 5173.

## REST Endpoints
- `POST /api/notes` — create a note
- `GET /api/notes` — retrieve all notes, newest first
- `DELETE /api/notes/:id` — delete a note

## Verification
Before submitting:
1. Verify all three endpoints using Postman, Thunder Client, or curl.
2. Open the React application in the browser.
3. Create at least two notes.
4. Capture `screenshots/ui-preview.png` showing at least two notes.
5. Delete one note and capture `screenshots/delete-action.png` with the browser DevTools Network tab showing the successful DELETE request with HTTP 200 OK.

## Submission
Do not include `node_modules/` or `dist/` in the ZIP.
Create the final archive using the required filename:

`StudentID_MERN_Lab.zip`
