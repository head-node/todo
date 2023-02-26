import React, { useState } from "react";

export const TodoList = () => {
  const [list, setList] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [editIndex, setIndex] = useState(-1);
  const [updatedNote, setUpdatedNote] = useState("");
  const handleInputChange = (e) => {
    setCurrentNote(e.target.value);
  };
  const addContent = () => {
    if (currentNote) {
      setList([...list, currentNote]);
      setCurrentNote("");
    }
  };
  const resetContent = () => {
    setList([]);
    setCurrentNote("");
    setIndex(-1);
  };
  const editItem = (index) => {
    setEdit(true);
    setIndex(index);
    setUpdatedNote(list[index]);
  };
  const updateItem = (index) => {
    list[index] = updatedNote;
    setList([...list]);
    setIndex(-1);
    setEdit(false);
    setUpdatedNote(list[editIndex] ?? "");
  };
  const deleteItem = (index) => {
    setList(
      list.filter((listItem, id) => {
        return id !== index;
      })
    );
  };
  const handleUpdateInputChange = (e) => {
    setUpdatedNote(e.target.value);
  };

  return (
    <div className="">
      <input
        placeholder="Add Content"
        onChange={(e) => handleInputChange(e)}
        value={currentNote}
      />
      &nbsp;
      <button onClick={addContent}>Add</button>&nbsp;&nbsp;
      <button onClick={resetContent}>Reset</button>
      <div>
        {list.map((listItem, index) => {
          return (
            <div style={{ margin: "20px" }} key={index}>
              {isEdit && index === editIndex ? (
                <>
                  <input
                    placeholder="Add Updated Text"
                    // defaultValue={list[index]}
                    // we can use this also
                    value={updatedNote}
                    onChange={(e) => handleUpdateInputChange(e)}
                  />
                  <button
                    style={{ marginLeft: "20px" }}
                    onClick={() => updateItem(index)}
                  >
                    Update
                  </button>
                </>
              ) : (
                <>
                  <span>{listItem}</span>
                  <button
                    style={{ marginLeft: "20px" }}
                    onClick={() => editItem(index)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ marginLeft: "20px" }}
                    onClick={() => deleteItem(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
