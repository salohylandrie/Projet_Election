<?php
include 'database.php';


$sql = "SELECT fokotany.*, commune.nomComm ,commune.nomDistr , commune.nomReg
        FROM fokotany 
        INNER JOIN commune ON fokotany.code_Comm = commune.code_Comm";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
    $fokotanys = array();

    while ($row = $result->fetch_assoc()) {
        $fokotany = array(
            'code_Fokt' => $row['code_Fokt'],
            'nomFokt' => $row['nomFokt'],
            'code_Comm' => $row['code_Comm'],
            'nomComm' => $row['nomComm'],
            'nomDistr' => $row['nomDistr'],
            'nomReg' => $row['nomReg'],
           
        );
        array_push($fokotanys, $fokotany);
    }

  
    echo json_encode($fokotanys);
} else {
    http_response_code(404);
    echo json_encode(["message" => "Aucun fokotany trouvé."]);
}
?>
