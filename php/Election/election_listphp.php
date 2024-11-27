<?php
include_once("database.php");
$electeur = [];

$sql = "SELECT election.*, election.code_Elec, election.date_Elec, candidat.code_ListeCand
FROM election
INNER JOIN candidat ON election.code_ListeCand = candidat.code_ListeCand";
if($result = mysqli_query($mysqli,$sql))
{
	$i = 0;
	while($row = mysqli_fetch_assoc($result))
	{
	
		$electeur[$i]['code_Elec'] = $row['code_Elec'];
		$electeur[$i]['date_Elec'] = $row['date_Elec'];
		
		$electeur[$i]['code_ListeCand'] = $row['code_ListeCand'];
	
       
        $i++;

		
	}
	echo json_encode($electeur);
}
else
{
	http_response_code(404);
}
?>