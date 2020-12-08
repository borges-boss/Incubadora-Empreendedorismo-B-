<?php
class Fruit {
  // Properties
  public $name;
  public $color;



function __construct($name,$color)
    {
      $this->name=$name;
      $this->color=$color;
    }


  // Methods
  function set_name($name) {
    $this->name = $name;
  }
  function get_name() {
    return $this->name;
  }
}
?>