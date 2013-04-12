<!-- start new playsession -->

<?php 
	if(isset($_POST['metricMD5']) && isset($_POST['playMD5'])){
		$metricMD5 = $_POST['metricMD5'];
		$playMD5 = $_POST['playMD5'];
		include('connect.php');
	    $sql = 'INSERT INTO playsession( playMD5, metricMD5)
	    		VALUES (:playMD5, :metricMD5)';
	    $sth = $db->prepare($sql);
	    $sth->bindParam (':metricMD5', $metricMD5);
	    $sth->bindParam (':playMD5', $playMD5);
	    $sth->execute();
	    $sth->closeCursor();
	}
?>