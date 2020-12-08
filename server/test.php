<?php

require_once './Projeto.php';
require_once './User.php';
require_once './Like.php';

$p = new Projeto();
$like = new Like();

$userId = null;

//User 

   $u = new User();
   $user = "root";

   $responseUser = $u->getUsers(" WHERE name='$user'");

   while ($r = $responseUser->fetch_assoc()) {
      $userId = $r['id'];
      print("UserId:".$userId);
   }


//Projetos
$response = $p->getProjetos(null);

$returnArrayProjeto = array();

while ($row = $response->fetch_assoc()) {
    
   if ($userId != null) {
      $projetoId = $row['id'];
      $respLike = $like->getLikes(" WHERE FK_projeto_id='$projetoId' AND FK_user_id='$userId'");

      if ($respLike->num_rows > 0) {
         $row['is_liked'] = true;
      } else {
         $row['is_liked'] = false;
      }
   }
   $returnArrayProjeto[] = $row;
}

echo json_encode($returnArrayProjeto);


?>