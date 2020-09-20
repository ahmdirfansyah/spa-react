import React from 'react';
import {NavLink } from "react-router-dom";

const navs = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/about",
        name: "About",
    },
    {
        path: "/experience",
        name: "Experience",
    },
    {
        path: "/skills",
        name: "Skills",
    },
    {
        path: "/interest",
        name: "Interest",
    },
    {
        path: "/awards",
        name: "Awards",
    },
];

const Nav = () => (
    // <nav className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ...">
        <nav className="flex items-center justify-center flex-wrap bg-red-600 p-3 font-bold text-lg mb-2 ">
            <ul className="flex space-x-6">
                {navs.map((navItem) => (
                    <li>
                        <NavLink exact to={navItem.path} activeClassName="text-red-100 transition-shadow duration-200 ease-in-out  transform hover:scale-110 text-xl">{navItem.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
);

export default Nav;