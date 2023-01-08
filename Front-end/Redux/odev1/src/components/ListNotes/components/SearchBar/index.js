import { useDispatch,useSelector } from "react-redux";
import { fiteredNotes } from "../../../../redux/note/noteSlice";

function SearcBar() {
  const filtered = useSelector((state) => state.note.filtered);
  const dispatch = useDispatch();


  return (
    <div className="searchBar">
      <input
        type="text"
        id="search"
        placeholder="Search..."
        value={filtered}
        onChange={(e) => {
         dispatch(fiteredNotes(e.target.value))
        }}
      />
    </div>
  );
}

export default SearcBar;
