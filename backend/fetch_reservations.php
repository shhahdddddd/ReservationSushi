// backend/fetch_reservations.php
<?php
include 'db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
$query = "SELECT * FROM reservations";
$stmt = $pdo->query($query);
$reservations = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($reservations);
?>
