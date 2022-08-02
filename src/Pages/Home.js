import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { apiLink, registerPost, resetData } from "../Requests.js/requestFile";
import DataRow from "./Components/DataRow";

function Home() {
  const fromDate = useRef();
  const toDate = useRef();
  const [data, setData] = useState([]);
  const [postObject, setPostObject] = useState({
    date: "",
    views: 0,
    clicks: 0,
    cost: 0,
  });
  const isValidDate = (from, to) => {
    const fromDate = isNaN(Date.parse(from));
    const toDate = isNaN(Date.parse(to));

    if (fromDate || toDate) return false;
    return true;
  };
  const handleSubmit = () => {
    // if one of dates is not on correct format  eg.(2020-05-10) show alert
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

  const handleOnChange = (e) => {
    // Function to handle all the register inputs at once
    setPostObject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValidObject = (objectValues) => {
    // Retrieving All Object Values
    const values = Object.values(objectValues);
    // Checking if array is not empty means we found invalid Value So We Dont Try to send nonValid Request and load the server
    const isValid =
      values.filter((v) => v === "" || v === 0).length > 0 ? false : true;
    return isValid;
  };

  const handleRegister = () => {
    // After checking that the object is valid and has proper key/values and the dates exist on the object then register the post
    if (isValidObject(postObject) && !isNaN(Date.parse(postObject.date))) {
      registerPost(postObject)
        .then((res) => {
          // After sucesfull post add the new post to data array in order to update the ui with latest data
          // Also calculate cpc and cpm on the go
          setData((prev) => [
            {
              ...postObject,
              cpc: postObject.cost / postObject.clicks,
              cpm: postObject.cost / postObject.views,
            },
            ...prev,
          ]);
        })
        .catch((error) => console.log(`Something Went Wrong ${error}`));

      console.log(postObject);
    } else {
      alert("Please Check Your Inputs");
    }
  };

  const handleDataReset = () => {
    // Use resetData function to delete the posts from mongoose and then delete the data from state for real time update
    resetData()
      .then((res) => setData([]))
      .catch((error) => console.log(`Something went wrong :${error}`));
  };

  // Fetch Data on first component mount
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
                className="bg-green-500 inline  p-2 px-10 font-bold rounded hover:cursor-pointer hover:bg-green-800"
                onClick={handleSubmit}
              >
                Search
              </h1>
            </form>
            <form className="w-1/2 " onSubmit={handleSubmit}>
              <label className="relative block mb-5 ">
                <input
                  className="w-3/4 bg-gray-100 text-black text-md    rounded py-1 pl-10 pr-4 focus:outline-none text-center "
                  placeholder="Enter Date "
                  name="date"
                  required
                  onChange={handleOnChange}
                />
              </label>
              <label className="relative block mb-5 ">
                <input
                  className="w-3/4 bg-gray-100 text-black text-md    rounded py-1 pl-10 pr-4 focus:outline-none text-center "
                  placeholder="Enter Number of Views"
                  type="Number"
                  name="views"
                  required
                  onChange={handleOnChange}
                />
              </label>
              <label className="relative block mb-5 ">
                <input
                  className="w-3/4 bg-gray-100 text-black text-md    rounded py-1 pl-10 pr-4 focus:outline-none text-center "
                  placeholder="Enter Number of Clicks"
                  type="number"
                  name="clicks"
                  required
                  onChange={handleOnChange}
                />
              </label>
              <label className="relative block mb-5 ">
                <input
                  className="w-3/4 bg-gray-100 text-black text-md    rounded py-1 pl-10 pr-4 focus:outline-none text-center "
                  placeholder="Enter The Cost"
                  type="number"
                  name="cost"
                  required
                  onChange={handleOnChange}
                />
              </label>
              <h1
                className="bg-red-500 mr-2 inline  p-2 px-10 font-bold rounded hover:cursor-pointer hover:bg-red-800 "
                onClick={handleDataReset}
              >
                Reset Data
              </h1>
              <h1
                className="bg-green-500 inline  p-2 px-10 font-bold rounded hover:cursor-pointer hover:bg-green-800 "
                onClick={handleRegister}
              >
                Register New Data
              </h1>
            </form>
          </div>
        </div>
      </div>
      {data.map((v, index) => {
        return (
          <DataRow
            key={index + v.date}
            date={v.date}
            views={v.views}
            clicks={v.clicks}
            cpc={v.cpc}
            cpm={v.cpm}
            color={`${index % 2 === 0 ? "bg-red-500" : "bg-gray-800"}`}
          />
        );
      })}
    </div>
  );
}

export default Home;
