<?php

require_once 'Connection.php';




class Like
{
    public function getLikes($filter)
    {
        $database = new Connection();
        $con = $database->getConnetion();
        $sql = "SELECT * FROM likes " . $filter;

        return $result = $con->query($sql);
    }

    public function getNumberOfLikes($project_id){
        $database = new Connection();
        $con = $database->getConnetion();
        $sql = "SELECT COUNT(FK_projeto_id) AS num_likes FROM likes WHERE FK_projeto_id=$project_id" ;
        $num=0;
        
        return $con->query($sql)->fetch_assoc()['num_likes'];
    }

    public function registerLike($project_id, $user_id)
    {

        //User like
        $result = $this->getLikes(" WHERE FK_user_id='$user_id' AND FK_projeto_id='$project_id' ");

        $connection = new Connection();
        $con = $connection->getConnetion();
 
        if ($result->num_rows > 0) {
            $sql = "DELETE FROM likes WHERE FK_user_id=$user_id AND FK_projeto_id=$project_id";
            $con->query($sql);
 
        } else {
            $sql = "INSERT INTO likes(FK_projeto_id, FK_user_id) VALUES (?,?)";
            $stm = $con->prepare($sql);
            $stm->bind_param("ii",$project_id ,$user_id );
            $stm->execute();
            $stm->close();
      
        }

    }
}
