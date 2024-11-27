<?php
include_once("database.php");
$electeur = [];

$sql = "SELECT candidat.*, candidat.idcand, candidat.numCand, candidat.nomCand, candidat.prenomCand FROM candidat 
INNER JOIN liste_candidat   ON candidat.code_ListeCand = liste_candidat.code_ListeCand";
if($result = mysqli_query($mysqli,$sql))
{
	$i = 0;
	while($row = mysqli_fetch_assoc($result))
	{
	
		$electeur[$i]['idcand'] = $row['idcand'];
		$electeur[$i]['numCand'] = $row['numCand'];
		$electeur[$i]['nomCand'] = $row['nomCand'];
        $electeur[$i]['prenomCand'] = $row['prenomCand'];
		$electeur[$i]['code_ListeCand'] = $row['code_ListeCand'];
		$electeur[$i]['nomListe'] = $row['nomListe'];
       
        $i++;

		
	}
	echo json_encode($electeur);
}
else
{
	http_response_code(404);
}
?>