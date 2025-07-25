import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const loginUser = () => {
		const userInput = prompt("Por favor introduce tu username");
		if (userInput) {
			const actualUser = userInput.split(" ").join("_").toLowerCase()
			localStorage.setItem("userName", actualUser);
			window.location.reload()
		}
	}
	const logOut = () => {
		localStorage.removeItem("userName")
		window.location.reload()
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{!localStorage.getItem("userName") ? (
						<button className="btn btn-info me-4" onClick={() => { loginUser() }}>
							Login
						</button>
					) : (
						<button className="btn btn-info me-4" onClick={() => { logOut() }}>
							Logout
						</button>
					)
					}
					<Link to="/demo">
						<button className="btn btn-success">
							Añadir nuevo contacto
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};