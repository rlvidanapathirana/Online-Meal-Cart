<?php require_once('inc/connection.php') ?>

<?php 
$name = 'Dineth';
$email = 'dineth@gmail.com';
$message = 'cant find payment methord';

$query = "INSERT INTO question (name, email, message) VALUES ('{$name}', '{$email}', '{$message}')";

$result = mysqli_query($connection, $query);

if ($result) {
    echo "1 Recorded Added";
} else {
    echo " Database Quarey Failed!";
}

?>