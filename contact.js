
emailjs.init("saijalmakkar1192@gmail.com");

// Function to send the email
function sendEmail() {
    // event.preventDefault(); // Prevent form submission
    console.log("abc");
    const form = document.getElementById("contactme");
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Used the 'emailjs' library to send the email
    emailjs.send("service_2nc2yuh", "template_xd4tgdr", {
       
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        console.log("Hi");
        console.log("Email sent:", response);
        alert("Email sent successfully!");
    }, function(error) {
        console.error("Error sending email:", error);
        alert("Error sending email.");
    });
}
// Attach the sendEmail function to the form's submit event
document.getElementById("submit-btn").addEventListener("submit", sendEmail);