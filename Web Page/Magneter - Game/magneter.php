<div align=center>
	<script type="text/javascript" language="javascript">
		<!--
		<?php
			if($user->loggedOn()){
				echo "userId = ". $user->getID();
			}
			else{
				echo "userId = 0";
			}
		?>
		// -->
	</script>
	<script type="text/javascript" src="js/md5.js"></script>
	<script type="text/javascript" src="lib/game/versiondetection/versiondetection.js"></script>
	<script type="text/javascript" src="lib/impact/impact.js"></script>
	<script type="text/javascript" src="lib/game/main.js"></script>
	<script type="text/javascript" src="js/onclose.js"> </script>
	<canvas id="canvas"></canvas>
</div>
<!-- <body onbeforeunload="ConfirmClose()" onunload="HandleOnClose()"> -->
<!-- </body> -->