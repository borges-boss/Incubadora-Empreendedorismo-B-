<?php

require_once '../User.php';


if(isset($_POST['userName']) && isset($_POST['password']) && isset($_POST['email'])){

$u=new User();
$user=$_POST['userName'];
$pass=$_POST['password'];
$email=$_POST['email'];

$response=$u->registerUser($user,$email,$pass,true);

echo $response;



}
