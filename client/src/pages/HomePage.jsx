import React from "react";
import ItemList from "../components/ItemList";

function ListItem({ item }) {
  return <li className="text-2xl hover:text-red-600 cursor-pointer">{item}</li>;
}

export default function HomePage() {
  return (
    <div className="m-[3rem]">
      <h1 className="text-3xl font-bold my-4">Recently Added Items</h1>
      <ItemList />
    </div>
  );
}
