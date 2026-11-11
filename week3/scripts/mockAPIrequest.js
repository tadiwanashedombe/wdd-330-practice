const userList = document.getElementById("users");
const getButton = document.querySelector("button");

async function fetchAndDisplayUsers() {
	try {
		const apiUrl = "https://jsonplaceholder.typicode.com/users";
		const response = await fetch(apiUrl);

		// Handle HTTP errors (e.g., 404 Not Found, 500 Server Error)
		if (!response.ok) {
			throw new Error(`Network response was not ok. Status: ${response.status}`);
		}

		const users = await response.json(); // await promised response

        
		users.forEach((user) => {
			// build figure content
			const tr = document.createElement("tr");
			tr.innerHTML = `<td>${user.name}</td> <td>${user.email}</td> `;
			userList.appendChild(tr);
		});
	} catch (error) {
		userList.innerHTML = `Could not load users: Error: ${error.message}`;
	}
}

fetchAndDisplayUsers();