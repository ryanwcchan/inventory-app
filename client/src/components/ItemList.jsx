import { getAllItems } from "../API/itemCall";
import React, { useEffect, useState } from "react";

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
    <table className="w-full max-w-[70rem] place-self-center">
      <thead>
        <tr className="bg-gray-200 border-2 border-black">
          <th>Item Name</th>
          <th>Price</th>
          <th>Category ID</th>
          <th>Type</th>
          <th>Expiry Date</th>
        </tr>
      </thead>
      <tbody className="overflow-scroll border-2 border-black h-[10rem]">
        {items.map((item) => (
          <tr key={item.id}>
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.price}</td>
            <td className="px-4 py-2 text-center">{item.category_id}</td>
            <td className="first-letter:uppercase px-4 py-2">{item.type}</td>
            <td className="px-4 py-2">{item.expiry_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
