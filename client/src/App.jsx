import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Outlet, useOutletContext } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
