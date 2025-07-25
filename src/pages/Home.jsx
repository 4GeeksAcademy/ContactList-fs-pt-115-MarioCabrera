import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Contacts } from "../components/Contacts.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const getContacts = async (user) => {
		const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}`)
		if (!response.ok) {
			console.log("la agenda no existe");
			createAgenda(user)
			return
		}
		const data = await response.json()
		console.log(data);

		dispatch({ type: "set_contacts", payload: data.contacts });

	}
	const createAgenda = async (user) => {
		const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}`, {
			method: "POST"
		})
		console.log(response);
		const data = await response.json();
		console.log(data);
		getContacts(user)
	}
	const deleteContact = async (id) => {
		const userName = localStorage.getItem("userName")
		const response = await fetch(`https://playground.4geeks.com/contact/agendas/${userName}/contacts/${id}`, {
			method: "DELETE"
		})
		if (userName) {
			getContacts(userName)
		} else {
			getContacts("mario")
		}
	}
	useEffect(() => {
		const userName = localStorage.getItem("userName")
		if (userName) {
			getContacts(userName)
		}
	}, [])


	return (
		<>
			<div className="container mx-auto mt-4">
				{localStorage.getItem("userName") ? <h1 className="text-center">{`Agenda de ${localStorage.getItem("userName").split("_").join(" ")}`}</h1> : ""}
				<div className="row">
				</div>
				{localStorage.getItem("userName") ? store.contacts.map((element, index) => (
					<Contacts
						key={index}
						id={element.id}
						name={element.name}
						address={element.address}
						phone={element.phone}
						email={element.email}
						delete={() => { deleteContact(element.id) }}
						edit={() => { }}
					/>)
				): <h1 className="text-center">Haz click en Login para acceder a una agenda</h1>}
			</div>
		</>
	);
};  