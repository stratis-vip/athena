import {
  BrowserRouter as Router,
  Link,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Users from "./users";
import Rules from "./rules";
import Adventures from "./adventures";
import React from "react";
import Title from "./title";
import Guides from "./guides";
import Program from "./program";
import Home from "./home";

const RouterComponent = () => {
  return (
    <Router>
      <div className={"flex bg-primary p-1   my-0 m-auto text-white items-center"}>
        <div className={""}>
          <div className={"py-1"}>
            <Title />
          </div>
        </div>
        <div className={"flex justify-around flex-1"}>
          <ToLink path={"/"} title="News" />
          <ToLink path={"/rules"} title="Rules" />
          <ToLink path={"/guides"} title="Guides" />
          <ToLink path={"/program"} title="War Schedule" />
          <ToLink path={"/users"} title=" Time Table" />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="program" element={<Program />} />
        <Route path="users" element={<Users />} />
        <Route path="rules" element={<Rules />} />
        <Route path="adventures/:aid" element={<Adventures />} />
        <Route path="guides" element={<Guides />} />
        {/* <Route path="events/quiz/:eventId" element={<Quiz />} /> */}
      </Routes>

      <Outlet />
    </Router>
  );
};

export default RouterComponent;

const ToLink = ({ path, title }) => {
  return (
    <div className={"py-0 px-1"}>
      <Link className="text-xl" to={path}>
        {title}
      </Link>
    </div>
  );
};
