<?php

	require 'medoo.min.php';

	$database = new medoo();
  
    $data = $database->insert("finalstop",array(

      "userId"			  => $_POST['userId']
      
	));

?>