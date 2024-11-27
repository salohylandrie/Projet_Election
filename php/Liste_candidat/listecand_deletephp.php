<?php
require 'database.php';


if(isset($_GET['code_ListeCand'])) {
    $code_ListeCand = $_GET['code_ListeCand'];

    if($code_ListeCand > 0) {
        $code_ListeCand = mysqli_real_escape_string($mysqli, $code_ListeCand);

        $sql = "DELETE FROM liste_candidat WHERE code_ListeCand = '$code_ListeCand'";
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
