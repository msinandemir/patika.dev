import React from "react";
import { useSelector } from "react-redux";
//components
import SearchBar from "./components/SearchBar";
import ListItem from "./components/ListItem";

function ListNotes() {
  const items = useSelector((state) => state.note.value);
  const filtered = useSelector((state) => state.note.filtered);
  let filteredNotes = [];

  if (!filtered) {
    filteredNotes = items;
  } else if (filtered) {
    filteredNotes = items.filter((item) => {
      return item.content.toLowerCase().includes(filtered.toLowerCase());
    });
  }

  return (
    <>
      <div
        style={{
         marginLeft:"1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SearchBar />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          {filteredNotes.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListNotes;
