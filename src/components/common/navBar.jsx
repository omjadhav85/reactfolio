import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const elements = [
	{
		name: "home",
		text: "Home",
		route: "/",
	},
	// {
	// 	name: "about",
	// 	text: "About",
	// 	route: "/about",
	// },
	{
		name: "projects",
		text: "Projects",
		route: "/projects",
	},
	// {
	// 	name: "articles",
	// 	text: "Articles",
	// 	route: "/articles",
	// },
	{
		name: "contact",
		text: "Contact",
		route: "/contact",
	},
];

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							{elements.map((ele) => (
								<li
									className={
										active === ele.name
											? "nav-item active"
											: "nav-item"
									}
								>
									<Link to={ele.route}>{ele.text}</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
