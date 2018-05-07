<?php include 'inc/header.php'; ?>
<h2>Auto refresh div content</h2>
<div class="content">
	<style>
		.data{background: #fba991;margin-left: 30px;padding: 6px 30px;width: 350px;margin-top: 20px; }
		.data ul{margin: 0;padding: 0;list-style: none;}
		.data ul li{text-decoration: none;cursor: pointer;border-bottom:1px solid black;padding:3px;}
	</style>
	<form action="" method="post">
		<table>
			<tr>
				<td>Content</td>
				<td>:</td>
				<td>
					<textarea name="body" id="body" cols="40" rows="20"></textarea>
				</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td>
					<input type="submit" name="autosubmit" id="autosubmit" value="Post">
				</td>
			</tr>
		</table>
		<div id="autostatus"></div>
	</form>
</div>
<?php include 'inc/footer.php'; ?>