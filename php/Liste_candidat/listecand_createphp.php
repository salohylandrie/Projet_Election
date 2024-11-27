<?php
include 'database.php';


function generateRegionCode($mysqli) {
    $query = "SELECT MAX(SUBSTRING(code_ListeCand, 2) + 1) AS max_id FROM liste_candidat";
    $result = $mysqli->query($query);
    $row = $result->fetch_assoc();
    $maxId = $row['max_id'];

    if ($maxId === null) {
        $maxId = 1;
    }

    $code_ListeCand = 'L' . str_pad($maxId, 6, '0', STR_PAD_LEFT);
    return $code_ListeCand;
}

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata, true);

    if (empty($request['nomListe'])) {
        http_response_code(400);
        echo json_encode(["message" => "Veuillez fournir un nom de région valide."]);
    } else {
        $nomListe = mysqli_real_escape_string($mysqli, $request['nomListe']);
        $code_ListeCand = generateRegionCode($mysqli);

        $stmt = $mysqli->prepare("INSERT INTO liste_candidat (code_ListeCand, nomListe) VALUES (?, ?)");
        $stmt->bind_param("ss", $code_ListeCand, $nomListe);

        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(["message" => "Région insérée avec succès.", "code_ListeCand" => $code_Reg]);
        } else {
            http_response_code(422);
            echo json_encode(["message" => "Échec de l'insertion de la région."]);
        }
    }
}
?>
