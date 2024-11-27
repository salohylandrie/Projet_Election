<?php
include_once("database.php");
$users = [];

$sql = "SELECT * FROM users";
if($result = mysqli_query($mysqli,$sql))
{
	$i = 0;
	while($row = mysqli_fetch_assoc($result))
	{
	
		$users[$i]['id'] = $row['id'];
		$users[$i]['username'] = $row['username'];
		$users[$i]['password'] = $row['password'];
        $users[$i]['fokotany'] = $row['fokotany'];
        $users[$i]['commune'] = $row['commune'];
        $users[$i]['district'] = $row['district'];
        $users[$i]['prefecture'] = $row['prefecture'];
        $i++;

		
	}
	echo json_encode($users);
}
else
{
	http_response_code(404);
}
?>