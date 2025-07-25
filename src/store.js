import { act } from "react";

export const initialStore = () => {
  return {
    user: "",
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_user': {
      const { user } = action.payload;
      console.log(action.payload);
      
      return {
        ...store,
          user: user
      }
    }
    case 'add_contact': {
      const { name, address, phone, email, id } = action.payload;

      const newContact = {
        id,
        name,
        address,
        phone,
        email
      };

      return {
        ...store,
        contacts: [...store.contacts, newContact]
      };
    }
    case "set_contacts":
      return {
        ...store,
        contacts: action.payload
      };
    default:
      throw Error('Unknown action.');
  }
}