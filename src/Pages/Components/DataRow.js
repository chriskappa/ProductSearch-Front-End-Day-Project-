import React from "react";

function DataRow({ color }) {
  return (
    <div className={`Content  ${color} rounded-r-md flex mb-2 `}>
      <img
        src="https://www.pngall.com/wp-content/uploads/2016/06/Finance-Free-Download-PNG.png"
        alt=""
        className="w-14"
      />
      <div className="infoContent flex justify-between  w-full mx-10">
        <div className="flex flex-col ">
          <h1 className="text-center font-bold">Date:</h1>
          <h1 className="text-white">2022-09-19</h1>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-center font-bold">Views:</h1>
          <h1 className="text-white">9000</h1>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-center font-bold">Clicks:</h1>
          <h1 className="text-white">35000</h1>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-center font-bold">CPC:</h1>
          <h1 className="text-white">0.012835863899693687</h1>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-center font-bold">CPM:</h1>
          <h1 className="text-white">0.16915001820191136</h1>
        </div>
      </div>
    </div>
  );
}

export default DataRow;
