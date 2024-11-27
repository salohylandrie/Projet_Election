

<?php
require 'database.php';




if(isset($_GET['code_Reg'])) {
    $code_Reg = (int)$_GET['code_Reg'];

    if($code_Reg > 0) {
        $code_Reg = mysqli_real_escape_string($mysqli, $code_Reg);

        $sql = "DELETE FROM region WHERE code_Reg = '$code_Reg'";
        if($mysqli->query($sql)) {
            http_response_code(204);
        } else {
            return http_response_code(422);
        }
    } else {
        return http_response_code(400);
    }
} else {
    return http_response_code(400);
}
?>
