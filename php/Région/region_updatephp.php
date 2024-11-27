<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	 if(trim($request['nomReg']) === '') {
		return http_response_code(400);
	}
	$code_Reg = mysqli_real_escape_string($mysqli, trim($request['code_Reg']));
	
    $nomReg = mysqli_real_escape_string($mysqli, trim($request['nomReg']));
	
	$sql = "UPDATE region SET nomReg='$nomReg' WHERE code_Reg = '$code_Reg'";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}