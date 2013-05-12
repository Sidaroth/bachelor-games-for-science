<!-- start new playsession -->

<?php 
	if(isset($_POST['metricMD5']) && isset($_POST['playMD5'])){
		include('connect.php');
	    $sth = $db->prepare('	INSERT INTO playsession( playMD5, metricMD5)
	    						VALUES (?, ?)');
	    $sth->execute(array($_POST['playMD5'], $_POST['metricMD5']));
	    $sth->closeCursor();
	}
?>