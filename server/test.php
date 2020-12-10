<?php

require_once './User.php';




    $pass = "";

    $u = new User();
    $user = "root009";
    $email = "";
    $id=1;
  
    $response = $u->updateUser($user, $email, $pass, $id);

    echo $response;

