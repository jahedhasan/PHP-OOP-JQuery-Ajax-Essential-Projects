<?php include 'inc/header.php'; ?>
<h2>Create A Show Password Button</h2>
<div class="content">
	<form action="" method="post">
		<table>
			<tr>
				<td>Username</td>
				<td>:</td>
				<td><input type="text"  placeholder="Enter your username..."></td>
			</tr>
			<tr>
				<td>Password</td>
				<td>:</td>
				<td><input type="password" name="password" id="password" placeholder="Enter your password..."></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td><button  type="button" name="showpassword" id="showpassword">Show Password</button>
			</tr>
		</table>
		<div id="statuspass"></div>
	</form>
</div>
<?php include 'inc/footer.php'; ?>