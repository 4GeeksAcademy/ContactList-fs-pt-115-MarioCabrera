// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [contact, setContact] = useState({
    name: "",
    address: "",
    phone: "",
    email: ""
  })
  const newContact = (e) => {
    e.preventDefault()
    console.log(e.target);

    if (!name || !address || !phone || !email) return;
    const newContact = {
      name: name,
      address: address,
      phone: phone,
      email: email
    }
    setContact(newContact)
    dispatch({
      type: "add_contact",
      payload: newContact
    })
    setName("");
    setAddress("");
    setPhone("");
    setEmail("");

  }
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-center">Añadir un nuevo contacto</h1>
      <form onSubmit={newContact} >
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Nombre Completo"
            onChange={(e) => { setName(e.target.value) }}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailAddress" className="form-label">Direccion E-mail</label>
          <input
            type="email"
            className="form-control"
            id="emailAddress"
            placeholder="Introduce E-mail"
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Número de teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="Número de teléfono"
            onChange={(e) => { setPhone(e.target.value) }}
            value={phone}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="homeAddress" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="homeAddress"
            placeholder="Introduce Dirección"
            onChange={(e) => { setAddress(e.target.value) }}
            value={address}
          />
        </div>
        <button
          type="submit"
          className="btn col-12 btn-primary">guardar</button>
      </form>
      <br />

      <Link to="/">
        <p className="link">o vuelve a la lista de contactos</p>
      </Link>
    </div>
  );
};
