<?php
if (isset($_GET['idBV'])) {
    $idBV = $_GET['idBV'];

    $sql = "SELECT * FROM bureau_de_vote WHERE idBV = '$idBV'";

    $result = $mysqli->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Construire un tableau associatif avec les données de l'électeur
        $bureau = array(
            'idBV' => $row['idBV'],
            'salleBV' => $row['salleBV'],
            'nbElecInscri' => $row['nbElecInscri'],
            'nbVotant' => $row['nbVotant'],
            'nbVoteBl' => $row['nbVoteBl'],
            'nbVoteNul' => $row['nbVoteNul'],
            
        );

        // Convertir le tableau associatif en format JSON et afficher la réponse
        echo json_encode($bureau);
    } else {
        // Si l'électeur n'est pas trouvé, renvoyer une réponse vide ou un message d'erreur
        echo json_encode(array('message' => 'Électeur introuvable.'));
    }
} else {
    // Si la clé "idElecteur" n'est pas définie dans $_GET, renvoyer une réponse d'erreur
    echo json_encode(array('message' => 'Clé "idElecteur" non définie.'));
}

// Fermer la connexion à la base de données
$mysqli->close();
?>
