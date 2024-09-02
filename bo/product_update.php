<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$conn = new mysqli("localhost", "root", "", "warehouse");


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "UPDATE products
        SET `name`=?, `picture`=?, `category`=?, `price`=?, `cost`=?
        WHERE `code`=?";


$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

$v1 = "โค้ก";         
$v2 = "coke.jpg";     
$v3 = "เครื่องดื่ม";  
$v4 = 24;             
$v5 = 5.00;           
$v6 = 'A001';         

$stmt->bind_param("sssdss", $v1, $v2, $v3, $v4, $v5, $v6);


if ($stmt->execute()) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $stmt->error;
}


$stmt->close();
$conn->close();
?>
