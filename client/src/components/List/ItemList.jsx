import React, { useEffect, useState } from "react";
import ListTable from "./ListTable";

export default function ItemList({ items }) {
  if (!items) return <div>Loading...</div>;

  return (
    <>
      <ListTable items={items} showCategory={true} />
    </>
  );
}
