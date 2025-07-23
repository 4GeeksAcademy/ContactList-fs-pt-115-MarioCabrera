import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Contacts } from "../components/Contacts.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const getContacts = async () => {
		const response = await fetch("https://playground.4geeks.com/contact/agendas/mario")
		if (!response.ok) {
			console.log("la agenda no existe");
			createAgenda()
		}
		const data = await response.json()
		console.log(data);
		
		dispatch({ type: "set_contacts", payload: data.contacts });
		console.log(store);
		

	}
	const createAgenda = async () => {
		const response = await fetch("https://playground.4geeks.com/contact/agendas/mario", {
			method: "POST"
		})
		console.log(response);
		const data = await response.json();
		console.log(data);
		getContacts()
	}
	const deleteContact = async (id) => {
		const response = await fetch(`https://playground.4geeks.com/contact/agendas/mario/contacts/${id}`,{
			method: "DELETE"
		})
		getContacts()
	}
	useEffect(() => {
		getContacts()
	}, [])


	return (
		<>
			<div className="container mx-auto mt-4">
				<div className="row">
				</div>
				{store.contacts.map((element, index) => (
					<Contacts
						key={index}
						id={element.id}
						name={element.name}
						address={element.address}
						phone={element.phone}
						email={element.email}
						delete = {() => {deleteContact(element.id)}}
						edit = {() => {}}
					/>)
				)}
			</div>
		</>
	);
};  