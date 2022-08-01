import React from "react";

function DataRow({ date, views, clicks, cpc = 0, cpm = 0, color }) {
  return (
    <div
      className={`Content  ${color} rounded-r-md flex mb-2 mt-10 hover:bg-gray-500 hover:cursor-pointer `}
    >
      <img
        src="https://www.pngall.com/wp-content/uploads/2016/06/Finance-Free-Download-PNG.png"
        alt=""
        className="w-14"
      />
      <div className="infoContent flex justify-between  w-full mx-10">
        <div className="flex flex-col ">
          <h1 className="text-center font-bold">Date:</h1>
          <h1 className="text-white">{date.substring(0, 10)}</h1>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-center font-bold">Views:</h1>
          <h1 className="text-white">{views}</h1>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-center font-bold">Clicks:</h1>
          <h1 className="text-white">{clicks}</h1>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-center font-bold">CPC:</h1>
          <h1 className="text-white">{cpc}</h1>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-center font-bold">CPM:</h1>
          <h1 className="text-white">{cpm}</h1>
        </div>
      </div>
    </div>
  );
}

export default DataRow;
