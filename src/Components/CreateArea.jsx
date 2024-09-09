import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isChanged, setIsChanged] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setIsChanged(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      {isChanged ? (
        <form className="create-note">
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
          />
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddCircleIcon />
            </Fab>
          </Zoom>
        </form>
      ) : (
        <form className="create-note">
          <textarea
            name="content"
            onChange={handleChange}
            onClick={handleClick}
            value={note.content}
            placeholder="Take a note..."
            rows="1"
          />
        </form>
      )}
    </div>
  );
}

export default CreateArea;
