<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "", "cv_database");

$data = json_decode(file_get_contents("php://input"), true);

if (empty($data['name'])) {
  echo json_encode([
    "message" => "Name is required"
  ]);
  exit();
}

$name = $conn->real_escape_string($data['name']);

$sql = "INSERT INTO contacts (name) VALUES ('$name')";

if ($conn->query($sql) === TRUE) {
  echo json_encode([
    "message" => "Data saved successfully"
  ]);
} else {
  echo json_encode([
    "message" => "Error saving data"
  ]);
}
?>