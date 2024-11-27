

<?php
require 'database.php';




if(isset($_GET['idBV'])) {
    $idBV = (int)$_GET['idBV'];

    if($idBV > 0) {
        $idBV = mysqli_real_escape_string($mysqli, $idBV);

        $sql = "DELETE FROM bureau_de_vote WHERE idBV = '$idBV'";
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
