<?php require_once('inc/connection.php');



		$name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["mes"];

		if (!($_POST['name']=="" || $_POST['email']=="" ||  $_POST['mes']=="" )) {
			
		
		

		$query = "INSERT INTO question (name, email, message) VALUES ('$name', '$email', '$message')";

		$result = mysqli_query($connection, $query);

			if ($result) {
				echo "1 Recorded Added";
			} else {
				echo " Database Quarey Failed!";
			}
		}	
?>
