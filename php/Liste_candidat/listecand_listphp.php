<?php
include_once("database.php");
$region = [];

$sql = "SELECT * FROM liste_candidat";
if($result = mysqli_query($mysqli,$sql))
{
	$i = 0;
	while($row = mysqli_fetch_assoc($result))
	{
        
		$region[$i]['code_ListeCand'] = $row['code_ListeCand'];
		$region[$i]['nomListe'] = $row['nomListe'];
        $i++;
		

	
	}
	echo json_encode($region);
}
else
{
	http_response_code(404);
}
?>



