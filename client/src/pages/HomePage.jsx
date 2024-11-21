import React from "react";
import { useOutletContext } from "react-router-dom";

function ListItem({ item }) {
  return <li className="text-2xl hover:text-red-600 cursor-pointer">{item}</li>;
}

export default function HomePage() {
  const { data } = useOutletContext();

  return (
    <div className="m-[3rem]">
      <h1 className="text-3xl font-bold">Inventory List</h1>
      {data ? (
        data.map((fruit) => {
          return (
            <ul key={fruit}>
              <ListItem item={fruit} />
            </ul>
          );
        })
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
