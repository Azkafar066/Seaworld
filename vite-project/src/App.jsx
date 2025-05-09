import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HistoryModal } from "./HistoryModal"; // Pastikan file ini ada

export const Header = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <header className="bg-blue-400 text-black p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <img src="Logo.png" alt="Logo" className="w-20 h-auto object-cover" />
        <h1 className="text-xl font-bold ml-52">
          Hello Welcome To Ancol Dream Land Website!
        </h1>
        <ul className="flex gap-4">
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/details">Details</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button
          onClick={() => setShowHistory(true)}
          className="ml-4 px-3 py-1 bg-white text-blue-600 rounded"
        >
          History
        </button>
      </nav>
      {showHistory && <HistoryModal closeModal={() => setShowHistory(false)} />}
    </header>
  );
};


