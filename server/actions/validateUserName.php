<?php

require_once '../User.php';


if(isset($_GET['userName'])){

$u=new User();
$user=$_GET['userName'];

$response=$u->getUsers(" WHERE name='$user'");


if($response->num_rows > 0){
    echo "false";
}
else{
    echo "true";
}



}
