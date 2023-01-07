import { useState } from "react";
import "./SearchBar.css";
function SerachBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Serach Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SerachBar;
