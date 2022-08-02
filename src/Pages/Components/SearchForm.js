import React from "react";
import { Link } from "react-router-dom";
function SearchForm({ handleSubmit, fromDate, toDate }) {
  return (
    <form className="w-1/2 " onSubmit={handleSubmit}>
      <label class="relative block mb-3 ">
        <span
          className="absolute inset-y-0 left-0 flex items-center pl-3 hover:cursor-pointer"
          onClick={() => alert("Searching")}
        >
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_464430.png"
            className="w-5 h-5"
            alt=""
          />
        </span>
        <input
          ref={fromDate}
          className="w-full bg-gray-100 text-black text-md   rounded-full py-1 pl-10 pr-4 focus:outline-none text-center "
          placeholder="Enter From Date eg.(2021-09-19)"
          type="text"
        />
      </label>
      <label className="relative block mb-5 ">
        <span
          className="absolute mb2- inset-y-0 left-0 flex items-center pl-3 hover:cursor-pointer"
          onClick={() => alert("Searching")}
        >
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_464430.png"
            className="w-5 h-5"
            alt=""
          />
        </span>
        <input
          ref={toDate}
          className="w-full bg-gray-100 text-black text-md    rounded-full py-1 pl-10 pr-4 focus:outline-none text-center "
          placeholder="Enter To Date eg.(2021-09-19)"
          type="text"
        />
      </label>
      <h1
        className="bg-green-500 inline  p-2 px-10 font-bold rounded hover:cursor-pointer hover:bg-green-800"
        onClick={handleSubmit}
      >
        Search
      </h1>
      <button class="mt-5">
        <a class="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3 bg-[#1A2238] border border-current ml-2 rounded">
            <Link to="/testpage">Test Navigation</Link>
          </span>
        </a>
      </button>
    </form>
  );
}

export default SearchForm;
