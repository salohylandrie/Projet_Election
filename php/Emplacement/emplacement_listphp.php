<?php
include_once("database.php");
$emplacement = [];

$sql = "SELECT region.nomReg as nomReg, district.nomDistr as nomDistr,commune.nomComm as nomComm, fokotany.nomFokt as nomFokt FROM region,district,commune,fokotany WHERE region.code_Reg = district.code_Reg AND district.code_Distr = commune.code_Distr AND commune.nomComm = fokotany.nomComm";
if($result = mysqli_query($mysqli,$sql))
{
	$i = 0;
	while($row = mysqli_fetch_assoc($result))
	{
        
		$emplacement[$i]['nomReg'] = $row['nomReg'];
		$emplacement[$i]['nomDistr'] = $row['nomDistr'];
		$emplacement[$i]['nomComm'] = $row['nomComm'];
        $emplacement[$i]['nomFokt'] = $row['nomFokt'];
      
       
        $i++;

		
	}
	echo json_encode($emplacement);
}
else
{
	http_response_code(404);
}
?>