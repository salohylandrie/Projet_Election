<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['username']) === '' || trim($request['password']) === '' || trim($request['fokotany']) === '' || trim($request['district']) === '' || trim($request['commune']) === '' || trim($request['prefecture']) === '')
	{
		return http_response_code(400);

	}

	$username = mysqli_real_escape_string($mysqli, trim($request['username']));
	$password = mysqli_real_escape_string($mysqli, trim($request['password']));
    $fokotany = mysqli_real_escape_string($mysqli, trim($request['fokotany']));
    $district = mysqli_real_escape_string($mysqli, trim($request['district']));
    $commune = mysqli_real_escape_string($mysqli, trim($request['commune']));
    $prefecture = mysqli_real_escape_string($mysqli, trim($request['prefecture']));

   
    

	$sql = "INSERT INTO users (id,username,password,fokotany,district,commune,prefecture) VALUES (null,'$username','$password','$fokotany','$district','$commune','$prefecture')";
	if($mysqli->query($sql))
	{
		http_response_code(201);
		$users = [
		'id' => mysqli_insert_id($mysqli),'username' => $username,
        'password' => $password,
        'fokotany' => $fokotany,
        'district' => $district,
        'commune' => $commune,
        'prefecture' => $prefecture,

        ];
		echo json_encode($users);
	}
	else
	{
		http_response_code(422);
	}
     
   

   
}