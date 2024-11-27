<?php
include 'database.php';

// Récupérez le code_ListeCand depuis les paramètres de l'URL
if (isset($_GET['code_ListeCand'])) {
    $code_ListeCand = $_GET['code_ListeCand'];

    // Préparez la requête SQL pour récupérer les noms des candidats en fonction du code_ListeCand
    $stmt = $mysqli->prepare("SELECT nomCand, nomListe FROM candidat WHERE code_ListeCand = ?");
    $stmt->bind_param("s", $code_ListeCand);

    // Exécutez la requête
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        $nomsCandidats = [];
        $nomListe = [];

        // Parcourez les résultats et ajoutez les noms des candidats au tableau
        while ($row = $result->fetch_assoc()) {
            $nomsCandidats[] = $row['nomCand'];
            $nomListe[] = $row['nomListe'];
        }

        // Retournez les noms des candidats sous forme de JSON
        echo json_encode($nomsCandidats);
    } else {
        // En cas d'erreur de la requête
        http_response_code(500); // Code d'erreur serveur
        echo json_encode(["message" => "Erreur lors de la récupération des noms de candidats."]);
    }
} else {
    // En cas de code_ListeCand manquant dans les paramètres de l'URL
    http_response_code(400); // Code de mauvaise requête
    echo json_encode(["message" => "Paramètre 'code_ListeCand' manquant dans l'URL."]);
}