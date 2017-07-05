function Move(obj,attr,iTaget,speed){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var icur=0;
				if(attr=="opacity"){
					 icur=Math.round(parseFloat(getStyle(obj,attr))*100);
				}else{
					 icur=parseInt(getStyle(obj,attr));
				}

				var speedNum=(iTaget-icur)/speed;
				speedNum=speedNum>0?Math.ceil(speedNum):Math.floor(speedNum);	
				if(icur==iTaget){
            		clearInterval(obj.timer);
        		}else {
	        			if(attr=="opacity"){
	        				obj.style.filter= 'alpha(opacity:'+(icur+speedNum)+')';	
							obj.style.opacity=(icur+speedNum)/100;
	        			}else{
	        				obj.style[attr]=icur+speedNum+'px';	
	        			}
        		}
			}, 30)
		}
		function getStyle(obj,attr){
		    if(obj.currentStyle){
		        return obj.currentStyle[attr];//IE
		    }else{
		        return getComputedStyle(obj,false)[attr];//火狐
		    }
		}