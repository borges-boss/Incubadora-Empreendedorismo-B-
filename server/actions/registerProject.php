<?php

require_once '../Projeto.php';
require_once '../User.php';


if(isset($_POST['title'])  && isset($_POST['description']) && isset($_POST['img']) && isset($_POST['user'])){
$u=new User();
$p=new Projeto();
$user=$_POST['user'];
$title=$_POST['title'];
$desc=$_POST['description'];
$img=$_POST['img'];
$date=date("Y/m/d");
$id=null;



//Get user id
$respId=$u->getUsers(" WHERE name='$user' ");
while($row = $respId->fetch_assoc()) {
    $id=$row['id'];
 }



if($id!=null){
$response=$p->registerProject($title,$date,$desc,$id,$img);
echo $response;
}
else{
    echo false;
}

}
