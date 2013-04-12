<!-- update the users save -->

<?php
	if(isset($_POST['uid'])){
		$uid = $_POST['uid'];
		if(isset($_POST['language'])){
			$language = $_POST['language'];
			include('connect.php');
		    $sql = 'UPDATE saves
		    		SET language=:language
		    		WHERE uid=:uid'
		    $sth = $db->prepare($sql);
		    $sth->bindParam (':uid', $uid);
		    $sth->bindParam (':language', $language);
		    $sth->execute();
		    $sth->closeCursor();
		}
		if(isset($_POST['level'])){
			$level = $_POST['level'];
			include('connect.php');
		    $sql = 'UPDATE saves
		    		SET level=:level
		    		WHERE uid=:uid'
		    $sth = $db->prepare($sql);
		    $sth->bindParam (':uid', $uid);
		    $sth->bindParam (':level', $level);
		    $sth->execute();
		    $sth->closeCursor();
		}
	}
?>