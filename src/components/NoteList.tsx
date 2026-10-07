import NoteItem from "./NoteItem";
import type { Note } from "../hooks/useNotes";

type Props = {
  notes: Note[];
  onDelete: (id: number) => void;
  onPin: (id: number) => void;
  onArchive: (id: number) => void;
};

function NoteList({ notes, onDelete, onPin, onArchive }: Props) {
  if (notes.length === 0) {
    return <p>No notes found.</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onPin={onPin}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
}

export default NoteList;
