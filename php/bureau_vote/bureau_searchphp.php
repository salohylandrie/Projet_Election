<?php
include_once("database.php");
$emplacement = [];

// Vérifiez si le paramètre 'searchTerm' existe dans les paramètres GET.
if (isset($_GET['searchTerm'])) {
    $searchTerm = mysqli_real_escape_string($mysqli, $_GET['searchTerm']);

    // Requête SQL pour rechercher des bureaux de vote en fonction du terme de recherche
    $sql = "SELECT * FROM bureau_de_vote WHERE salleBV LIKE '%$searchTerm%' OR nbElecInscri LIKE '%$searchTerm%' OR nbVotant  LIKE '%$searchTerm%' OR nbVoteBl LIKE '%$searchTerm%' OR nbVoteNul LIKE '%$searchTerm%' OR idBV LIKE '%$searchTerm'";

    if ($result = mysqli_query($mysqli, $sql)) {
        $i = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $emplacement[$i]['idBV'] = $row['idBV'];
            $emplacement[$i]['salleBV'] = $row['salleBV'];
            $emplacement[$i]['nbElecInscri'] = $row['nbElecInscri'];
            $emplacement[$i]['nbVotant'] = $row['nbVotant'];
            $emplacement[$i]['nbVoteBl'] = $row['nbVoteBl'];
            $emplacement[$i]['nbVoteNul'] = $row['nbVoteNul'];
            $i++;
        }
        echo json_encode($emplacement);
    } else {
        http_response_code(404);
    }
} else {
    // Gérez le cas où le paramètre 'searchTerm' est manquant ou vide.
    echo json_encode([]); // Réponse JSON vide.
}
?>
