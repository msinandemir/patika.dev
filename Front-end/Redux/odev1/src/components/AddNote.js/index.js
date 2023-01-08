import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNote } from "../../redux/note/noteSlice";
import "../../App.css";

function AddNote() {
  const dispatch = useDispatch()

  const divRef = useRef();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("pink");
  
  const colorConverter = (color) => {
    if(color==="purple"){
      return "#b106b1"
    }
    if(color==="yellow"){
      return "#fcda45"
    }
    if(color==="blue"){
      return "#4040f8"
    }
    if(color==="green"){
      return "#43d343"
    }
    if(color==="pink"){
      return 'pink'
    }
  }
  let convertedColor = colorConverter(color)

  useEffect(() => {
    const currentDiv = divRef.current;
    currentDiv.addEventListener("mouseover", () => {
      currentDiv.classList.add("active");
    });

    currentDiv.addEventListener("mouseout", () => {
      currentDiv.classList.remove("active");
    });
  }, []);
  return (
    <div className="addNote" ref={divRef}>
      <span>+</span>
      <input
        id="noteTitle"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
      />
      <div className="content">
        <textarea
          id="noteContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note content"
        />
        <div className="colors">
          <label className={`color ${color === "pink" ? 'currentColor' : ''}`} htmlFor="pink"/>
          <label className={`color ${color === "purple" ? 'currentColor' : ''}`} htmlFor="purple"/>
          <label className={`color ${color === "yellow" ? 'currentColor' : ''}`} htmlFor="yellow"/>
          <label className={`color ${color === "blue" ? 'currentColor' : ''}`} htmlFor="blue"/>
          <label className={`color ${color === "green" ? 'currentColor' : ''}`} htmlFor="green"/>
          <input id="pink" name="color" type="radio"  onChange={() => setColor("pink")}/>
          <input id="purple" name="color" type="radio"  onChange={() => setColor("purple")}/>
          <input id="yellow" name="color" type="radio" onChange={() => setColor("yellow")} />
          <input id="blue" name="color" type="radio"  onChange={() => setColor("blue")}/>
          <input id="green" name="color" type="radio" onChange={() => setColor("green")} />
          </div>
        <button
          id="btn-addNote"
          onClick={() => {
            
            dispatch(addNote({id:nanoid(), title, content,convertedColor}))
            setTitle('')
            setContent('')
          }}
        >
          Add New Note
        </button>
      </div>
    </div>
  );
}

export default AddNote;
