<?php
require 'database.php';


if(isset($_GET['idcand'])) {
    $idcand = (int)$_GET['idcand'];

    if($idcand > 0) {
        $idcand = mysqli_real_escape_string($mysqli, $idcand);

        $sql = "DELETE FROM candidat WHERE idcand = '$idcand'";
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
