$(document).ready(function(){
  $(".main").onepage_scroll({
    sectionContainer: 'section',
    animationTime: 300,
    responsiveFallback: 600,
    afterMove: after_move,
    loop: true
  });
  animate_1(false);
  animate_1(true);
  $current_index = 1;
});

function after_move(index){
	try{
		eval('animate_' + index + '(true)');
		eval('animate_' + $current_index + '(false)');
	}catch(err){ window.alert(err) };
	$current_index = index
};

function animate_1(enter){
	if (enter){
		$('.main section.page1 h1').fadeIn('slow', function(){
			$('.main section.page1 h2').fadeIn('slow');
		});
		
	} else {
		$('.main section.page1 h1').hide();
		$('.main section.page1 h2').hide();
	}
};

function animate_2(enter){
	if (enter){

	} else {

	}
};

function animate_3(enter){
	if (enter){

	} else {

	}
};