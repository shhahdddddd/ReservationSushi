<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"));

if (isset($data->username) && isset($data->password)) {
    $username = trim($data->username);
    $password = trim($data->password);

    // Check if the credentials match the hardcoded ones
    if ($username === "admin" && $password === "admin") {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid credentials"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Username or password missing"]);
}
?>
