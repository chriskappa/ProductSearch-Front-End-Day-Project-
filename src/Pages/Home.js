import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { apiLink } from "../Requests.js/requestFile";
import DataRow from "./Components/DataRow";

function Home() {
  const fromDate = useRef();
  const toDate = useRef();
  const [data, setData] = useState([]);
  //   const data = [
  //     {
  //       _id: "62e832a487687de91e0196fd",
  //       date: "2022-09-19T00:00:00.000Z",
  //       views: 1343242210,
  //       clicks: 4324234,
  //       cost: 43242,
  //       cpc: 0.009999921373357685,
  //       cpm: 0.03219225816317967,
  //     },
  //     {
  //       _id: "62e832a987687de91e0196ff",
  //       date: "2022-09-19T00:00:00.000Z",
  //       views: 32131241,
  //       clicks: 423423,
  //       cost: 5435,
  //       cpc: 0.012835863899693687,
  //       cpm: 0.16915001820191136,
  //     },
  //     {
  //       _id: "62e8396ad518139dffb2161e",
  //       date: "2022-09-19T00:00:00.000Z",
  //       views: 13213,
  //       clicks: 3213,
  //       cost: 45,
  //       cpc: 0.014005602240896359,
  //       cpm: 3.4057367743888594,
  //     },
  //     {
  //       _id: "62e8396ad518139dffb2161e",
  //       date: "2022-09-19T00:00:00.000Z",
  //       views: 13213,
  //       clicks: 3213,
  //       cost: 45,
  //       cpc: 0.014005602240896359,
  //       cpm: 3.4057367743888594,
  //     },
  //     {
  //       _id: "62e8396ad518139dffb2161e",
  //       date: "2022-09-19T00:00:00.000Z",
  //       views: 13213,
  //       clicks: 3213,
  //       cost: 45,
  //       cpc: 0.014005602240896359,
  //       cpm: 3.4057367743888594,
  //     },
  //     {
  //       _id: "62e8396ad518139dffb2161e",
  //       date: "2022-09-19T00:00:00.000Z",
  //       views: 13213,
  //       clicks: 3213,
  //       cost: 45,
  //       cpc: 0.014005602240896359,
  //       cpm: 3.4057367743888594,
  //     },
  //   ];

  const isValidDate = (from, to) => {
    const fromDate = isNaN(Date.parse(from));
    const toDate = isNaN(Date.parse(to));

    if (fromDate || toDate) return false;
    return true;
  };
  const handleSubmit = () => {
    if (!isValidDate(fromDate.current.value, toDate.current.value))
      return alert("Please Enter Two Valid Dates");

    fetchData(fromDate.current.value, toDate.current.value);
  };

  const fetchData = async (
    startDate = "2000-01-01",
    endDate = "2050-01-01"
  ) => {
    try {
      const result = await axios.post(`${apiLink}/statistics/display`, {
        from: startDate,
        to: endDate,
      });
      if (result.status === 200) {
        setData(result.data.data);
      } else {
        console.log(result.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <div className="input w-screen flex justify-center items-center ">
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
                className="bg-green-500 inline  p-2 px-10 font-bold rounded "
                onClick={handleSubmit}
              >
                Search
              </h1>
            </form>
            <form className="w-1/2 " onSubmit={handleSubmit}>
              <label className="relative block mb-5 ">
                <input
                  ref={toDate}
                  className="w-3/4 bg-gray-100 text-black text-md    rounded py-1 pl-10 pr-4 focus:outline-none text-center "
                  placeholder="Enter Date "
                  type="text"
                />
              </label>
              <label className="relative block mb-5 ">
                <input
                  ref={toDate}
                  className="w-3/4 bg-gray-100 text-black text-md    rounded py-1 pl-10 pr-4 focus:outline-none text-center "
                  placeholder="Enter To Date eg.(2021-09-19)"
                  type="text"
                />
              </label>
              <label className="relative block mb-5 ">
                <input
                  ref={toDate}
                  className="w-3/4 bg-gray-100 text-black text-md    rounded py-1 pl-10 pr-4 focus:outline-none text-center "
                  placeholder="Enter To Date eg.(2021-09-19)"
                  type="text"
                />
              </label>
              <label className="relative block mb-5 ">
                <input
                  ref={toDate}
                  className="w-3/4 bg-gray-100 text-black text-md    rounded py-1 pl-10 pr-4 focus:outline-none text-center "
                  placeholder="Enter To Date eg.(2021-09-19)"
                  type="text"
                />
              </label>
              <h1
                className="bg-green-500 inline  p-2 px-10 font-bold rounded "
                onClick={handleSubmit}
              >
                Search
              </h1>
            </form>
          </div>
        </div>
      </div>
      {data.map((v, index) => {
        return (
          <DataRow
            key={index + v.date}
            color={`${index % 2 === 0 ? "bg-red-500" : "bg-gray-800"}`}
          />
        );
      })}
    </div>
  );
}

export default Home;
