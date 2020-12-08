<?php

require_once '../Like.php';

$teste=array('teste'=>"bruh");
$marray=array();


$like=new Like();



$res=$like->getLikes("");

while($row=$res->fetch_assoc()){
    $row['isLiked']=true;
    $marray[]=$row;
}


print(json_encode($marray));


?>