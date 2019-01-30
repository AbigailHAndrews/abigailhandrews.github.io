<?php
if($_POST["submit"]) {
	$rec = "nutmeggg14@gmail.com";
	$subject = "Message from website";
	$sender = $_POST["name"];
	$senderEmail = $_POST["email"];
	$message = $_POST["message"];

	$mailBody = "Name: $sender\nEmail: $senderEmail\n\n$message";

	mail($rec, $subject, $mailBody, "From: $sender <$senderEmail>");
}


