/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 轮播背景图片 */
$(function () {
    $.backstretch([  
          "https://lainundalice.oss-cn-beijing.aliyuncs.com/img/ACG.HD.00661.jpg",
          "https://lainundalice.oss-cn-beijing.aliyuncs.com/img/ACG.HD.00189.jpg",
          "https://lainundalice.oss-cn-beijing.aliyuncs.com/img/ACG.HD.00087.jpg",
    ], { duration: 6000, fade: 1500 });  
});

