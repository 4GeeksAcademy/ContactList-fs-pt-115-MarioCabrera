import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Contacts } from "../components/Contacts.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<div className="container mx-auto mt-4">
				<div className="row">
					<div className="col-12 d-flex justify-content-end mb-3">
						<Link to={"/Demo"}>
							<button className="btn btn-success">Añadir nuevo contacto</button>
						</Link>
					</div>
				</div>
				{store.contacts.map((element, index) => {
					<Contacts
						key={index}
						name={element.name}
					/>
				})}
			</div>
		</>
	);
};  