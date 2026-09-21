// =====================================
// BIZFLOW CLIENT MANAGEMENT
// =====================================


// Get saved clients from localStorage

let clients =
    JSON.parse(
        localStorage.getItem("bizflowClients")
    ) || [];


// =====================================
// DEFAULT CLIENTS
// =====================================

if (clients.length === 0) {

    clients = [

        {
            id: 1,
            name: "Rahul Sharma",
            email: "rahul@example.com",
            company: "TechVision",
            phone: "9876543210",
            service: "Business Analytics",
            status: "Active"
        },

        {
            id: 2,
            name: "Priya Reddy",
            email: "priya@example.com",
            company: "Nova Solutions",
            phone: "9876543211",
            service: "Business Growth",
            status: "Active"
        },

        {
            id: 3,
            name: "Arjun Kumar",
            email: "arjun@example.com",
            company: "BrightCorp",
            phone: "9876543212",
            service: "Project Management",
            status: "Inactive"
        }

    ];

    saveClients();

}


// =====================================
// SAVE CLIENTS
// =====================================

function saveClients() {

    localStorage.setItem(
        "bizflowClients",
        JSON.stringify(clients)
    );

}


// =====================================
// DISPLAY CLIENTS
// =====================================

function displayClients(list = clients) {

    const tableBody =
        document.getElementById(
            "clientTableBody"
        );

    const emptyState =
        document.getElementById(
            "emptyState"
        );


    tableBody.innerHTML = "";


    if (list.length === 0) {

        emptyState.style.display = "block";

        updateStats();

        return;

    }


    emptyState.style.display = "none";


    list.forEach(function (client) {

        const firstLetter =
            client.name.charAt(0).toUpperCase();


        const statusClass =
            client.status === "Active"
                ? "bg-success"
                : "bg-secondary";


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>

                <div class="d-flex align-items-center gap-2">

                    <div class="client-avatar">
                        ${firstLetter}
                    </div>

                    <div>

                        <strong>
                            ${client.name}
                        </strong>

                        <br>

                        <small class="text-muted">
                            ${client.phone}
                        </small>

                    </div>

                </div>

            </td>


            <td>
                ${client.company}
            </td>


            <td>
                ${client.email}
            </td>


            <td>
                ${client.service}
            </td>


            <td>

                <span class="badge ${statusClass}">
                    ${client.status}
                </span>

            </td>


            <td>

                <button
                    class="btn btn-sm btn-outline-danger"
                    onclick="deleteClient(${client.id})"
                >

                    <i class="bi bi-trash"></i>

                </button>

            </td>

        `;


        tableBody.appendChild(row);

    });


    updateStats();

}


// =====================================
// ADD CLIENT
// =====================================

const clientForm =
    document.getElementById(
        "clientForm"
    );


clientForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const newClient = {

            id: Date.now(),

            name:
                document.getElementById(
                    "clientName"
                ).value.trim(),

            email:
                document.getElementById(
                    "clientEmail"
                ).value.trim(),

            company:
                document.getElementById(
                    "clientCompany"
                ).value.trim(),

            phone:
                document.getElementById(
                    "clientPhone"
                ).value.trim(),

            service:
                document.getElementById(
                    "clientService"
                ).value,

            status:
                document.getElementById(
                    "clientStatus"
                ).value

        };


        clients.push(newClient);


        saveClients();


        displayClients();


        clientForm.reset();


        alert(
            "Client added successfully!"
        );

    }
);


// =====================================
// DELETE CLIENT
// =====================================

function deleteClient(id) {

    const confirmed =
        confirm(
            "Are you sure you want to delete this client?"
        );


    if (!confirmed) {
        return;
    }


    clients =
        clients.filter(function (client) {

            return client.id !== id;

        });


    saveClients();


    displayClients();

}


// =====================================
// SEARCH CLIENTS
// =====================================

const searchInput =
    document.getElementById(
        "clientSearch"
    );


searchInput.addEventListener(
    "input",
    function () {

        const searchText =
            searchInput.value.toLowerCase();


        const filteredClients =
            clients.filter(function (client) {

                return (

                    client.name
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    client.company
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    client.email
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    client.service
                        .toLowerCase()
                        .includes(searchText)

                );

            });


        displayClients(filteredClients);

    }
);


// =====================================
// UPDATE STATISTICS
// =====================================

function updateStats() {

    const total =
        clients.length;


    const active =
        clients.filter(function (client) {

            return client.status === "Active";

        }).length;


    const totalElement =
        document.getElementById(
            "totalClients"
        );


    const activeElement =
        document.getElementById(
            "activeClients"
        );


    const newElement =
        document.getElementById(
            "newClients"
        );


    totalElement.textContent =
        total;


    activeElement.textContent =
        active;


    newElement.textContent =
        clients.length;
}


// =====================================
// INITIAL DISPLAY
// =====================================

displayClients();


console.log(
    "BizFlow Clients loaded successfully"
);