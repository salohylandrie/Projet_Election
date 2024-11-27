<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	 if(trim($request['username']) === '' || trim($request['password']) === '' || trim($request['fokotany']) === '' || trim($request['commune']) === '' || trim($request['district']) === '' || trim($request['']) === 'prefecture') {
		return http_response_code(400);
	}
	$id = mysqli_real_escape_string($mysqli, (int)$request['id']);
    $username = mysqli_real_escape_string($mysqli, trim($request['username']));
	$password = mysqli_real_escape_string($mysqli, trim($request['password']));
    $fokotany = mysqli_real_escape_string($mysqli, trim($request['fokotany']));
    $commune = mysqli_real_escape_string($mysqli, trim($request['commune']));
    $district = mysqli_real_escape_string($mysqli, trim($request['district']));
    $prefecture = mysqli_real_escape_string($mysqli, trim($request['prefecture']));
	$sql = "UPDATE users SET username='$username',password='$password',fokotany='$fokotany',commune='$commune',district='$district',prefecture='$prefecture' WHERE id = '$id'";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}