<?php

require_once 'Connection.php';
/**
 * 
 */
class User
{

  function registerUser($name, $email, $password, $is_enabled)
  {
    $connection = new Connection();
    $con = $connection->getConnetion();
    $sql = "INSERT INTO user(name,email,password,is_enabled) VALUES (?, ?, ?, ?)";
    $stm = $con->prepare($sql);
    $stm->bind_param("sssi", $name, $email, $password, $is_enabled);
    $stm->execute();
    $stm->close();

    $res = $this->getUsers(" WHERE name='$name' AND email='$email'");

    if ($res->num_rows == 1) {
      return true;
    } else {
      return false;
    }
  }

  function getUsers($filter)
  {
    $database = new Connection();
    $con = $database->getConnetion();
    $sql = "SELECT * FROM user " . $filter;
    return $result = $con->query($sql);
  }


  function getUserPicture($user_id)
  {

    $database = new Connection();
    $con = $database->getConnetion();

    if ($user_id != null) {
      $sql = "SELECT * FROM user_pic WHERE id=" . $user_id;
      return $result = $con->query($sql);
    } else {
      return null;
    }
  }
}
