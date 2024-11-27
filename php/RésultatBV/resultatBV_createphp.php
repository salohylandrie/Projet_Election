<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['idBV']) === '' || trim($request['nombreVote']) === '' || trim($request['idcand']) === '' || trim($request['code_ListeCand']) === '')
	{
		return http_response_code(400);

	}

	$idBV = mysqli_real_escape_string($mysqli, trim($request['idBV']));
	$nombreVote = mysqli_real_escape_string($mysqli, trim($request['nombreVote']));
    $idcand = mysqli_real_escape_string($mysqli, trim($request['idcand']));
    $code_ListeCand = mysqli_real_escape_string($mysqli, trim($request['code_ListeCand']));

    
	$selectQuery = "SELECT code_Fokt, nomFokt, nomComm, salleBV
    FROM bureau_de_vote
    WHERE idBV = '$idBV' ";
    $result = $mysqli->query($selectQuery);

    $selectQuery = "SELECT numCand, nomCand, prenomCand, code_ListeCand
    FROM candidat
    WHERE idcand = '$idcand'";
    $resultt = $mysqli->query($selectQuery);

    $selectQuery = "SELECT code_Elec, date_Elec
    FROM election
    WHERE code_ListeCand = '$code_ListeCand'";
    $resulttt = $mysqli->query($selectQuery);

    if ($result->num_rows > 0 && $resultt->num_rows > 0 && $resulttt->num_rows > 0 ) {
        $row = $result->fetch_assoc();
        $code_Fokt = $row['code_Fokt'];
        $nomFokt = $row['nomFokt'];
        $nomComm = $row['nomComm'];
        $salleBV = $row['salleBV'];

        $row = $resultt->fetch_assoc();
        $numCand = $row['numCand'];
        $nomCand = $row['nomCand'];
        $prenomCand = $row['prenomCand'];
        $code_ListeCand = $row['code_ListeCand'];

        $row = $resulttt->fetch_assoc();
        $code_Elec = $row['code_Elec'];
        $date_Elec = $row['date_Elec'];

	$sql = "INSERT INTO resultat_candidat  (idres, idBV, code_ListeCand, idcand, numCand, nomCand, prenomCand, nombreVote, code_Fokt, nomFokt, nomComm, salleBV, date_Elec, code_Elec  ) VALUES (null,'$idBV', '$code_ListeCand', '$idcand', '$numCand',' $nomCand', '$prenomCand', '$nombreVote', '$code_Fokt', '$nomFokt', '$nomComm',' $salleBV',' $date_Elec',' $code_Elec')";
	if($mysqli->query($sql))
	{
		http_response_code(201);
		$electeur = [
		'idres' => mysqli_insert_id($mysqli),'idBV' => $idBV,
        'code_ListeCand' => $code_ListeCand,
        'idcand' => $idcand,
		'numCand' => $numCand,
		'nomCand' => $nomCand,
        'prenomCand' => $prenomCand,
        'nombreVote' => $nombreVote,
        'code_Fokt' => $code_Fokt,
        'nomFokt' => $nomFokt,
        'nomComm' => $nomComm,
        'salleBV' => $salleBV,
        'date_Elec' => $date_Elec,
        'code_Elec' => $code_Elec,
        
        ];
		echo json_encode($electeur);
	}
	else
	{
		http_response_code(422);
	}
}
else
{
	http_response_code(404);
	echo json_encode(['message' => 'Aucune donnée correspondante trouvée dans la table fokotany pour le code_Fokt : ' . $idcand]);
}
   

   
}