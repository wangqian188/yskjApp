var nav = $('.top_nav li');
var nav_tag = false;//控制箭头
var nav_tag1 = false;//控制箭头
for(var i=0; i<nav.length; i++){
	(function(index){
		nav[i].onclick = function(){
			if(index==0){
				$('.nav_jt').eq(index).attr('class','mui-icon mui-icon-arrowup nav_jt');	
				nav_tag = true;
			}
			if(nav_tag){
				$('.nav_jt').eq(index).attr('class','mui-icon mui-icon-arrowdown nav_jt');	
			}
			if(index==1){
				$('.nav_jt').eq(index).attr('class','mui-icon mui-icon-arrowdown nav_jt');
			}
		}
	})(i)
}

