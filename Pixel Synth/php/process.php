<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email recipient 
    $to = "pixelsynths@mail.com";

    // Email subject
    $subject = "Contact Form Submission from $name";

    // Email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email";

// Send the email
if (mail($to, $subject, $email_message, $headers)) {
    echo "Thank you for your message! We'll be in touch shortly.";
} else {
    echo "Oops! Something went wrong. Please try again later.";
}



?>
