


const list = document.getElementById("list");
const input = document.getElementById("search");
let users = []; 


fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(res => {
				users = res; 
				renderUsers(users); 
		});


function renderUsers(filteredUsers) {
		list.innerHTML = ""; 
		filteredUsers.forEach(element => {
				const card = document.createElement("div");
				card.classList.add("card");
				card.innerHTML = `
						<div class="cardParent">
								<h3 class="name">Name: ${element.name}</h3>
								<h1>👤</h1>
								<p>Email: ${element.email}</p>
								<p>Phone: ${element.phone}</p>
								<p>Street: ${element.address.street}</p>
						</div>
				`;
				list.appendChild(card);
		});
}


input.addEventListener("input", function () {
		const searchText = input.value.toLowerCase();
		const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchText));
		renderUsers(filteredUsers);
});