<?php

	require 'medoo.min.php';

	$database = new medoo();
  
    $data = $database->insert("playthrough",array(

	  "userId"			  => $_POST['userId'],
	  "playthrough"		=> $_POST['playthrough']
      
	));
	
?>