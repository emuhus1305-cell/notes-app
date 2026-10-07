import type { Note } from "../hooks/useNotes";

type Props = {
  note: Note;
  onDelete: (id: number) => void;
  onPin: (id: number) => void;
  onArchive: (id: number) => void;
};

function NoteItem({ note, onDelete, onPin, onArchive }: Props) {
  return (
    <div className="note">
      <h3>{note.title}</h3>

      <p>{note.content}</p>

      <div className="note-buttons">
        <button onClick={() => onPin(note.id)}>
          {note.pinned ? "Unpin" : "Pin"}
        </button>

        <button onClick={() => onArchive(note.id)}>
          {note.archived ? "Unarchive" : "Archive"}
        </button>

        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
}

export default NoteItem;
