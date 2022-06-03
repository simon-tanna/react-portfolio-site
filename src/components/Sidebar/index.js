import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
	Home,
	Face,
	Email,
	Source,
	LinkedIn,
	GitHub,
} from "@mui/icons-material";
import "./index.scss";
import SimonLogo from "../../assets/images/2.png";

const SideBar = () => {
	return (
		<div className="nav-bar">
			<Link className="logo" to="/">
				<img src={SimonLogo} alt="simon logo" />
			</Link>
			<nav className="navigation-menu">
                {/* <Menu className="hamburger" /> */}
				<NavLink exact="true" activeclassname="active" to="/" className="home-link">
					<Home color="#4d4d4e" />
				</NavLink>
				<NavLink
					exact="true"
					activeclassname="active"
					className="about-link"
					to="/about"
				>
					<Face />
				</NavLink>
				<NavLink
					exact="true"
					activeclassname="active"
					className="projects-link"
					to="/projects"
				>
					<Source />
				</NavLink>
				<NavLink
					exact="true"
					activeclassname="active"
					className="contact-link"
					to="/contact"
				>
					<Email />
				</NavLink>
			</nav>
			<ul>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/simon-tanna-117b75224/"
					>
						<LinkedIn />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/simon-tanna/"
					>
						<GitHub />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
