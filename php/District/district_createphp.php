<?php
include 'database.php';

// Fonction pour générer un code de district sous forme de 'D000001', 'D000002', ...
function generateDistrictCode($mysqli) {
    $stmt = $mysqli->prepare("INSERT INTO district (nomDistr, code_Reg, nomReg) VALUES ('', '', '')");
    $stmt->execute();
    $id_Distr = $stmt->insert_id;
    $code_Distr = 'D' . str_pad($id_Distr, 6, '0', STR_PAD_LEFT);
    $stmt->close();
    return $code_Distr;
}

// Récupérez les données du frontend
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata, true);

    if (empty($request['nomDistr']) || empty($request['nomReg'])) {
        http_response_code(400);
        echo json_encode(["message" => "Veuillez fournir un nom de district et un nom de région valides."]);
    } else {
        $nomDistr = mysqli_real_escape_string($mysqli, $request['nomDistr']);
        $nomReg = mysqli_real_escape_string($mysqli, $request['nomReg']);

        // Générez le code de district incrémenté
        $stmt = $mysqli->prepare("SELECT MAX(code_Distr) AS maxCode FROM district");
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $maxCode = $row['maxCode'];
        $nextCode = incrementDistrictCode($maxCode);
        
        // Récupérez le code_Reg de la région existante en fonction du nom de la région
        $stmt = $mysqli->prepare("SELECT code_Reg FROM region WHERE nomReg = ?");
        $stmt->bind_param("s", $nomReg);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $codeRegion = $row['code_Reg'];

            // Insérez le nouveau district en utilisant le code, le nom du district, le code de région et le nom de région
            $stmt = $mysqli->prepare("INSERT INTO district (code_Distr, nomDistr, code_Reg, nomReg) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $nextCode, $nomDistr, $codeRegion, $nomReg);

            if ($stmt->execute()) {
                http_response_code(201);
                echo json_encode(["message" => "District inséré avec succès.", "code_Distr" => $nextCode]);
            } else {
                http_response_code(422);
                echo json_encode(["message" => "Échec de l'insertion du district."]);
            }
        } else {
            http_response_code(404);
            echo json_encode(["message" => "La région spécifiée n'a pas été trouvée."]);
        }
    }
}

function incrementDistrictCode($code) {
    $lastNumber = (int)substr($code, 1);
    $nextNumber = $lastNumber + 1;
    $nextCode = 'D' . str_pad($nextNumber, 6, '0', STR_PAD_LEFT);
    return $nextCode;
}
?>
