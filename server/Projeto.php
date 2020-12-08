<?php

require_once 'Connection.php';



class Projeto
{

  function registerProject($title, $createdAt, $description, $userId, $banner)
  {
    $connection = new Connection();
    $con = $connection->getConnetion();

    $sql = "INSERT INTO projetos(title,created_at,description,FK_user_id,banner) VALUES (?, ?, ?, ?, ?)";
    $stm = $con->prepare($sql);

    $stm->bind_param("sssis", $title, $createdAt, $description, $userId, $banner);
    $stm->execute();
    $stm->close();

    $res = $this->getProjetos(" WHERE projetos.title='$title' AND projetos.FK_user_id='$userId' ");
   
    if ($res->num_rows > 0) {
      return true;
    } else {
      return false;
    }
  }

  function getProjetos($filter)
  {
    //Filtro dinamico
    $database = new Connection();
    $con = $database->getConnetion();
    $sql = "SELECT projetos.id, projetos.title, projetos.created_at,projetos.description, projetos.banner,projetos.FK_user_id, user.name FROM projetos INNER JOIN user ON projetos.FK_user_id=user.id " . $filter . ";";
    return $con->query($sql);
  }
}
