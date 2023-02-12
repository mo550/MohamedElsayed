<?php
if(isset($_POST["send_a_msg"])){
  $name = $_POST["name"];  
  $last_name = $_POST["last_name"];  
  $email = $_POST["email"];  
  $phone = $_POST["phone"];  
  $company = $_POST["phone"];  
  $message = $_POST["message"];  
  
  
$to = "mohamed.elsayed7272@gmail.com";
 //$to = "ayeshakber.cs2011@gmail.com";
$subject = "You have Received New Message - Octo Media ";

$message = '
<html>
<head>
<title>Octa Media - Contact Us</title>
</head>
<body>
<p> You have received new message </p>
<div>
<p> <b>First Name</b> : '.$name.' </p>
<p> <b>Last Name</b> : '.$last_name.' </p>
<p> <b>Email</b> : '.$email.' </p>
<p> <b>Phone</b> : '.$phone.' </p>
<p> <b>Company</b> : '.$company.' </p>
<p> <b>Message</b> : '.$message.' </p>
</div>
</body>
</html>
';

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <OctaMedia@example.com>' . "\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";

mail($to,$subject,$message,$headers);  
header("Location: https://octo-media.ca/");   
}
