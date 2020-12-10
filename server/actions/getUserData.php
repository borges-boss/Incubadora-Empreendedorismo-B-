<?php

require_once '../User.php';


if(isset($_POST['user'])){

$u=new User();
$user=$_POST['user'];

$response=$u->getUsers(" WHERE name='$user'");
$returnArray;

$returnArray=$response->fetch_assoc();

unset($returnArray['password']);

echo json_encode($returnArray);
}
