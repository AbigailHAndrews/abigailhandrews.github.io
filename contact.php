<?php
if(isset($_GET["submit"])) {
	echo $rec = "nutmeggg14@gmail.com";
	echo $subject = "Message from website";
	echo $sender = $_GET["name"];
	echo $senderEmail = $_GET["email"];
	echo $message = $_GET["message"];

	$mailBody = "Name: $sender\nEmail: $senderEmail\n\n$message";

	mail($rec, $subject, $mailBody, "From: $sender <$senderEmail>");
}


