import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Outlet, useOutletContext } from "react-router-dom";

function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
