<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    // Email address where you want to receive messages
    $to = 'rmmalizon@gmail.com';
    $subject = 'New message from your website';
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    mail($to, $subject, $body, $headers);

    // Redirect back to the contact page or show a success message
    header("Location: contact.html?status=success");
    exit;
}
?>