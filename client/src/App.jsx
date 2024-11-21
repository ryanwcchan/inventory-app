import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Outlet, useOutletContext } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/api");
    setData(response.data.fruits);
    console.log(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <main>
      <Navbar />
      <Outlet context={{ data }} />
    </main>
  );
}

export default App;
