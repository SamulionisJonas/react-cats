import React, { useEffect } from "react";
import { Filter } from "./Filter";

export const SearchBar = ({ onChange }) => {
  // Input serchTerm
  const [searchTerm, setSearchTerm] = React.useState("");
  // Filter state
  const [state, setState] = React.useState("name");

  return (
    <>
      <div className="searchbar">
        <div className="searchbar_input">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Search by ${state}`}
          />
        </div>
      </div>
      <Filter value={state} onChange={setState} />
    </>
  );
};
