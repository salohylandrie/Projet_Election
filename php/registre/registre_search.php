<?php

include 'database.php';

if (isset($_GET['searchTerm'])) {
    $searchTerm = $_GET['searchTerm'];
    
    // Requête SQL pour rechercher les électeurs par nom ou prénom
    $sql = "SELECT * FROM users WHERE username LIKE '%$searchTerm%' OR password LIKE '%$searchTerm%' OR fokotany  LIKE '%$searchTerm%' OR id LIKE '%$searchTerm%' OR commune LIKE '%$searchTerm%' OR prefecture LIKE '%$searchTerm%' OR district LIKE '%$searchTerm%'";

    $result = $mysqli->query($sql);

    if ($result->num_rows > 0) {
        $userss = array(); // Utilisez un tableau distinct pour stocker les électeurs

        while ($row = $result->fetch_assoc()) {                                                                                
            // Construire un tableau associatif avec les données de l'électeur
            $users = array(
                'id' => $row['id'],
                'username' => $row['username'],
                'password' => $row['password'],
                'fokotany' => $row['fokotany'],
                'district' => $row['district'],
                'commune' => $row['commune'],
                'prefecture' => $row['prefecture'],
             
                
            );

            $userss[] = $users; // Ajoutez l'électeur au tableau des électeurs
        }

        // Convertir le tableau associatif en format JSON et afficher la réponse
        echo json_encode($userss);
    } else {
        // Si aucun résultat n'est trouvé, renvoyer une réponse vide ou un message d'erreur
        echo json_encode(array('message' => 'Aucun électeur trouvé.'));
    }
} else {
    echo json_encode(array('message' => 'Terme de recherche manquant.'));
}

// Fermer la connexion à la base de données
$mysqli->close();
?>
