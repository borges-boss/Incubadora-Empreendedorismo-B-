<?php

class Connection{

private $con=null;
private $host=null;
private $user=null;
private $pass=null;
private $database=null;


function __construct()
    {

    $this->con="";
    $this->host="localhost";
    $this->user="root";
    $this->pass="";
    $this->database="teste_empreendedorismo";

    }



public function getConnetion(){
    $this->con= mysqli_connect($this->host,$this->user,$this->pass,$this->database);
    
    //Verificar erros
    if($this->con->connect_error)
    {
        die("Nao foi possivel conectar");
    }
    
   return $this->con;
}


public function get_host(){return $this->host;}

public function get_user(){return $this->user;}

public function get_database(){return $this->database;}





}
