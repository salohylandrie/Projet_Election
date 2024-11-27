<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	 if(trim($request['nomListe']) === '') {
		return http_response_code(400);
	}
	$code_ListeCand = mysqli_real_escape_string($mysqli, trim($request['code_ListeCand']));
	
    $nomListe = mysqli_real_escape_string($mysqli, trim($request['nomListe']));
	
	$sql = "UPDATE liste_candidat SET nomListe='$nomListe' WHERE code_ListeCand = '$code_ListeCand'";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}