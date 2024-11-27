<?php
include 'database.php';

// Récupérer les données de la table resultat_candidat
$stmt = $mysqli->prepare("SELECT idBV, code_ListeCand, idcand, numCand, nomCand, prenomCand, nombreVote, code_Fokt, nomFokt, nomComm, salleBV ,code_Elec, date_Elec FROM resultat_candidat");
$stmt->execute();
$result = $stmt->get_result();
$rows = $result->fetch_all(MYSQLI_ASSOC);

// Retourner les données au format JSON
echo json_encode($rows);

$stmt->close();
$mysqli->close();
?>
