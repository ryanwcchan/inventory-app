import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/items");
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  if (!items) return <div>Loading...</div>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Category ID</th>
            <th>Type</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
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
    </div>
  );
}
