<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "phpmyadmin"; 

$conn = new mysqli($host, $user, $password, $database);


if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
