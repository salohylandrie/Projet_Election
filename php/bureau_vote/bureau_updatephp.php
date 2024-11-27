
<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	 if(trim($request['salleBV']) === '' || trim($request['nbElecInscri']) === '' || trim($request['nbVotant']) === '' || trim($request['nbVoteBl']) === '' || trim($request['nbVoteNul']) === '') {
		return http_response_code(400);
	}
	$idBV = mysqli_real_escape_string($mysqli, (int)$request['idBV']);
    $salleBV = mysqli_real_escape_string($mysqli, trim($request['salleBV']));
	$nbElecInscri = mysqli_real_escape_string($mysqli, trim($request['nbElecInscri']));
    $nbVotant = mysqli_real_escape_string($mysqli, trim($request['nbVotant']));
    $nbVoteBl = mysqli_real_escape_string($mysqli, trim($request['nbVoteBl']));
    $nbVoteNul = mysqli_real_escape_string($mysqli, trim($request['nbVoteNul']));
	$sql = "UPDATE bureau_de_vote SET salleBV='$salleBV',nbElecInscri='$nbElecInscri',nbVotant='$nbVotant',nbVoteBl='$nbVoteBl',nbVoteNul='$nbVoteNul' WHERE idBV = '$idBV'";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}