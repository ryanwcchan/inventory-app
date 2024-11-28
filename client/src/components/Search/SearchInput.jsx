import { useState } from "react";
import ListTable from "../List/ListTable";
import RedButton from "../Buttons/RedButton";

export default function SearchInput({ items, newList }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
        className="border border-gray-300 rounded-md p-2"
      />
      <div className="flex gap-4 place-self-center sm:place-self-end">
        <RedButton>Search</RedButton>
        <RedButton>Clear</RedButton>
      </div>
    </div>
  );
}
