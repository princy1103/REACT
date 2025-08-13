import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote, setSearchTerm, setCategoryFilter } from "../auth/notesSlice";
import { useState } from "react";

const Notes = () => {

    const dispatch = useDispatch();
  const { list, searchTerm, categoryFilter } = useSelector(state => state.notes);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");

  const filteredNotes = list.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || note.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleAddNote = () => {
    if (!title.trim() || !content.trim()) return;
    const newNote = {
      id: Date.now(),
      title,
      content,
      category
    };
    dispatch(addNote(newNote));
    setTitle("");
    setContent("");
  };

  return (
    <div className="app-container">
      <h1>Notes App</h1>

      <div className="add-note-form">
        <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          placeholder="Content" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>General</option>
          <option>Work</option>
          <option>Personal</option>
        </select>
        <button onClick={handleAddNote}>Add</button>
      </div>

      <div className="search-filter">
        <input 
          type="text" 
          placeholder="Search notes..." 
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        <select value={categoryFilter} onChange={(e) => dispatch(setCategoryFilter(e.target.value))}>
          <option>All</option>
          <option>General</option>
          <option>Work</option>
          <option>Personal</option>
        </select>
      </div>

      {filteredNotes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        filteredNotes.map(note => (
          <div key={note.id} className="note-card">
            <h3>{note.title} <small>({note.category})</small></h3>
            <p>{note.content}</p>
            <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Notes