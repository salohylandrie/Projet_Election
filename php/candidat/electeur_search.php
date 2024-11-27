<?php
include_once("database.php");
$emplacement = [];
$searchTerm = mysqli_real_escape_string($mysqli, $_GET['searchTerm']); // Assurez-vous de récupérer le terme de recherche depuis les paramètres GET.

// Requête SQL pour rechercher des emplacements en fonction du terme de recherche
$sql =  "SELECT * FROM candidat WHERE numCand LIKE '%$searchTerm%' OR nomCand LIKE '%$searchTerm%' OR prenomCand  LIKE '%$searchTerm%' OR idcand LIKE '%$searchTerm%'";

if ($result = mysqli_query($mysqli, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $emplacement[$i]['idcand'] = $row['idcand'];
        $emplacement[$i]['numCand'] = $row['numCand'];
        $emplacement[$i]['nomCand'] = $row['nomCand'];
        $emplacement[$i]['prenomCand'] = $row['prenomCand'];
     
        $i++;
    }
    echo json_encode($emplacement);
} else {
    http_response_code(404);
}
?>
