/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 轮播背景图片 */
$(function () {
    $.backstretch([  
          "https://lainundalice.oss-cn-beijing.aliyuncs.com/ACG.HD.00525.jpg",
          "/images/ACG.HD.00184.jpg",
          "https://lainundalice.oss-cn-beijing.aliyuncs.com/ACG.HD.00073.jpg",
    ], { duration: 6000, fade: 1500 });  
});

