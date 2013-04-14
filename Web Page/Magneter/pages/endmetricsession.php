<!-- end metricsession -->

<?php 
	if(isset($_POST['metricMD5']) && isset($_POST['serialNumber'])){
		$metricMD5 = $_POST['metricMD5'];
		$serialNumber = $_POST['serialNumber'];
		include('connect.php');
	    $sql = 'UPDATE metricsession
	    		SET closeTime=now()
	    		WHERE metricMD5=:metricMD5 AND serialNumber=:serialNumber';
	    $sth = $db->prepare($sql);
	    $sth->bindParam (':metricMD5', $metricMD5);
	    $sth->bindParam (':serialNumber', $serialNumber);
	    $sth->execute();
	    $sth->closeCursor();
	}
?>