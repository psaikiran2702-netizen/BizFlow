// ===============================
// BIZFLOW DASHBOARD
// ===============================

document.addEventListener("DOMContentLoaded", function () {


    // ===============================
    // CURRENT DATE
    // ===============================

    const dateElement =
        document.getElementById("currentDate");

    if (dateElement) {

        const today = new Date();

        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        dateElement.textContent =
            today.toLocaleDateString(
                "en-IN",
                options
            );
    }


    // ===============================
    // REVENUE CHART
    // ===============================

    const revenueCanvas =
        document.getElementById("revenueChart");

    if (revenueCanvas) {

        new Chart(
            revenueCanvas,
            {
                type: "line",

                data: {

                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep"
                    ],

                    datasets: [

                        {
                            label: "Revenue (₹ Lakhs)",

                            data: [
                                12,
                                14,
                                13,
                                17,
                                16,
                                20,
                                19,
                                22,
                                24.5
                            ],

                            borderWidth: 3,

                            tension: 0.4,

                            fill: true
                        }

                    ]

                },

                options: {

                    responsive: true,

                    plugins: {

                        legend: {
                            display: true
                        }

                    },

                    scales: {

                        y: {
                            beginAtZero: true
                        }

                    }

                }

            }
        );

    }


    // ===============================
    // PROJECT STATUS CHART
    // ===============================

    const projectCanvas =
        document.getElementById("projectChart");

    if (projectCanvas) {

        new Chart(
            projectCanvas,
            {
                type: "doughnut",

                data: {

                    labels: [
                        "Completed",
                        "In Progress",
                        "Planning"
                    ],

                    datasets: [

                        {
                            data: [
                                120,
                                88,
                                40
                            ],

                            borderWidth: 2

                        }

                    ]

                },

                options: {

                    responsive: true,

                    plugins: {

                        legend: {
                            position: "bottom"
                        }

                    }

                }

            }
        );

    }


    // ===============================
    // PROJECT SEARCH
    // ===============================

    const searchInput =
        document.getElementById("projectSearch");

    const tableRows =
        document.querySelectorAll(
            "#projectTable tr"
        );


    if (searchInput) {

        searchInput.addEventListener(
            "keyup",
            function () {

                const searchText =
                    searchInput.value.toLowerCase();


                tableRows.forEach(
                    function (row) {

                        const rowText =
                            row.textContent.toLowerCase();


                        if (
                            rowText.includes(searchText)
                        ) {

                            row.style.display = "";

                        } else {

                            row.style.display = "none";

                        }

                    }
                );

            }
        );

    }


    console.log(
        "BizFlow Dashboard loaded successfully"
    );

});