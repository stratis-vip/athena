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
import React, { useState } from "react";
import Title from "./title";
import Guides from "./guides";
import Program from "./program";
import Home from "./home";
import Edit from "./edit";
import Gwar from "./g-war";
import Communication from "./comunication";
import { FaBars } from "react-icons/fa6";

const RouterComponent = () => {
	const [open, setOpen] = useState(true)
	return (
		<Router>
			<div
				className={`
				 bg-primary p-1   my-0 text-white 
				 flex flex-col
				 sm:flex-row sm:items-center
				`}
			>
				<div className={"flex justify-between"}>
					<div className={"py-1"}>
						<Title />
					</div>
					<div className="sm:hidden self-center mr-1"><FaBars size={25} onClick={() => {
						setOpen(!open)
					}} /></div>
				</div>
				<div className={`${open ? 'hidden' : ''} sm:flex
				flex flex-col
				sm:justify-around sm:flex-1 sm:flex-row
				
				`}>
					<ToLink path={"/"} title="News" />
					<ToLink path={"/rules"} title="Rules" />
					<ToLink path={"/guild-war"} title="Champions" />
					<ToLink path={"/guides"} title="Guides" />
					<ToLink path={"/program"} title="War Schedule" />
					<ToLink path={"/users"} title="Time Table" />
					<ToLink path={"/communication"} title="Communication" />
				</div>
			</div>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="program" element={<Program />} />
				<Route path="users" element={<Users />} />
				<Route path="rules" element={<Rules />} />
				<Route path="adventures/:aid" element={<Adventures />} />
				<Route path="guides" element={<Guides />} />
				<Route path="edit" element={<Edit />} />
				<Route path="guild-war" element={<Gwar />} />
				<Route path="communication" element={<Communication />} />
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


