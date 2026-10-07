import useLocalStorage from "./useLocalStorage";
export type Note = {
  id: number;
  title: string;
  content: string;
  pinned: boolean;
  archived: boolean;
};
function useNotes() {
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);
  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
      pinned: false,
      archived: false,
    };
    setNotes((currentNotes) => [...currentNotes, newNote]);
  };
  const removeNote = (id: number) => {
    setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id));
  };
  const updateNote = (id: number, title: string, content: string) => {
    setNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === id ? { ...note, title, content } : note,
      ),
    );
  };
  const togglepin = (id: number) => {
    setNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note,
      ),
    );
  };
  const toggleArchive = (id: number) => {
    setNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note,
      ),
    );
  };
  const pinnedNotes = notes.filter((note) => note.pinned);
  return {
    notes,
    addNote,
    removeNote,
    updateNote,
    toggleArchive,
    togglepin,
    pinnedNotes,
  };
}
export default useNotes;
