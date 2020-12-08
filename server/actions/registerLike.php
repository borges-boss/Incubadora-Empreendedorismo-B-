<?php

require_once '../Like.php';
require_once '../User.php';


if(isset($_POST['user']) && isset($_POST['project'])){
    $u = new User();
    $like=new Like();
    $userId=null;
    $user=$_POST['user'];
    $projectId=$_POST['project'];

    $responseUser = $u->getUsers(" WHERE name='$user'");

    while ($r = $responseUser->fetch_assoc()) {
       $userId = $r['id'];
    }

    if($userId!=null){
        $like->registerLike($projectId,$userId);
        echo "Liked!";
    }



}






?>