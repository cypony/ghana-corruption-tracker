
const data = [
    {
        name: "Ken Ofori-Atta",
        position: "Former Finance Minister",
        status: "Fugitive",
        agency: "OSP, Interpol",
        action: "Refused to attend OSP hearing in Feb 2025",
        profile: "Interpol Red Notice issued; allegedly fled jurisdiction."
    },
    {
        name: "Cecilia Dapaah",
        position: "Former Minister for Sanitation",
        status: "Ongoing",
        agency: "OSP",
        action: "Over GH₵2.73M & US$590K found at home",
        profile: "OSP-led investigation into unexplained wealth."
    },
    {
        name: "Charles Adu Boahen",
        position: "Former Deputy Finance Minister",
        status: "Cleared",
        agency: "OSP",
        action: "Cleared after 'Galamsey Economy' probe",
        profile: "Temporarily cleared after investigation; watch continues."
    }
];

function populateTable() {
    const body = document.getElementById("tracker-body");
    const statusFilter = document.getElementById("statusFilter").value;
    const agencyFilter = document.getElementById("agencyFilter").value.toLowerCase();
    body.innerHTML = "";

    data.forEach((item, index) => {
        if ((statusFilter && item.status !== statusFilter) ||
            (agencyFilter && !item.agency.toLowerCase().includes(agencyFilter))) return;

        const row = document.createElement("tr");
        row.innerHTML = \`
            <td><a href="#" onclick="openModal(\${index})">\${item.name}</a></td>
            <td>\${item.position}</td>
            <td>\${item.status}</td>
            <td>\${item.agency}</td>
            <td>\${item.action}</td>
        \`;
        body.appendChild(row);
    });
}

function openModal(index) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    const item = data[index];
    modalBody.innerHTML = \`
        <h2>\${item.name}</h2>
        <p><strong>Position:</strong> \${item.position}</p>
        <p><strong>Status:</strong> \${item.status}</p>
        <p><strong>Agency Involved:</strong> \${item.agency}</p>
        <p><strong>Last Known Action:</strong> \${item.action}</p>
        <p><strong>Profile:</strong> \${item.profile}</p>
    \`;
    modal.classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

document.getElementById("statusFilter").addEventListener("change", populateTable);
document.getElementById("agencyFilter").addEventListener("change", populateTable);
populateTable();
