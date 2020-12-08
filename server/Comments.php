<?php

require_once 'Connection.php';

class Comment{

//ALTER TABLE comments ADD FOREIGN KEY (FK_projeto_id) REFERENCES projetos(id)

private $comment=null;
private $userName=null;
private $userPicture=null;



public function registerComment($comment, $FK_user_id,$FK_project_id,$created_at){
    $connection=new Connection();	
    $con=$connection->getConnetion();
    $sql="INSERT INTO comments(comment, FK_user_id,FK_projeto_id,created_at) VALUES (?, ?, ?, ?)";
    $stm=$con->prepare($sql);
    $stm->bind_param("siis",$comment, $FK_user_id,$FK_project_id,$created_at);
    $stm->execute();
    $stm->close();
}


public function getComments($filter){
    $database=new Connection();	
    $con=$database->getConnetion();
    $sql="SELECT comments.comment,comments.FK_user_id,comments.FK_projeto_id, user.name FROM 
    comments INNER JOIN user ON comments.FK_user_id WHERE comments.FK_projeto_id=".$filter.";";

    return $result=$con->query($sql);
}

}
