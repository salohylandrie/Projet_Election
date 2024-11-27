<?php
include_once("database.php");
$emplacement = [];
$searchTerm = mysqli_real_escape_string($mysqli, $_GET['searchTerm']); // Assurez-vous de récupérer le terme de recherche depuis les paramètres GET.

// Requête SQL pour rechercher des emplacements en fonction du terme de recherche
$sql =  "SELECT * FROM liste_candidat WHERE code_ListeCand LIKE '%$searchTerm%' OR nomListe LIKE '%$searchTerm%'";

if ($result = mysqli_query($mysqli, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $emplacement[$i]['code_ListeCand'] = $row['code_ListeCand'];
        $emplacement[$i]['nomListe'] = $row['nomListe'];
        
     
        $i++;
    }
    echo json_encode($emplacement);
} else {
    http_response_code(404);
}
?>
