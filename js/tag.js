/*//make function for personal and tag media
var tag = "<?php echo $tag ?>";
var token = '12790289.8fdceb1.a76ce1f1c4cf42ecb4bc3b52dc317d02',
    num_photos = 20;
    //var tag = "<?php echo(json_encode($tag)); ?>";
    //var tag = document.cookie;


 
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
 		var total = 0;
 		var counter = 0;
		for( x in data.data ){
			if(data.data[x].tags[0] == tag){
			$('ul').append('<div class="hovereffect"> <img class="img-responsive" src="'+data.data[x].images.thumbnail.url+'"><div class="overlay"><h2>Likes:'+data.data[x].likes.count+'</h2><a class="info" href="#">save</a></div></div>');
			//bad$('ul').append('<img src="'+data.data[x].likes.count+'">');
			//bad$('p').append('Likes:'+data.data[x].likes.count+'');
			
			total += parseInt(data.data[x].likes.count);
			counter += 1;
		}
			
		}
		$('p').append('<h2>'+total+'</h2>');
		total = total/counter;
		$('p').append('Average Likes for '+tag+': <h2>'+total+'</h2>');
	},
	error: function(data){
		console.log(data);
	}
});*/

function tagSearch(tag){

	var token = '12790289.8fdceb1.a76ce1f1c4cf42ecb4bc3b52dc317d02',
    num_photos = 20;
    //var tag = <?php echo(json_encode($tag)); ?>;
    var hash = eval(tag);
 
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
 		var total = 0;
 		var counter = 0;
		for( x in data.data ){
			//for( y in data.data[x].tags){
				if(data.data[x].tags[0] == tag){
				$('ul').append('<div class="hovereffect"> <img class="img-responsive" src="'+data.data[x].images.thumbnail.url+'"><div class="overlay"><h2>Likes:'+data.data[x].likes.count+'</h2><a class="info" href="'+data.data[x].images.standard_resolution.url+'">view</a></div></div>');
			//bad$('ul').append('<img src="'+data.data[x].likes.count+'">');
			//bad$('p').append('Likes:'+data.data[x].likes.count+'');
			
				total += parseInt(data.data[x].likes.count);
				counter += 1;
				}
			//}
		}
		$('p').append('<h2>'+total+'</h2>');
		total = total/counter;
		$('p').append('Average Likes For '+tag+': <h2>'+total+'</h2>');
	},
	error: function(data){
		console.log(data);
	}
});
}