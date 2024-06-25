
  
  



const names = [
    "Alice Johnson", "Bob Brown", "Charlie Davis", "Diana Evans", 
    "Edward Foster", "Fiona Garcia", "George Harris", "Hannah Ivanov", 
    "Isaac Johnson", "Jessica King"
];

const countries = [
    { name: "USA", flag: "https://flagcdn.com/us.svg" },
    { name: "UK", flag: "https://flagcdn.com/gb.svg" },
    { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { name: "Germany", flag: "https://flagcdn.com/de.svg" },
    { name: "France", flag: "https://flagcdn.com/fr.svg" },
    { name: "Japan", flag: "https://flagcdn.com/jp.svg" },
    { name: "Australia", flag: "https://flagcdn.com/au.svg" },
    { name: "India", flag: "https://flagcdn.com/in.svg" },
    { name: "Brazil", flag: "https://flagcdn.com/br.svg" },
    { name: "South Korea", flag: "https://flagcdn.com/kr.svg" }
];

function generateRandomWithdrawal() {
    const nameIndex = Math.floor(Math.random() * names.length);
    const name = names.splice(nameIndex, 1)[0];
    names.push(name); // Move the name to the end of the array to cycle through

    const amount = (Math.random() * (50000 - 100) + 100).toFixed(2); // Limit to 50k
    const country = countries[Math.floor(Math.random() * countries.length)];
    const timestamp = new Date().toLocaleString();

    return { name, amount, country, timestamp };
}

function updateTable() {
    const tableBody = document.querySelector('#withdrawalsTable tbody');
    const newWithdrawal = generateRandomWithdrawal();

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${newWithdrawal.name}</td>
        <td>$${newWithdrawal.amount}</td>
        <td><img src="${newWithdrawal.country.flag}" alt="${newWithdrawal.country.name} flag" class="flag"> ${newWithdrawal.country.name}</td>
        <td>${newWithdrawal.timestamp}</td>
    `;
    tableBody.appendChild(row);

    // Remove old rows to keep the table length manageable
    if (tableBody.rows.length > 10) {
        tableBody.deleteRow(0);
    }
}

// Update the table every second
setInterval(updateTable, 1000);

// Initial load with some data
for (let i = 0; i < 10; i++) {
    updateTable();
}


