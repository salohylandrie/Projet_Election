<?php
include_once("database.php");
$emplacement = [];
$searchTerm = mysqli_real_escape_string($mysqli, $_GET['searchTerm']);  // Assurez-vous de récupérer le terme de recherche depuis les paramètres GET.

// Requête SQL pour rechercher des emplacements en fonction du terme de recherche , 
$sql = "SELECT * FROM resultat_candidat WHERE code_ListeCand LIKE '%$searchTerm%' OR idcand LIKE '%$searchTerm%' OR code_Elec LIKE '%$searchTerm%' OR date_Elec LIKE '%$searchTerm%'"; // Utilisez la clause OR pour effectuer la recherche dans plusieurs colonnes.

if ($result = mysqli_query($mysqli, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $emplacement[$i]['idBV'] = $row['idBV'];
        $emplacement[$i]['idcand'] = $row['idcand'];
        
      
        $i++;
    }
    echo json_encode($emplacement);
} else {
    http_response_code(404);
}
?>
