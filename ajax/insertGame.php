<?php

	require 'medoo.min.php';

	$database = new medoo();
  
    $data = $database->insert("game",array(

      "userId"			  => $_POST['userId']
      
	));

?>