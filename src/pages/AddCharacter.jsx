// Import necessary components from react-router-dom and other parts of the application.
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useEffect, useState } from "react";

export const AddCharacter = () => {
  const { store, dispatch } = useGlobalReducer()
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    address: "",
    phone: ""
  })
  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value })
  }
  const createContact = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${userName}/contacts/`, {
      method: "POST",
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    })
    const data = await response.json()
    console.log(data);
    dispatch({ type: "add_contact", payload: data })


  }
  const navigate = useNavigate()
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false)
  const userName = localStorage.getItem("userName")
  const editContact = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${userName}/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)

    })
    if (!response.ok) {
      console.error("Error al editar el contacto:", response.statusText);
      return
    }
    const data = await response.json()
    console.log(data);
    navigate("/")
  }
  const newContacts = (e) => {
    e.preventDefault()

    if (!newContact.name || !newContact.address || !newContact.phone || !newContact.email) {
      alert("Tienes campos sin rellenar")
      setNewContact({
        name: "",
        email: "",
        address: "",
        phone: ""
      })
      return
    };
    if (isEditing) {
      console.log("estamos editando");
      editContact()
    } else {
      createContact()
      setNewContact({
        name: "",
        email: "",
        address: "",
        phone: ""
      })
    }
  }
  useEffect(() => {
    if (id) {
      setNewContact(store.contacts.filter(contacto => contacto.id == id)[0])
      setIsEditing(true)
    } else {
      setIsEditing(false)
      setNewContact({
        name: "",
        email: "",
        address: "",
        phone: ""
      })
    }
  }, [id])
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-center">{isEditing ? "Añadir nuevo contacto" : "Editar contacto"}</h1>
      <form onSubmit={newContacts} >
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="name"
            placeholder="Nombre Completo"
            onChange={handleInputChange}
            value={newContact.name}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailAddress" className="form-label">Direccion E-mail</label>
          <input
            type="email"
            className="form-control"
            id="emailAddress"
            name="email"
            placeholder="Introduce E-mail"
            onChange={handleInputChange}
            value={newContact.email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Número de teléfono</label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            name="phone"
            placeholder="Número de teléfono"
            onChange={handleInputChange}
            value={newContact.phone}
            maxLength="9"
            minLength="9"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="homeAddress" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="homeAddress"
            name="address"
            placeholder="Introduce Dirección"
            onChange={handleInputChange}
            value={newContact.address}
            required
          />
        </div>
        <button
          type="submit"
          className="btn col-12 btn-primary">{isEditing ? "Guardar nuevo contacto" : "Guardar contacto editado"}</button>
      </form>
      <br />

      <Link to="/">
        <p className="link">o vuelve a la lista de contactos</p>
      </Link>
    </div>
  );
};
