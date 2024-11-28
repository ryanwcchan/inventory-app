import React, { useState } from "react";
import ItemList from "../components/List/ItemList";
import SearchInput from "../components/Search/SearchInput";

export default function HomePage() {
  const [searchList, setSearchList] = useState([]);

  return (
    <div className="m-[3rem]">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Recently Added Items</h1>
        <SearchInput />
      </div>
      <ItemList />
    </div>
  );
}
