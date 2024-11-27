<?php
include('database.php'); 
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata, true);

    
    if(empty($request['salleBV']) || empty($request['nbElecInscri']) || empty($request['nbVotant']) || empty($request['nbVoteBl']) || empty($request['nbVoteNul']) || empty($request['nomFokt']) || empty($request['nbVoteNul']) || empty($request['centreBV']))
    {
        http_response_code(400);
        echo json_encode(['message' => 'Tous les champs sont requis.']);
        return;
    }

    $salleBV = mysqli_real_escape_string($mysqli, trim($request['salleBV']));
    $nbElecInscri = (int) $request['nbElecInscri'];
    $nbVotant = (int) $request['nbVotant'];
    $nbVoteBl = (int) $request['nbVoteBl'];
    $nbVoteNul = (int) $request['nbVoteNul'];
    $nomFokt = mysqli_real_escape_string($mysqli, trim($request['nomFokt']));
    $centreBV = mysqli_real_escape_string($mysqli, trim($request['centreBV']));

    $suffrageExprime = $nbVotant - ($nbVoteBl + $nbVoteNul);

    // Récupération des données de la table "fokotany" basées sur le champ "code_Fokt" centreBV
    $selectQuery = "SELECT code_Fokt, nomComm, nomDistr, nomReg, code_Comm, code_Distr FROM fokotany WHERE nomFokt = '$nomFokt'";
    $result = $mysqli->query($selectQuery);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $code_Fokt = $row['code_Fokt'];
        $nomComm = $row['nomComm'];
        $nomDistr = $row['nomDistr'];
        $nomReg = $row['nomReg'];
        $code_Comm = $row['code_Comm'];
        $code_Distr = $row['code_Distr'];

        // Insertion dans la table "bureau de vote" sans spécifier idBV
        $query = "INSERT INTO bureau_de_vote (idBV, salleBV, nbElecInscri, nbVotant, nbVoteBl, nbVoteNul, suffrageExprime, nomFokt, code_Fokt, nomComm, nomDistr, nomReg, code_Comm, code_Distr, centreBV) VALUES (null, '$salleBV', '$nbElecInscri', '$nbVotant', '$nbVoteBl', '$nbVoteNul', '$suffrageExprime', '$nomFokt', '$code_Fokt', '$nomComm', '$nomDistr', '$nomReg', '$code_Comm', '$code_Distr', '$centreBV')";

        if($mysqli->query($query))
        {
            http_response_code(201);
            $bureau = [
                'idBV' => mysqli_insert_id($mysqli),
                'salleBV' => $salleBV,
                'nbElecInscri' => $nbElecInscri,
                'nbVotant' => $nbVotant,
                'nbVoteBl' => $nbVoteBl,
                'nbVoteNul' => $nbVoteNul,
                'suffrageExprime' => $suffrageExprime,
                'nomFokt' => $nomFokt,
                'code_Fokt' => $code_Fokt,
                'nomComm' => $nomComm,
                'nomDistr' => $nomDistr,
                'nomReg' => $nomReg,
                'code_Comm' => $code_Comm,
                'code_Distr' => $code_Distr,
                'centreBV' => $centreBV,
            ];
            echo json_encode($bureau);
        }
        else
        {
            http_response_code(422);
            echo json_encode(['message' => 'Erreur lors de l\'insertion dans la table bureau de vote : ' . $mysqli->error]);
        }
    }
    else
    {
        http_response_code(404);
        echo json_encode(['message' => 'Aucune donnée correspondante trouvée dans la table fokotany pour le code_Fokt : ' . $code_Fokt]);
    }
}
?>
