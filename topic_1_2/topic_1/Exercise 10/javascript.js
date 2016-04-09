function ajaxCall()
{

		var data = "q="+document.getElementsByTagName('repo').value; 
		var call = $.ajax({
			url: "https://api.github.com/search/repositories",
			type: 'GET',
			data: data,
			dataType: 'json',
			success: function(data){
				$.each(data.items, function(i, items){
					$("#list").append(items.full_name + "</br>");
				});
			},
			error: function(responseText){
				document.write(responseText);
			}
		});

}


