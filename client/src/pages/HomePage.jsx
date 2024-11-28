import React, { useState, useEffect } from "react";
import ItemList from "../components/List/ItemList";
import SearchInput from "../components/Search/SearchInput";
import { getAllItems } from "../API/itemCall";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getAllItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
        setError("Failed to load items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="m-[3rem]">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Recently Added Items</h1>
        <SearchInput
          placeholder={"Search by item name..."}
          value={searchQuery}
          onClearSearch={handleClearSearch}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ItemList items={filteredItems} />
      )}
    </div>
  );
}
