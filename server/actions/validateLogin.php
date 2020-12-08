<?php

require_once '../User.php';


if(isset($_POST['userName']) && isset($_POST['password'])){

$u=new User();
$user=$_POST['userName'];
$pass=$_POST['password'];

$response=$u->getUsers(" WHERE name='$user' AND password='$pass'");


if($response->num_rows > 0){
    echo "1";
}
else{
    echo "0";
}





}
