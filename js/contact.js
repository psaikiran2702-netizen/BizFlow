// =====================================
// BIZFLOW CONTACT FORM
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const form =
        document.getElementById("contactForm");

    const message =
        document.getElementById("contactMessage");

    const counter =
        document.getElementById("charCounter");

    const successMessage =
        document.getElementById("successMessage");


    // =====================================
    // CHARACTER COUNTER
    // =====================================

    if (message) {

        message.addEventListener(
            "input",
            function () {

                counter.textContent =
                    message.value.length + " / 500";

            }
        );

    }


    // =====================================
    // FORM SUBMISSION
    // =====================================

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("contactName")
                    .value.trim();

            const email =
                document
                    .getElementById("contactEmail")
                    .value.trim();

            const phone =
                document
                    .getElementById("contactPhone")
                    .value.trim();

            const service =
                document
                    .getElementById("contactService")
                    .value;

            const messageText =
                message.value.trim();


            // =====================================
            // PHONE VALIDATION
            // =====================================

            const phonePattern =
                /^[6-9]\d{9}$/;


            if (!phonePattern.test(phone)) {

                alert(
                    "Please enter a valid 10-digit Indian phone number."
                );

                return;

            }


            // =====================================
            // MESSAGE VALIDATION
            // =====================================

            if (messageText.length < 10) {

                alert(
                    "Please enter at least 10 characters in your message."
                );

                return;

            }


            // =====================================
            // CREATE CONTACT MESSAGE
            // =====================================

            const contactData = {

                id: Date.now(),

                name: name,

                email: email,

                phone: phone,

                service: service,

                message: messageText,

                date:
                    new Date().toLocaleString("en-IN")

            };


            // =====================================
            // GET EXISTING MESSAGES
            // =====================================

            let messages =
                JSON.parse(
                    localStorage.getItem(
                        "bizflowMessages"
                    )
                ) || [];


            // =====================================
            // SAVE MESSAGE
            // =====================================

            messages.push(contactData);


            localStorage.setItem(
                "bizflowMessages",
                JSON.stringify(messages)
            );


            // =====================================
            // SHOW SUCCESS MESSAGE
            // =====================================

            successMessage.style.display =
                "block";


            // =====================================
            // RESET FORM
            // =====================================

            form.reset();


            counter.textContent =
                "0 / 500";


            // =====================================
            // HIDE SUCCESS MESSAGE
            // =====================================

            setTimeout(
                function () {

                    successMessage.style.display =
                        "none";

                },
                5000
            );


            console.log(
                "Contact message saved successfully"
            );

        }
    );


    console.log(
        "BizFlow Contact page loaded successfully"
    );

});