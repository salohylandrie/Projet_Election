


<?php
include 'database.php';
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['idBV'])) {
        $idBV = $_GET['idBV'];

  
        $sql = "SELECT * FROM bureau_de_vote WHERE idBV = '$idBV'";

        $result = $mysqli->query($sql);

        if ($result->num_rows === 1) {
            $row = $result->fetch_assoc();
            echo json_encode($row);
        } else {
            echo json_encode(array('message' => 'Électeur introuvable.'));
        }
    } else {
        echo json_encode(array('message' => 'ID de l\'électeur manquant.'));
    }
} else {
    echo json_encode(array('message' => 'Méthode HTTP non autorisée.'));
}

$mysqli->close();
?>

    