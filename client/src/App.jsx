import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/notes";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(API_URL);
      setNotes(response.data);
    } catch (err) {
      console.error(err);
      setError("Unable to load notes. Make sure the backend and MongoDB are running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Please enter both a title and content.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const response = await axios.post(API_URL, {
        title: title.trim(),
        content: content.trim()
      });

      setNotes((currentNotes) => [response.data, ...currentNotes]);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
      setError("Unable to create the note.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setError("");
      await axios.delete(`${API_URL}/${id}`);
      setNotes((currentNotes) =>
        currentNotes.filter((note) => note._id !== id)
      );
    } catch (err) {
      console.error(err);
      setError("Unable to delete the note.");
    }
  };

  return (
    <main className="page">
      <section className="container">
        <header className="header">
          <p className="eyebrow">MERN STACK LAB</p>
          <h1>Student Notes</h1>
          <p className="subtitle">
            Create, view and delete notes using React, Express and MongoDB.
          </p>
        </header>

        <section className="card form-card">
          <h2>Add a Note</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter note title"
            />

            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Write your note..."
              rows="5"
            />

            <button type="submit" disabled={submitting}>
              {submitting ? "Adding..." : "Add Note"}
            </button>
          </form>
        </section>

        {error && <p className="error">{error}</p>}

        <section className="notes-section">
          <div className="section-heading">
            <h2>Notes</h2>
            <span>{notes.length}</span>
          </div>

          {loading ? (
            <div className="card state">Loading notes...</div>
          ) : notes.length === 0 ? (
            <div className="card state">No notes yet — add one above!</div>
          ) : (
            <div className="notes-grid">
              {notes.map((note) => (
                <article className="card note" key={note._id}>
                  <div className="note-top">
                    <h3>{note.title}</h3>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(note._id)}
                    >
                      Delete
                    </button>
                  </div>

                  <p className="note-content">{note.content}</p>
                  <time dateTime={note.createdAt}>
                    {new Date(note.createdAt).toLocaleString()}
                  </time>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default App;
