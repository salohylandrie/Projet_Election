<?php
include 'database.php';

function generateFokotanyCode($mysqli) {
    $stmt = $mysqli->prepare("INSERT INTO fokotany (nomFokt, code_Comm, nomComm, code_Distr, nomDistr, nomReg) VALUES ('','', '', '', '', '')");
    $stmt->execute();
    $id_Fokt = $stmt->insert_id;
    $code_Fokt = 'F' . str_pad($id_Fokt, 6, '0', STR_PAD_LEFT);
    $stmt->close();
    return $code_Fokt;
}

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata, true);

    if (empty($request['nomFokt']) || empty($request['nomComm'])) {
        http_response_code(400);
        echo json_encode(["message" => "Veuillez fournir un nom de fokotany et un nom de commune valides."]);
    } else {
        $nomFokt = mysqli_real_escape_string($mysqli, $request['nomFokt']);
        $nomComm = mysqli_real_escape_string($mysqli, $request['nomComm']);

        $stmt = $mysqli->prepare("SELECT MAX(code_Fokt) AS maxCode FROM fokotany");
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $maxCode = $row['maxCode'];
        $nextCode = incrementFokotanyCode($maxCode);

        $stmt = $mysqli->prepare("SELECT code_Comm, code_Distr, nomDistr, nomReg FROM commune WHERE nomComm = ?");
        $stmt->bind_param("s", $nomComm);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $codeRegion = $row['code_Comm'];
            $nomDistr = $row['nomDistr'];
            $nomReg = $row['nomReg'];
            $code_Distr = $row['code_Distr'];

            $stmt = $mysqli->prepare("INSERT INTO fokotany (code_Fokt, nomFokt, code_Comm, nomComm, code_Distr, nomDistr, nomReg) VALUES (? ,?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("sssssss", $nextCode, $nomFokt, $codeRegion, $nomComm, $code_Distr, $nomDistr, $nomReg);

            if ($stmt->execute()) {
                http_response_code(201);
                echo json_encode(["message" => "Fokotany inséré avec succès.", "code_Fokt" => $nextCode]);
            } else {
                http_response_code(422);
                echo json_encode(["message" => "Échec de l'insertion du Fokotany."]);
            }
        } else {
            http_response_code(404);
            echo json_encode(["message" => "La commune spécifiée n'a pas été trouvée."]);
        }
    }
}

function incrementFokotanyCode($code) {
    $lastNumber = (int)substr($code, 1);
    $nextNumber = $lastNumber + 1;
    $nextCode = 'F' . str_pad($nextNumber, 6, '0', STR_PAD_LEFT);
    return $nextCode;
}
?>
