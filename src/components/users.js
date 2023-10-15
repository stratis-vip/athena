import User from "./user";

import {useEffect, useState} from "react";
import { timeUsers, noTimeUsers } from "../data/users";

const Users = () => {
    const [showWarTime, setShowWarTime] = useState(null);
  useEffect(() => {
    if (showWarTime == null) {
      const showWarTimeFromLocalStorage = localStorage.getItem("showWarTime");
      if (showWarTimeFromLocalStorage != null) {
        console.log("local Store", showWarTimeFromLocalStorage);
        setShowWarTime(showWarTimeFromLocalStorage === "false" ? false : true);
      } else {
        localStorage.setItem("showWarTime", "false");
        setShowWarTime(false);
      }
    }
  }, [showWarTime]);

  const handleCheckChange = (e) => {
    setShowWarTime(e.target.checked);
    localStorage.setItem(
      "showWarTime",
      e.target.checked === true ? "true" : "false"
    );
  };

  return (
    <>
    <div className={"flex items-center flex-col"}>
        <h2 className="text-3xl text-primary sm:m-8 mt-3">Time-zone table members</h2>
        <label className="flex items-center">
          <input
            type={"checkbox"}
            checked={showWarTime}
            onChange={handleCheckChange}
            className="focus:ring-0 focus:ring-offset-0 mx-1"
          />
          Show War starting/finishing time{" "}
        </label>

        <div className={"flex sm:flex-row flex-col"}>
          <div className={"sm:ml-10"}>
            <TableComponent array={timeUsers} title="With info" showTime={showWarTime} />
          </div>
          <div className={"ml-10"}>
          <TableComponent array={noTimeUsers} title="Without info yet" showTime={showWarTime} />
          </div>
        </div>
      </div>
    </>
    )

}

export default Users

const TableComponent = ({ array, title, showTime }) => {
    console.log('showWarTiem = ', showTime)
    return (
      <table className={"w-full shadow-lg bg-white border-separate "}>
        <caption className="mt-5 text-3xl">{title} {showTime}</caption>
        <thead className="text-xl">
          <tr className="bg-black text-white">
            <th scope={"col"}>Name</th>
            <th scope={"col"}>Local Time</th>
            {showTime && <th>war starts</th>}
            {showTime && <th>war ends</th>}
          </tr>
        </thead>
        <tbody className={"text-center"}>
          {array.map((user, index) => (
            <tr
              className={`${
                index % 2 ? "bg-gray-600 text-white" : "bg-gray-300"
              }`}
              key={user.id}
            >
              <User user={user} showWarTime={showTime} />
            </tr>
          ))}
        </tbody>
      </table>
    );
  };