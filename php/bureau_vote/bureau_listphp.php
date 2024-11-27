<?php
include 'database.php';

// Requête SQL pour sélectionner tous les bureaux de vote avec le nom de la fokotany associée
$sql = "SELECT b.idBV, b.salleBV, b.nbElecInscri, b.nbVotant, b.nbVoteBl, b.nbVoteNul, b.suffrageExprime, f.nomFokt, f.code_Fokt ,f.nomComm, f.nomDistr, f.nomReg, f.code_Comm, f.code_Distr, b.centreBV 
        FROM bureau_de_vote b 
        JOIN fokotany f ON b.code_Fokt = f.code_Fokt";

$bureaux = array(); // Initialisez un tableau pour stocker les bureaux de vote

if ($result = mysqli_query($mysqli, $sql)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $bureau = array(
            'idBV' => $row['idBV'],
            'salleBV' => $row['salleBV'],
            'nbElecInscri' => $row['nbElecInscri'],
            'nbVotant' => $row['nbVotant'],
            'nbVoteBl' => $row['nbVoteBl'],
            'nbVoteNul' => $row['nbVoteNul'],
            'suffrageExprime' => $row['suffrageExprime'],
            'nomFokt' => $row['nomFokt'],
            'code_Fokt' => $row['code_Fokt'],
            'nomComm' => $row['nomComm'],
            'nomDistr' => $row['nomDistr'],
            'nomReg' => $row['nomReg'],
            'code_Comm' => $row['code_Comm'],
            'code_Distr' => $row['code_Distr'],
            'centreBV' => $row['centreBV']
        );

        // Ajoutez le bureau au tableau des bureaux de vote
        $bureaux[] = $bureau;
    }

    // Renvoyez les bureaux de vote au format JSON
    echo json_encode($bureaux);

    // Libérez le résultat
    mysqli_free_result($result);
} else {
    // En cas d'erreur de requête
    http_response_code(500); // Code d'erreur interne du serveur
    echo json_encode(array('message' => 'Impossible de récupérer les bureaux de vote.'));
}

// Fermez la connexion à la base de données
mysqli_close($mysqli);
?>
