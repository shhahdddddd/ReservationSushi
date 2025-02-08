
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
include 'db.php';
$query = "SELECT * FROM client";
$stmt = $pdo->query($query);
$deliveries = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($deliveries);
?>
