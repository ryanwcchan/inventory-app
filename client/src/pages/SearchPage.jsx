import { useState } from "react";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input type="text" placeholder="Search..." />
    </div>
  );
}
