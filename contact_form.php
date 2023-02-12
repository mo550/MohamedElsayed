<?php
if(!empty($_POST["send_a_msg"])) {
  $userName = $_POST["userName"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $toEmail = "mohamed.elsayed7272@gmail.com";

  $message = '
    <html>
    <head>
    <title>Mohamed Elsayed - Contact Us</title>
    </head>
    <body>
      <p> You have received new message </p>
      <div>
      <p> <b>First Name</b> : '.$userName.' </p>
      <p> <b>Last Name</b> : '.$email.' </p>
      <p> <b>Email</b> : '.$message.' </p>
    </body>
    </html>
    ';

    mail($toEmail, $userName, $message);
}
?>