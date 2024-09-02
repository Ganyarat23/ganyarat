.<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "warehouse");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "
DELETE FROM products
WHERE code = ?";

$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

$v1 = "โค้ก"; // Assuming this is the code you want to delete

$stmt->bind_param("s", $v1); // Bind parameter

if ($stmt->execute()) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>