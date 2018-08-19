function move(obj,json,fn){
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){
		var onOff = true;
		for(let attr in json){
			if(attr == "opacity"){
				var iNow = getStyle(obj,attr)*100;
			}else{
				var iNow = parseInt(getStyle(obj,attr))
			}
			var speed = (json[attr] - iNow)/5;
			speed = speed<0 ? Math.floor(speed) : Math.ceil(speed);
			
			if(json[attr] != iNow) onOff = false;
			
			if(attr == "opacity"){
				obj.style.opacity = (iNow + speed)/100;
				obj.style.filter = "alpha(opacity="+ (iNow + speed) +")";
			}else{
				obj.style[attr] = iNow + speed + "px";
			}
		}
		if(onOff){
			clearInterval(obj.timer);
			if(fn) fn();
		}
	},30)
}
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr]
	}else{
		return getComputedStyle(ele,false)[attr]
	}
}