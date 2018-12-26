

var marginY =0;
var destination=0 ;
var speed = 15;
var scoller = null;

function initScroll(elementId){
	destination = document.getElementById(elementId).offsetTop;
		console.log(destination);
		if( destination > 0 ){
				scoller = setTimeout(function(){
					initScroll(elementId);
				},1);
				marginY = marginY + speed;
				
				if(marginY >= destination){
					clearTimeout(scoller);

				}

				window.scroll(0,marginY);
				console.log(destination);
		}else if(destination < 0 ){
				scoller = setTimeout(function(){
					initScroll(elementId)
				},1);
		
				marginY = marginY - speed;

				if(marginY <= destination){
					

				}

				window.scroll(0,marginY);
				console.log(destination);
		}else{
			clearTimeout(scoller);
		}
// console.log(destination);
}


function goUp(){

	scoller = setTimeout(function(){
		goUp();
	},1);
	
	marginY = marginY - speed;

		if(marginY <0){
			clearTimeout(scoller);

		}

		window.scroll(0,marginY);
}

function soomthScroll(target, duration){

	var target = document.querySelector(target);
	var targetPostion = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPostion - startPosition;
	var startTime = null ;
		
	function animation(currentTime){
		if(startTime = null){ startTime = currentTime;}
		var timeElapsed = currentTime - startTime;
		window.scrollTo(0,run);
		if(timeElapsed < duration) requestAnimationFrame(animation);

	}

	function ease(t,b,c,d){
		t/=d/2;
		if(t<1){return c/2*t*t+b}
			t--;
		return -c / 2 * ( t * ( t - 2 ) - 1 ) + b ;

	}

	
	requestAnimationFrame(animation);

}

var section1 = document.querySelector('.section1');

section1.addEventListener('click',function(){
	soomthScroll('.second', 1000)
});




















