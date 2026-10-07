import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import FilterButtons from "./components/FilterButtons";
import useNotes from "./hooks/useNotes";
import { useTheme } from "./context/ThemeContext";

type Filter = "all" | "pinned" | "archived";

function App() {
  const {
    notes,
    addNote,
    removeNote,
    togglepin: togglePin,
    toggleArchive,
  } = useNotes();

  const { theme, toggleTheme } = useTheme();

  const [filter, setFilter] = useState<Filter>("all");

  const filteredNotes = notes.filter((note) => {
    if (filter === "pinned") {
      return note.pinned && !note.archived;
    }

    if (filter === "archived") {
      return note.archived;
    }

    return !note.archived;
  });

  return (
    <main className="container">
      <header>
        <h1>My Notes</h1>

        <button onClick={toggleTheme}>
          {theme === "light" ? " Dark" : "Light"}
        </button>
      </header>

      <NoteForm onAdd={addNote} />

      <FilterButtons filter={filter} setFilter={setFilter} />

      <NoteList
        notes={filteredNotes}
        onDelete={removeNote}
        onPin={togglePin}
        onArchive={toggleArchive}
      />
    </main>
  );
}

export default App;
