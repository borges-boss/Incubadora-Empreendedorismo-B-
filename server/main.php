<?php 

require_once 'User.php';
require_once 'Projeto.php';
require_once 'Comments.php';
require_once 'Like.php';


/*
$user=new User();

$result=$user->getUsers(null);


 while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["email"]. "<br>";
  }


  $result->close();


  $projeto=new Projeto();
  $resultProjeto=$projeto->getProjetos("WHERE id=2");



while($row = $resultProjeto->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["name"];
    $projeto->registerLike($row["id"]);
  }




  $comment=new Comment();

  $comment->registerComment("Comentario teste2",1,2,"2020-12-04");


   $result=$comment->getComments(2);

   echo $result->fetch_assoc()["comment"];
  */

  $like=new Like();

  $like->registerLike(1,2);


?>