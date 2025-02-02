function createTable() {
  // Get table element by ID
  const table = document.getElementById("myTable");
  
  // Clear any existing table content
  table.innerHTML = "";

  // Get the number of rows and columns from the user
  const rows = parseInt(prompt("Input number of rows"));
  const columns = parseInt(prompt("Input number of columns"));

  // Generate the table rows and columns
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow(); // Create a new row
    for (let j = 0; j < columns; j++) {
      const cell = row.insertCell(); // Create a new cell
      cell.textContent = `Row-${i} Column-${j}`; // Set the cell content
    }
  }
}
