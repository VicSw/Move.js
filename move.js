function Move(obj,json,speed,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        //取当前值
        var flag=true;
        for(var attr in json){
            var icur=0;
            if(attr=="opacity"){
                icur=Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                icur=parseInt(getStyle(obj,attr));
            }
            //算速度
            var speedNum=(json[attr]-icur)/speed;
            speedNum=speedNum>0?Math.ceil(speedNum):Math.floor(speedNum);
            //检测停止
            if(icur!=json[attr]){
                flag=false;
            }
            if(attr=="opacity"){
                obj.style.filter= 'alpha(opacity:'+(icur+speedNum)+')';
                obj.style.opacity=(icur+speedNum)/100;
            }else{
                    obj.style[attr]=icur+speedNum+'px';
                }
            }
            if(flag){
                clearInterval(obj.timer);
                if(fn){
                    fn();
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
