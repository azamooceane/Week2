const tableBody = document.getElementById('prices');

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
  .then(response => response.json())
  .then(data => {
    data.forEach(coin => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${coin.image}" alt="${coin.name}" width="30"></td>
        <td>${coin.name}</td>
        <td>${coin.symbol.toUpperCase()}</td>
        <td>$${coin.current_price.toFixed(2)}</td>
        <td>${new Date(coin.last_updated).toLocaleString()}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching data:', error));