<?php
include_once("database.php");
$emplacement = [];
$searchTerm = mysqli_real_escape_string($mysqli, $_GET['searchTerm']); // Assurez-vous de récupérer le terme de recherche depuis les paramètres GET.

// Requête SQL pour rechercher des emplacements en fonction du terme de recherche
$sql = "SELECT region.nomReg as nomReg, district.nomDistr as nomDistr, commune.nomComm as nomComm, fokotany.nomFokt as nomFokt 
        FROM region, district, commune, fokotany 
        WHERE region.code_Reg = district.code_Reg 
        AND district.code_Distr = commune.code_Distr 
        AND commune.nomComm = fokotany.nomComm 
        AND (
            region.nomReg LIKE '%$searchTerm%' 
            OR district.nomDistr LIKE '%$searchTerm%' 
            OR commune.nomComm LIKE '%$searchTerm%' 
            OR fokotany.nomFokt LIKE '%$searchTerm%'
        )"; // Utilisez la clause OR pour effectuer la recherche dans plusieurs colonnes.

if ($result = mysqli_query($mysqli, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $emplacement[$i]['nomReg'] = $row['nomReg'];
        $emplacement[$i]['nomDistr'] = $row['nomDistr'];
        $emplacement[$i]['nomComm'] = $row['nomComm'];
        $emplacement[$i]['nomFokt'] = $row['nomFokt'];
        $i++;
    }
    echo json_encode($emplacement);
} else {
    http_response_code(404);
}
?>
