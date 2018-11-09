<?php
require_once('config/config.php');
try {
    $STH = $DBH->prepare("SELECT * FROM mm_media;");
    $STH->execute();
    $STH->setFetchMode(PDO::FETCH_OBJ);  //yksi rivi objektina
    $kuva = $STH->fetch();
    echo json_encode($kuva);
} catch(PDOException $e) {
    file_put_contents('log/DBErrors.txt', 'mFetchImages.php: '.$e->getMessage()."\n", FILE_APPEND);
    return false;
}
?>