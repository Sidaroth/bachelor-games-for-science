<?php
	// echo out save for uid as json
	if(isset($_POST['uid'])){
		$uid = $_POST['uid'];
		include('connect.php');
	    $sql = 'SELECT language, level FROM saves WHERE uid = :uid';
	    $sth = $db->prepare($sql);
	    $sth->bindParam(':uid', $uid);
	    $sth->execute();
	    while ($row = $sth -> fetch(PDO::FETCH_ASSOC)) 
		{
			$rows['save'][] = $row;
		}
		echo json_encode($rows);
	    $sth->closeCursor();
	}
?>