import { useParams } from "react-router-dom";

import "./Note.css";
import { useEffect, useState } from "react";

function Note() {
  const { id } = useParams();

  const [note, setNote] = useState(null);

  async function fetchNote() {
    const response = await fetch(`/notes/${id}`);
    const data = await response.json();
    setNote(data);
  }

  useEffect(() => {
    fetchNote();
  }, [id]);

  if (!note) {
    return "Chargement…";
  }

  return (
    <form className="Form">
      <input
        className="Note-editable Note-title"
        type="text"
        value={note.title}
      />
      <textarea className="Note-editable Note-content" value={note.content} />
      <div className="Note-actions">
        <button className="Button">Enregistrer</button>
      </div>
    </form>
  );
}

export default Note;
