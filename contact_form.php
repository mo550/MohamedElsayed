<?php
if(isset($_POST["send_a_msg"])){
  $name = $_POST["name"];  
  $email = $_POST["email"];  
  $message = $_POST["message"];  
  
$to = "mohamed.elsayed7272@gmail.com";

$subject = "You have Received New Message - Mohamed Elsayed ";

$message = '
<html>
<head>
<title>Mohamed Elsayed - Contact Us</title>
</head>
<body>
<p> You have received new message </p>
<div>
<p> <b>First Name</b> : '.$name.' </p>
<p> <b>Email</b> : '.$email.' </p>
<p> <b>Message</b> : '.$message.' </p>
</div>
</body>
</html>
';

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <MohamedElsayed@example.com>' . "\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";

mail($to,$subject,$message,$headers);  
header("Location: https://mohamedelsayed.netlify.app/");   
}
