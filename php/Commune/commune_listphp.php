<?php
include 'database.php';

$sql = "SELECT commune.*, district.nomDistr, district.nomReg, district.code_Reg 
        FROM commune 
        INNER JOIN district ON commune.code_Distr = district.code_Distr";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
    $communes = array();

    while ($row = $result->fetch_assoc()) {
        $commune = array(
            'code_Comm' => $row['code_Comm'],
            'nomComm' => $row['nomComm'],
            'code_Distr' => $row['code_Distr'],
            'nomDistr' => $row['nomDistr'],
            'nomReg' => $row['nomReg'], 
            'code_Reg' => $row['code_Reg'], 
        );
        array_push($communes, $commune);
    }

    echo json_encode($communes);
} else {
    http_response_code(404);
    echo json_encode(["message" => "Aucune commune trouvée."]);
}
?>
