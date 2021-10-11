<?php

$connection = mysqli_connect('localhost','root','','cart');

//check the connection
if (mysqli_connect_error()){
    die('Database connection failed' . mysqli_connect_error());
}
else{
    echo "Connection Successfull";
}

?>