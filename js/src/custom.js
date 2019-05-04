/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 轮播背景图片 */
$(function () {
    $.backstretch([  
          "https://lainundalice.oss-cn-beijing.aliyuncs.com/img/01300310473923133091783028360.jpg",
          "https://lainundalice.oss-cn-beijing.aliyuncs.com/img/hitachi-mako-senren-banka-visual-novel-ninja-knife-blade.png",
          "https://lainundalice.oss-cn-beijing.aliyuncs.com/img/芳乃&茉子-学生服01.png",
    ], { duration: 6000, fade: 1500 });  
});

