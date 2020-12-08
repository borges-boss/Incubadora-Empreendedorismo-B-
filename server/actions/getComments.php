<?php

require_once '../Comments.php';


if(isset($_GET['id'])){

$c=new Comment();
$id=$_GET['id'];

$response=$c->getComments($id);

$returnArray=array();

while($row = $response->fetch_assoc()) {
    $returnArray[]=$row;
 }

echo json_encode($returnArray);

}



?>