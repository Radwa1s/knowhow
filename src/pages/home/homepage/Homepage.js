import React from "react";
import "./Homepage.css";
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import "../fonts/Benzin-Bold.ttf";
import "../fonts/Benzin-Regular.ttf";
export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Search />
    </div>
  );
}
