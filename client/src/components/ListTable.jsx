import React from "react";

export default function ListTable({ items, showCategory }) {
  return (
    <table className="w-full max-w-[70rem] place-self-center">
      <thead>
        <tr className="bg-gray-200 border-2 border-black">
          <th>Item Name</th>
          <th>Price</th>
          {showCategory && <th>Category</th>}
          <th>Type</th>
          <th>Expiry Date</th>
        </tr>
      </thead>
      <tbody className="overflow-y-auto border-2 border-black h-[10rem]">
        {items.map((item) => (
          <tr key={item.id} className="border-2 border-black">
            <td className="px-4 py-2 overflow-x-auto">{item.name}</td>
            <td className="px-4 py-2 text-center">{item.price}</td>
            {showCategory && (
              <td className="px-4 py-2 text-center">{item.category_name}</td>
            )}
            <td className="first-letter:uppercase px-4 py-2 text-center">
              {item.type}
            </td>
            <td className="px-4 py-2 text-center">
              {item.expiry_date ? item.expiry_date.split("T")[0] : "N/A"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
