<!-- end playsession -->

<?php 
	if(isset($_POST['metricMD5']) && isset($_POST['playMD5'])){
		$metricMD5 = $_POST['metricMD5'];
		$playMD5 = $_POST['playMD5'];
		include('connect.php');
	    $sql = 'UPDATE playsession
	    		SET closeTime=now()
	    		WHERE metricMD5=:metricMD5 AND playMD5=:playMD5';
	    $sth = $db->prepare($sql);
	    $sth->bindParam (':metricMD5', $metricMD5);
	    $sth->bindParam (':playMD5', $playMD5);
	    $sth->execute();
	    $sth->closeCursor();
	}
?>