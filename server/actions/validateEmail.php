<?php

require_once '../User.php';


if(isset($_GET['email'])){

$u=new User();
$email=$_GET['email'];

$response=$u->getUsers(" WHERE email='$email'");


if($response->num_rows > 0){
    echo "false";
}
else{
    echo "true";
}



}
