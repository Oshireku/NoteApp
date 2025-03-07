import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" contentEditable>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default Note;
