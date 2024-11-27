import { getAllItems } from "../API/itemCall";
import React, { useEffect, useState } from "react";
import ListTable from "./ListTable";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getAllItems();
      setItems(data);
    };

    fetchItems();
  }, []);

  if (!items) return <div>Loading...</div>;

  return (
    <>
      <ListTable items={items} showCategory={true} />
    </>
  );
}
