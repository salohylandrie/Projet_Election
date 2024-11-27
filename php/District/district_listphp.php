<?php
include 'database.php';

// Sélectionnez tous les districts avec leurs noms et codes de région correspondants
$sql = "SELECT district.*, region.nomReg 
        FROM district 
        INNER JOIN region ON district.code_Reg = region.code_Reg";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
    $districts = array();

    while ($row = $result->fetch_assoc()) {
        $district = array(
            'code_Distr' => $row['code_Distr'],
            'nomDistr' => $row['nomDistr'],
            'code_Reg' => $row['code_Reg'],
            'nomReg' => $row['nomReg']
        );
        array_push($districts, $district);
    }

    // Convertissez le tableau des districts en format JSON et renvoyez-le
    echo json_encode($districts);
} else {
    http_response_code(404);
    echo json_encode(["message" => "Aucun district trouvé."]);
}
?>
