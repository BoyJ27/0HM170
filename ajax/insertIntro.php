<?php

	require 'medoo.min.php';

	$database = new medoo();
  
    $data = $database->insert("instruction",array(

      "userId"			  => $_POST['userId']
      
	));

?>