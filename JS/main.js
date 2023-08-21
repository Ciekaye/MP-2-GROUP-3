document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".c-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch("send-email.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            if (data === "success") {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Error sending message. Please try again later.");
            }
        })
        .catch(error => {
            alert("An error occurred. Please try again later.");
        });
    });
});
