<?php
require 'database.php';


if(isset($_GET['id'])) {
    $id = (int)$_GET['id'];

    if($id > 0) {
        $id = mysqli_real_escape_string($mysqli, $id);

        $sql = "DELETE FROM users WHERE id = '$id'";
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
