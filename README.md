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

