<!-- start a new metricsession -->

<?php 
	if(isset($_POST['metricMD5']) && isset($_POST['serialNumber'])){
		include('connect.php');
	    $sth = $db->prepare("INSERT INTO metricsession( serialNumber, metricMD5) VALUES (?, ?)");
	    $sth->execute(array($_POST['serialNumber'],$_POST['metricMD5']));
	    $sth->closeCursor();
	}
?>