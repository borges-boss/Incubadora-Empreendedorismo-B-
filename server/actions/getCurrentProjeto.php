<?php

require_once '../Projeto.php';


if(isset($_GET['id'])){

$p=new Projeto();
$id=$_GET['id'];

$response=$p->getProjetos(" WHERE projetos.id=".$id);

$returnArray=array();

while($row = $response->fetch_assoc()) {
    $returnArray[]=$row;
 }

echo json_encode($returnArray);

}



?>