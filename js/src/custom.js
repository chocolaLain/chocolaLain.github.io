/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 轮播背景图片 */
$(function () {
    $.backstretch([  
          "http://lainundalice.oss-cn-beijing.aliyuncs.com/18-12-1/82681411.jpg",
          "http://lainundalice.oss-cn-beijing.aliyuncs.com/18-12-1/55844920.jpg",
          "http://lainundalice.oss-cn-beijing.aliyuncs.com/18-11-30/89578206.jpg"
    ], { duration: 6000, fade: 1500 });  
});
/* 备用轮播背景图片 */
/*$(function () {
    $.backstretch([  
          "http://pi67irekk.bkt.clouddn.com/18-11-21/9424912.jpg",
          "http://pi67irekk.bkt.clouddn.com/18-11-21/73456748.jpg",
          "http://pi67irekk.bkt.clouddn.com/18-11-15/49794517.jpg"
    ], { duration: 6000, fade: 1500 });  
});*/