export const initialStore = () => {
  return {
    contacts: [{
      name: "",
      address: "",
      phone: "",
      mail: "",
      id: "0"
    }]

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_contact':

      const { name, address, phone, mail, id} = action.payload

      return {
        ...store,
        contacts: store.contacts.map((contact) => (contact.id === id ? { ...contact, name: name, address: address, phone: phone, mail: mail } : contact))
      };
    default:
      throw Error('Unknown action.');
  }
}