// 轮播图功能 有且只能有一个 index功能;
var index = 0;

var next_btn = document.getElementById("next_btn");
var prev_btn = document.getElementById("prev_btn");
var wrapper  = document.querySelector(".wrapper");
var sliderLength = document.querySelectorAll(".slider").length ;
var animate_lock = false;

// 下一张图片操作功能;
// 有边界 !;
function nextIndex(){
      if(index === sliderLength - 1){
            index = 0;
      }else{      
            index ++;
      }
}
function animate(){
      animate_lock = true;
      setTimeout(function(){
            animate_lock = false;
      },800)
      // 1. 切换图片;
      wrapper.style.transition = "left 0.8s";
      wrapper.style.left = -index * 1130 + "px";
      // 动画;
      if(index === sliderLength - 1){
            // alert("最后一张显示了")
            setTimeout(function(){
                  wrapper.style.transition = "xxx 0s";
                  wrapper.style.left = 0;
                  index = 0;
                  // 位移; 为了取消 left 的过渡效果;
            },800)
      }

}
function prevIndex(){
	if(index===0){
		wrapper.style.transition="xxx 0s";
		wrapper.style.left=-(sliderLength-1)*1130 +"px";
		index=sliderLength-2;
	}
	else{
		index -- ;
	}
}





next_btn.onclick = function(){
      if(animate_lock){return false};
      nextIndex();
      animate();
}
prev_btn.onclick=function(){
	if(animate_lock){return false};
	prevIndex();
	setTimeout(function(){
	            animate();
	      },0)
	
}


setInterval( next_btn.onclick , 3000);