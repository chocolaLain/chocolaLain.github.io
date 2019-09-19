/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 轮播背景图片 */
$(function () {
    $.backstretch([  
          "images/ACG.HD.00860.jpg",
          "images/ACG.HD.00337.jpg",
          "images/ACG.HD.00184.jpg",
    ], { duration: 6000, fade: 1500 });  
});

