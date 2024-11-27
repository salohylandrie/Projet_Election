<?php
include_once("database.php");
$emplacement = [];
$searchTerm = mysqli_real_escape_string($mysqli, $_GET['searchTerm']);  // Assurez-vous de récupérer le terme de recherche depuis les paramètres GET.

// Requête SQL pour rechercher des emplacements en fonction du terme de recherche
$sql = "SELECT * FROM resultat_candidat WHERE idBV LIKE '%$searchTerm%' OR code_ListeCand LIKE '%$searchTerm%' OR idcand LIKE '%$searchTerm%' OR numCand LIKE '%$searchTerm%' OR nomCand LIKE '%$searchTerm%' OR prenomCand LIKE '%$searchTerm%' OR nombreVote LIKE '%$searchTerm%' OR code_Fokt LIKE '%$searchTerm%' OR nomFokt LIKE '%$searchTerm%' OR nomComm LIKE '%$searchTerm%' OR salleBV LIKE '%$searchTerm%'"; // Utilisez la clause OR pour effectuer la recherche dans plusieurs colonnes.

if ($result = mysqli_query($mysqli, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $emplacement[$i]['idBV'] = $row['idBV'];
        $emplacement[$i]['code_ListeCand'] = $row['code_ListeCand'];
        $emplacement[$i]['idcand'] = $row['idcand'];
        $emplacement[$i]['numCand'] = $row['numCand'];
        $emplacement[$i]['nomCand'] = $row['nomCand'];
        $emplacement[$i]['prenomCand'] = $row['prenomCand'];
        $emplacement[$i]['nombreVote'] = $row['nombreVote'];
        $emplacement[$i]['code_Fokt'] = $row['code_Fokt'];
        $emplacement[$i]['nomFokt'] = $row['nomFokt'];
        $emplacement[$i]['nomComm'] = $row['nomComm'];
        $emplacement[$i]['salleBV'] = $row['salleBV'];
      
        $i++;
    }
    echo json_encode($emplacement);
} else {
    http_response_code(404);
}
?>
