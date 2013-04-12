<!-- inserts a new event into the database -->

<?php
	if(isset($_POST['metricMD5']) && isset($_POST['playMD5']) && isset($_POST['gameTime'])){
		$metricMD5 = $_POST['metricMD5'];
		$playMD5 = $_POST['playMD5'];
		$gameTime = $_POST['gameTime'];
		$eventType = isset($_POST['eventType']) ? $_POST['eventType'] : '0';
		$eventSubtype = isset($_POST['eventSubtype']) ? $_POST['eventSubtype'] : '0';
		$x = isset($_POST['x']) ? $_POST['x'] : '0';
		$y = isset($_POST['y']) ? $_POST['y'] : '0';
		$z = isset($_POST['z']) ? $_POST['z'] : '0';
		$magnitude = isset($_POST['magnitude']) ? $_POST['magnitude'] : '0';
		$extended = isset($_POST['extended']) ? $_POST['extended'] : "";

	    include('connect.php');
	    $sql = 'INSERT INTO eventdata( metricMD5, playMD5, gameTime, eventType, eventSubtype, x, y, z, magnitude, extended )
	    		VALUES (:metricMD5, :playMD5, :gameTime, :eventType, :eventSubtype, :x, :y, :z,:magnitude, :extended)';
	    $sth = $db->prepare($sql);
	    $sth->bindParam (':metricMD5', $metricMD5);
	    $sth->bindParam (':playMD5', $playMD5);
	    $sth->bindParam (':gameTime', $gameTime);
	    $sth->bindParam (':eventType', $eventType);
	    $sth->bindParam (':eventSubtype', $eventSubtype);
	    $sth->bindParam (':x', $x);
	    $sth->bindParam (':y', $y);
	    $sth->bindParam (':z', $z);
	    $sth->bindParam (':magnitude', $magnitude);
	    $sth->bindParam (':extended', $extended);
	    $sth->execute();
	    $sth->closeCursor();
	}
?>