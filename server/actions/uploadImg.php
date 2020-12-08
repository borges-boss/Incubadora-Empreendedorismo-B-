<?php
$target_dir = "./";
$target_file = $target_dir . basename($_FILES["upload"]["name"]);
$uploadOk = 1;

$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image

if (isset($_POST["btn"])) {
  $check = getimagesize($_FILES["upload"]["tmp_name"]);
  if ($check !== false) {
    //echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    //echo "File is not an image.";
    $uploadOk = 0;
  }




  // Check if file already exists
  if (file_exists($target_file)) {
    //echo "Sorry, file already exists.";
    $uploadOk = 0;
  }

  // Check if $uploadOk is set to 0 by an error
  if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
  } else {
    if (move_uploaded_file($_FILES["upload"]["tmp_name"], $target_file)) {
      echo "<img src='./server/actions/uploads/".$_FILES["upload"]["tmp_name"]."'>";
    } else {
      echo 0;
    }
  }
}
