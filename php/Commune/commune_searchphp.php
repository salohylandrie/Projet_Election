<?php
include_once("database.php");
$emplacement = [];
$searchTerm = mysqli_real_escape_string($mysqli, $_GET['searchTerm']); // Assurez-vous de récupérer le terme de recherche depuis les paramètres GET.

// Requête SQL pour rechercher des emplacements en fonction du terme de recherche
$sql = "SELECT * FROM commune WHERE commune.code_Comm LIKE '%$searchTerm%' OR commune.nomComm LIKE '%$searchTerm%' OR commune.nomDistr LIKE '%$searchTerm%' OR commune.nomReg LIKE '%$searchTerm%'";

if ($result = mysqli_query($mysqli, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $emplacement[$i]['code_Comm'] = $row['code_Comm'];
        $emplacement[$i]['nomComm'] = $row['nomComm'];
        $emplacement[$i]['nomDistr'] = $row['nomDistr'];
        $emplacement[$i]['nomReg'] = $row['nomReg'];
      
        $i++;
    }
    echo json_encode($emplacement);
} else {
    http_response_code(404);
}
?>
