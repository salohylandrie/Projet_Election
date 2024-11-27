<?php
include 'database.php';


function generateRegionCode($mysqli) {
    $query = "SELECT MAX(SUBSTRING(code_Reg, 2) + 1) AS max_id FROM region";
    $result = $mysqli->query($query);
    $row = $result->fetch_assoc();
    $maxId = $row['max_id'];

    if ($maxId === null) {
        $maxId = 1;
    }

    $code_Reg = 'R' . str_pad($maxId, 6, '0', STR_PAD_LEFT);
    return $code_Reg;
}

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata, true);

    if (empty($request['nomReg'])) {
        http_response_code(400);
        echo json_encode(["message" => "Veuillez fournir un nom de région valide."]);
    } else {
        $nomReg = mysqli_real_escape_string($mysqli, $request['nomReg']);
        $code_Reg = generateRegionCode($mysqli);

        $stmt = $mysqli->prepare("INSERT INTO region (code_Reg, nomReg) VALUES (?, ?)");
        $stmt->bind_param("ss", $code_Reg, $nomReg);

        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(["message" => "Région insérée avec succès.", "code_Reg" => $code_Reg]);
        } else {
            http_response_code(422);
            echo json_encode(["message" => "Échec de l'insertion de la région."]);
        }
    }
}
?>
