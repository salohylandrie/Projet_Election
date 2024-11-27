<?php
include 'database.php';

// Exécute la requête SQL pour obtenir la somme du nombre de votes de chaque candidat par code_ListeCand
$query = "SELECT code_ListeCand, idcand, code_Elec, date_Elec, SUM(nombreVote) AS totalVotes
          FROM resultat_candidat
          GROUP BY code_ListeCand, idcand";

$result = $mysqli->query($query);

if ($result) {
    // Convertit les résultats en tableau associatif
    $resultArray = [];
    while ($row = $result->fetch_assoc()) {
        $resultArray[] = $row;
    }

    // Retourne le tableau au format JSON
    echo json_encode(['resultatParCodeListeCand' => $resultArray]);
} else {
    // En cas d'erreur dans la requête
    http_response_code(500);
    echo json_encode(['message' => 'Erreur lors de l\'exécution de la requête : ' . $mysqli->error]);
}

// Ferme la connexion à la base de données
$mysqli->close();
?>
