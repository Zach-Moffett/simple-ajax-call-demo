$(document).ready(function(){
	$('button').on('click',function(){
		$.ajax({
			url: "external.txt", 
			success: function(result){
			$('#result').html(result);
    	}});
	})
});