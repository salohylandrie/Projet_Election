<?php
include_once("database.php");
$emplacement = [];
$searchTerm = mysqli_real_escape_string($mysqli, $_GET['searchTerm']); // Assurez-vous de récupérer le terme de recherche depuis les paramètres GET.

// Requête SQL pour rechercher des emplacements en fonction du terme de recherche
$sql =  "SELECT * FROM fokotany WHERE code_Comm LIKE '%$searchTerm%' OR nomComm LIKE '%$searchTerm%' OR code_Fokt LIKE '%$searchTerm%' OR nomFokt LIKE '%$searchTerm%'";

if ($result = mysqli_query($mysqli, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $emplacement[$i]['code_Comm'] = $row['code_Comm'];
        $emplacement[$i]['nomComm'] = $row['nomComm'];
        $emplacement[$i]['code_Fokt'] = $row['code_Fokt'];
        $emplacement[$i]['nomFokt'] = $row['nomFokt'];
     
        $i++;
    }
    echo json_encode($emplacement);
} else {
    http_response_code(404);
}
?>
