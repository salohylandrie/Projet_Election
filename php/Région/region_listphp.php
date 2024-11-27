<?php
include_once("database.php");
$region = [];

$sql = "SELECT * FROM region";
if($result = mysqli_query($mysqli,$sql))
{
	$i = 0;
	while($row = mysqli_fetch_assoc($result))
	{
        
		$region[$i]['code_Reg'] = $row['code_Reg'];
		$region[$i]['nomReg'] = $row['nomReg'];
        $i++;
		

	
	}
	echo json_encode($region);
}
else
{
	http_response_code(404);
}
?>



