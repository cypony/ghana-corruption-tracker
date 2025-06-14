fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('tableBody');
    const searchBox = document.getElementById('searchBox');

    function renderTable(filteredData) {
      tableBody.innerHTML = '';
      filteredData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${entry.name}</td>
          <td>${entry.position}</td>
          <td>${entry.status}</td>
          <td>${entry.agency}</td>
          <td>${entry.action}</td>
        `;
        tableBody.appendChild(row);
      });
    }

    renderTable(data);

    searchBox.addEventListener('input', () => {
      const keyword = searchBox.value.toLowerCase();
      const filtered = data.filter(entry =>
        Object.values(entry).some(value =>
          value.toLowerCase().includes(keyword)
        )
      );
      renderTable(filtered);
    });
  });
