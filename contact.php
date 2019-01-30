<?php
	echo $rec = "nutmeggg14@gmail.com";
	echo $subject = "Message from website";
	echo $sender = "Larisa";
	echo $senderEmail = "lmandrew@iastate.edu";
	echo $message = "hello"

	echo $mailBody = "Name: $sender\nEmail: $senderEmail\n\n$message";

	mail($rec, $subject, $mailBody, "From: $sender <$senderEmail>");


?>
