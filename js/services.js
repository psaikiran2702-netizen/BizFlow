// =====================================
// BIZFLOW SERVICES FILTER
// =====================================

function filterServices(category, button) {

    const services =
        document.querySelectorAll(".service-item");

    const buttons =
        document.querySelectorAll(".filter-btn");


    // Reset all buttons
    buttons.forEach(function (btn) {

        btn.classList.remove("btn-primary");

        btn.classList.add("btn-outline-primary");

    });


    // Filter services
    services.forEach(function (service) {

        const serviceCategory =
            service.getAttribute("data-category");


        if (
            category === "all" ||
            serviceCategory === category
        ) {

            service.style.display = "";

        } else {

            service.style.display = "none";

        }

    });


    // Highlight selected button
    if (button) {

        button.classList.remove(
            "btn-outline-primary"
        );

        button.classList.add(
            "btn-primary"
        );

    }

}