<?php
include 'database.php';

function generateCommuneCode($mysqli) {
    $stmt = $mysqli->prepare("INSERT INTO commune (nomComm, code_Distr, nomDistr,code_Reg, nomReg) VALUES ('', '', '', '', '')");
    $stmt->execute();
    $id_Comm = $stmt->insert_id;
    $code_Comm = 'C' . str_pad($id_Comm, 6, '0', STR_PAD_LEFT);
    $stmt->close();
    return $code_Comm;
}

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata, true);

    if (empty($request['nomComm']) || empty($request['nomDistr'])) {
        http_response_code(400);
        echo json_encode(["message" => "Veuillez fournir un nom de commune et un nom de district valides."]);
    } else {
        $nomComm = mysqli_real_escape_string($mysqli, $request['nomComm']);
        $nomDistr = mysqli_real_escape_string($mysqli, $request['nomDistr']);

        $stmt = $mysqli->prepare("SELECT MAX(code_Comm) AS maxCode FROM commune");
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $maxCode = $row['maxCode'];
        $nextCode = incrementCommuneCode($maxCode);

        $stmt = $mysqli->prepare("SELECT code_Distr FROM district WHERE nomDistr = ?");
        $stmt->bind_param("s", $nomDistr);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $codeDistr = $row['code_Distr'];

            // Récupérez le nom de la région (nomReg) en fonction du code du district (code_Distr)
            $stmt = $mysqli->prepare("SELECT code_Reg,nomReg FROM district WHERE code_Distr = ?");
            $stmt->bind_param("s", $codeDistr);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows == 1) {
                $row = $result->fetch_assoc();
                $nomRegion = $row['nomReg'];
                $code_Reg = $row['code_Reg'];

                $stmt = $mysqli->prepare("INSERT INTO commune (code_Comm, nomComm, code_Distr, nomDistr,code_Reg, nomReg) VALUES (? , ?, ?, ?, ?, ?)");
                $stmt->bind_param("ssssss", $nextCode, $nomComm, $codeDistr, $nomDistr, $code_Reg, $nomRegion);

                if ($stmt->execute()) {
                    http_response_code(201);
                    echo json_encode(["message" => "Commune insérée avec succès.", "code_Comm" => $nextCode, "nomReg" => $nomRegion]);
                } else {
                    http_response_code(422);
                    echo json_encode(["message" => "Échec de l'insertion de la commune."]);
                }
            } else {
                http_response_code(404);
                echo json_encode(["message" => "La région spécifiée n'a pas été trouvée."]);
            }
        } else {
            http_response_code(404);
            echo json_encode(["message" => "Le district spécifié n'a pas été trouvé."]);
        }
    }
}

function incrementCommuneCode($code) {
    $lastNumber = (int)substr($code, 1);
    $nextNumber = $lastNumber + 1;
    $nextCode = 'C' . str_pad($nextNumber, 6, '0', STR_PAD_LEFT);
    return $nextCode;
}
?>
