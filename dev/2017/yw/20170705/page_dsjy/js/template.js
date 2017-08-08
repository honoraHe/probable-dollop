/**
* # 描述
* 功能模板
* @author dorryLiu
*/


import '../css/template.css';
import 'components/reset-css/reset.css';
import Getparameter from "components/get-parameter/get-parameter.js";
import Statistics from "components/statistics/statistics.js"
(function(){

	var getparameter = new Getparameter();
	var tj = new Statistics();
	var btn = document.getElementsByClassName('botton');
	var jump =document.getElementsByClassName('jump');
	var fromId = getparameter.from;
	
	var downUrl = '//sptd.youyuan.com/apk/download/'+fromId+'/YouYuan_'+fromId+'.apk' ;



	tj({'tjtype':'pageLoad','tjuid':'ldy-20170705-dsjy','tjtag':'pageLoad'});
	btn[0].addEventListener('click',function(){
		tj({'tjtype':'pageClick','tjuid':'ldy-20170705-dsjy','tjtag':'pageClick'});
		location.href=downUrl;
	})
	jump[0].addEventListener('click',function(){
		tj({'tjtype':'pageClickJump','tjuid':'ldy-20170705-dsjy','tjtag':'pageClickJump'});
		location.href='//youyuan.com/?from=9606';
	})
	
	var botfont = document.querySelector('.bot_font');
	var btns= document.querySelector('.btns'); 
	var origOffsetY = botfont.offsetTop; 
	function onScroll(e) { 
		let scrollY = document.body.scrollTop
		|| window.pageYOffset    
		|| document.documentElement.scrollTop       
		|| 0;  
		if(scrollY >= origOffsetY){
			btns.classList.add('sticky') ;
		} 
		else if(scrollY < origOffsetY){
			btns.classList.remove('sticky');
		}

	}
	document.addEventListener('scroll',onScroll);
	var scrollY = document.body.scrollTop
	|| window.pageYOffset    
	|| document.documentElement.scrollTop       
	|| 0;  
	document.addEventListener('touchstart', function(e){
		let scrollcc = document.body.scrollTop
		|| window.pageYOffset    
		|| document.documentElement.scrollTop       
		|| 0; 
		var _touch1 = e.originalEvent.targetTouches[0];
		var y1= _touch1.screenY;
          window.y1=y1;//使y1变成全局变量可供给touchmove 和touchend使用。
          window.scrollcc=scrollcc;
            // e.preventDefault();
        });        
	document.addEventListener('touchmove', function(e){
		var _touch2 = e.originalEvent.targetTouches[0];
		var y2= _touch2.screenY;
		if((y2>y1&&((y2-y1+scrollcc)>= origOffsetY))){
			btns.classList.add('sticky') ;

		}
		else if((y2<y1&&((scrollcc+y2-y1)< origOffsetY))) {
			btns.classList.remove('sticky');

		}

	});

	document.addEventListener('touchend', function(e){
		var _touch3 = e.originalEvent.changedTouches[0];
		var y3= _touch3.screenY;
		if((y3>y1&&((y3-y1+scrollcc)>= origOffsetY))){
			btns.classList.add('sticky') ;

		}
		else if((y3<y1&&((scrollcc+y3-y1)< origOffsetY))) {
			btns.classList.remove('sticky');

		}


	});

})()