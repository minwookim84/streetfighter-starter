$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'}, 
			500, 
			function(){
				$(this).hide();
				$(this).css('left', '-213px');
			});
		// show hadouken and animate it to the right of the screen
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// ryu goes back to his ready position
	});

	$(document).keydown(function(key){
		switch(parseInt(key.which,10)){
			case 88:
				$('.ryu-still, .ryu-ready, .ryu-throwing').hide();
				$('.ryu-cool').show();
				break;
		}
	})
	.keyup(function(key){
		switch(parseInt(key.which,10)){
			case 88:
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}			
	});
});

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playcool(){

}

