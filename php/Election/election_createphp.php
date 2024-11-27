<?php
include 'database.php';

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata, true);

    if (empty($request['date_Elec']) || empty($request['code_ListeCand'])) {
        http_response_code(400);
        echo json_encode(["message" => "Veuillez fournir une date et un code ListeCand valides."]);
    } else {
        $date_Elec = $request['date_Elec'];
        $code_ListeCand = $request['code_ListeCand'];

        // Récupérer les noms de candidats associés au code_ListeCand depuis la table candidat
        $stmt = $mysqli->prepare("SELECT idcand FROM candidat WHERE code_ListeCand = ?");
        $stmt->bind_param("s", $code_ListeCand);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $nomCandArray = array();

            while ($row = $result->fetch_assoc()) {
                $nomCandArray[] = $row['idcand'];
            }

            // Générer un code_Elec unique
            $stmt = $mysqli->prepare("SELECT MAX(code_Elec) AS maxCode FROM election");
            $stmt->execute();
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();
            $maxCode = $row['maxCode'];
            $nextCode = incrementElectionCode($maxCode);

            // Insérer les noms de candidats dans la table election
            foreach ($nomCandArray as $nomCandidat) {
                $stmt = $mysqli->prepare("INSERT INTO election (code_Elec, date_Elec, code_ListeCand) VALUES (?, ?, ?)");
                $stmt->bind_param("sss", $nextCode, $date_Elec, $code_ListeCand);

                if ($stmt->execute()) {
                    http_response_code(201);
                    echo json_encode(["message" => "Élection insérée avec succès.", "code_Elec" => $nextCode]);
                } else {
                    http_response_code(422);
                    echo json_encode(["message" => "Échec de l'insertion de l'élection."]);
                }
            }
        } else {
            http_response_code(404);
            echo json_encode(["message" => "Aucun nom de candidat associé au code_ListeCand spécifié n'a été trouvé."]);
        }
    }
}

function incrementElectionCode($code) {
    $lastNumber = (int)substr($code, 1);
    $nextNumber = $lastNumber + 1;
    $nextCode = 'E' . str_pad($nextNumber, 6, '0', STR_PAD_LEFT);
    return $nextCode;
}
?>
