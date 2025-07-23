export const getContacts = async () => {
	const response = await fetch("https://playground.4geeks.com/contact/agendas/mario");
	if (!response.ok) {
		console.log("la agenda no existe");
		await createAgenda(); 
		return ;
	}
	const data = await response.json();
	console.log(data);
	return data.contacts;
};

export const createAgenda = async () => {
	const response = await fetch("https://playground.4geeks.com/contact/agendas/mario", {
		method: "POST"
	});
	console.log(response);
	const data = await response.json();
	console.log(data);
	return data;
};

export const deleteContact = async (id) => {
	const response = await fetch(`https://playground.4geeks.com/contact/agendas/mario/contacts/${id}`, {
		method: "DELETE"
	});
	console.log(response);
	return response;
};