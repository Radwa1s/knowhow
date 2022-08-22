import React from "react";
import "../fonts/Benzin-Bold.ttf";
import "./search.css";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="text-center">
      <div>
        <p className="uppercase font-BenzinBold text-center text-3xl mt-24">
          know how <br />
          to get over things
        </p>
      </div>
      <div className="wrap flex justify-center">
        <div className="search-box flex ">
          <div className="btn">
            <IoIosSearch className="btn-style " />
          </div>
          <input
            className=" border-gray	 search-input focus:ring-0 border-none "
            type="text"
            placeholder="How can i get over ..."
          />
        </div>
      </div>
      <button className="bg-lightGreen hover:bg-lightGreen font-BenzinRegular  py-2 px-4 rounded-sm w-32 h-10 mt-7">
        Start
      </button>
    </div>
  );
}
