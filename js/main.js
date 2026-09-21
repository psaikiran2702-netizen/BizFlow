// ===============================
// BIZFLOW MAIN JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("BizFlow website loaded successfully");


    // ===============================
    // CURRENT YEAR
    // ===============================

    const yearElement = document.querySelector("footer small");

    if (yearElement) {
        const currentYear = new Date().getFullYear();

        yearElement.innerHTML =
            `© ${currentYear} BizFlow. All Rights Reserved.`;
    }


    // ===============================
    // ANIMATED STATISTICS
    // ===============================

    const statNumbers = document.querySelectorAll(".stat-card h2");

    statNumbers.forEach(function (element) {

        const originalText = element.innerText;

        const number = parseInt(
            originalText.replace(/\D/g, "")
        );

        if (isNaN(number)) {
            return;
        }

        let currentNumber = 0;

        const increment = Math.ceil(number / 50);

        const counter = setInterval(function () {

            currentNumber += increment;

            if (currentNumber >= number) {

                currentNumber = number;

                clearInterval(counter);

            }

            if (originalText.includes("%")) {

                element.innerText =
                    currentNumber + "%";

            } else if (originalText.includes("+")) {

                element.innerText =
                    currentNumber + "+";

            } else {

                element.innerText =
                    currentNumber;

            }

        }, 30);

    });


    // ===============================
    // NAVBAR ACTIVE LINK
    // ===============================

    const currentPage =
        window.location.pathname.split("/").pop();

    const navLinks =
        document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        }

    });


    // ===============================
    // BUTTON CLICK MESSAGE
    // ===============================

    const getStartedButton =
        document.querySelector(".cta-box .btn");

    if (getStartedButton) {

        getStartedButton.addEventListener(
            "click",
            function () {

                console.log(
                    "User clicked Get Started"
                );

            }
        );

    }

});