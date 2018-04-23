<?php

	require 'medoo.min.php';

	$database = new medoo();
  
  $data = $database->insert("demographics",array(

      "userId"			  => $_POST['userId'],
      "gender" 		    => $_POST['gender'],
      "age" 		      => $_POST['age'],
      "experienceM" 	=> $_POST['experienceM'],
      "selfrate" 		  => $_POST['selfrate'],
      "experienceG" 	=> $_POST['experienceG'],
			"remarks" 		  => $_POST['remarks'],
			"email" 		    => $_POST['email'],
      
	));

?>