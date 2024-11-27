<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	 if(trim($request['numCand']) === '' || trim($request['nomCand']) === '' || trim($request['prenomCand']) === '') {
		return http_response_code(400);
	}
	$idcand = mysqli_real_escape_string($mysqli, (int)$request['idcand']);
    $numCand = mysqli_real_escape_string($mysqli, trim($request['numCand']));
	$nomCand = mysqli_real_escape_string($mysqli, trim($request['nomCand']));
    $prenomCand = mysqli_real_escape_string($mysqli, trim($request['prenomCand']));
	$sql = "UPDATE candidat SET numCand='$numCand',nomCand='$nomCand',prenomCand='$prenomCand' WHERE idcand = '$idcand'";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}