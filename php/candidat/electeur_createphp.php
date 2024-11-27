<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['numCand']) === '' || trim($request['nomCand']) === '' || trim($request['prenomCand']) === '' || trim($request['nomListe']) === '')
	{
		return http_response_code(400);

	}

	$numCand = mysqli_real_escape_string($mysqli, trim($request['numCand']));
	$nomCand = mysqli_real_escape_string($mysqli, trim($request['nomCand']));
    $prenomCand = mysqli_real_escape_string($mysqli, trim($request['prenomCand']));
	$nomListe = mysqli_real_escape_string($mysqli, trim($request['nomListe']));
    
	$selectQuery = "SELECT code_ListeCand FROM liste_candidat WHERE nomListe = '$nomListe'";
    $result = $mysqli->query($selectQuery);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $code_ListeCand = $row['code_ListeCand'];
       

	$sql = "INSERT INTO candidat (idcand,numCand,nomCand,prenomCand,code_ListeCand,nomListe) VALUES (null,'$numCand','$nomCand','$prenomCand','$code_ListeCand','$nomListe')";
	if($mysqli->query($sql))
	{
		http_response_code(201);
		$electeur = [
		'idcand' => mysqli_insert_id($mysqli),'numCand' => $numCand,
        'nomCand' => $nomCand,
        'prenomCand' => $prenomCand,
		'code_ListeCand' => $code_ListeCand,
		'nomListe' => $nomListe,
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
	echo json_encode(['message' => 'Aucune donnée correspondante trouvée dans la table fokotany pour le code_Fokt : ' . $code_Fokt]);
}
   

   
}