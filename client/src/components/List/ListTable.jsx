import React from "react";

export default function ListTable({
  items,
  showCategory,
  deleteMode,
  handleDeleteList,
  handleDeleteItem,
}) {
  const sortedItems = [...items].sort((a, b) => {
    const dateA = new Date(a.date_created);
    const dateB = new Date(b.date_created);
    return dateB - dateA;
  });

  return (
    <table className="w-full max-w-[70rem] place-self-center">
      <thead>
        <tr className="bg-gray-200 border-2 border-black">
          <th>Item Name</th>
          <th>Price</th>
          {showCategory && <th>Category</th>}
          <th>Type</th>
          <th>Expiry Date</th>
          <th>Date Created</th>
          {deleteMode && <th></th>}
        </tr>
      </thead>
      <tbody className="overflow-y-auto border-2 border-black h-fit">
        {sortedItems.map((item) => (
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
            <td className="px-4 py-2 text-center">
              {item.date_created
                ? new Date(item.date_created).toLocaleString()
                : "N/A"}
            </td>
            {deleteMode && (
              <td className="flex gap-4 items-center justify-center py-2 px-4 my-auto h-full">
                <input
                  type="checkbox"
                  className="transform scale-150"
                  onChange={(e) => handleDeleteList(item.id, e.target.checked)}
                />
                <button
                  className="text-red-600 hover:text-red-800 font-bold text-2xl"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  &times;
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
