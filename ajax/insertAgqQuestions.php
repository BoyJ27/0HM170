<?php

	require 'medoo.min.php';

	$database = new medoo();
	
	$data = $database->insert("agqquestions",array(

			"userId" 	=> $_POST['userId'],
			"q1"		=> $_POST['q1'],
			"q2"		=> $_POST['q2'],
			"q3"		=> $_POST['q3'],
			"q4"		=> $_POST['q4'],
			"q5"		=> $_POST['q5'],
			"q6"		=> $_POST['q6'],
			"q7"		=> $_POST['q7'],
			"q8"		=> $_POST['q8'],
			"q9"		=> $_POST['q9'],
			"q10"		=> $_POST['q10'],
			"q11"		=> $_POST['q11'],
			"q12"		=> $_POST['q12'],
			"q13"		=> $_POST['q13'],
			"q14"		=> $_POST['q14'],
			"q15"		=> $_POST['q15'],
			"q16"		=> $_POST['q16'],
			"q17"		=> $_POST['q17'],
			"q18"		=> $_POST['q18'],
			"q19"		=> $_POST['q19'],
			"q20"		=> $_POST['q20'],
			
      
	));

?>