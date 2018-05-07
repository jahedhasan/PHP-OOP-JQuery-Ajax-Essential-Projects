$(document).ready(function(){ 

//userCheck availability
	$('#username').blur(function(){
		var username = $(this).val();
		$.ajax({
			url : "check/checkuser.php",
			method:"POST",
			data:{username:username} ,
			dataType: "text",
			success: function(data){
				$('#userstatus').html(data);
			}
		})
	});

//autoCompleteTextBox

	$("#skill").keyup(function(){
		var skill = $(this).val();
		console.log ('skill');
		if (skill != '') {
			$.ajax({
				url: "check/checkskill.php",
				method : "POST",
				data : {skill:skill},
				success: function(data){
					$('#statusskill').html(data);
				}
			})
		};
		
	});
	$(document).on('click', 'li', function(){
		$('#statusskill').fadein();
	});


	//show password button

	$("#showpassword").on('click', function(){
		var pass = $("#password");
		var fieldtype = pass.attr('type');
		if ( fieldtype == 'password') {
			pass.attr('type' , 'text');
			$(this).text("Hide Password");
		}else{
			pass.attr('type' , 'password');
			$(this).text("Show Password");

		}
	});

	//auto refresh div content

	$("#autosubmit").click(function(){
		var content = $("#body").val();
		if ($.trim(content) != "") {
			$.ajax({
				url : "check/checkrefresh.php",
				method : "POST",
				data : {body : content},
				dataType : "text",
				success : function(data){
					$("#body").val("");
				}
			});
			return false;
		}
	}); 

	setInterval(function(){
		$("#autostatus").load("check/getrefresh.php").fadeIn("slow");
	},1000);


	// live data search

	$("#livesearch").keyup(function(){
		var live = $(this).val();
		if (live != '') {
			$.ajax({
				url: "check/livesearch.php",
				method : "POST",
				data : {search:live},
				dataType: "text",
				success: function(data){
					$('#statuslive').html(data);
				}
			});
		}else{
			$('#statuslive').html("");
		};
	});



 });  