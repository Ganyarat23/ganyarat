
<?php
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: POST');
header("Content-Type: application/json; charset=UTF-8");

$mysqli = new mysqli("localhost", "root", "", "warehouse");
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

$sql = "INSERT INTO `products`
        (`productCode`, `productName`, `productLine`, `productScale`, `productVendor`,
         `productDescription`, `quantityInStock`, `buyPrice`, `MSRP`) 
        VALUES (?,?,?,?,?,?,?,?,?)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("ssssssidd", $v1, $v2,$v3,$v4,$v5,$v6,$v7,$v8,$v9); 

$input = json_decode(file_get_contents('php://input'));
//var_dump($input);
$v1 = $input->c1;
$v2 = $input->c2;
$v3 = $input->c3;
$v4 = $input->c4;
$v5 = $input->c5;
$v6 = $input->c6;
$v7 = $input->c7;
$v8 = $input->c8;
$v9 = $input->c9;
if($stmt->execute()){
    echo $stmt->affected_rows;
}else{
    echo -1;
}

$stmt->close();
$mysqli->close();
?>
