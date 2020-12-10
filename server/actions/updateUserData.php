<?php

require_once '../User.php';


if (isset($_POST['id']) && isset($_POST['userName']) && isset($_POST['password'])  && isset($_POST['email'])) {

    $pass = "";

    $u = new User();
    $user = $_POST['userName'];
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $id=$_POST['id'];
  
    $response = $u->updateUser($user, $email, $pass, $id);

    echo $response;
}
