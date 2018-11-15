/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 轮播背景图片 */
$(function () {
    $.backstretch([  
          "http://pi67irekk.bkt.clouddn.com/18-11-15/15849755.jpg",
          "http://pi67irekk.bkt.clouddn.com/18-11-15/62187172.jpg",
          "http://pi67irekk.bkt.clouddn.com/18-11-15/81500241.jpg"
    ], { duration: 6000, fade: 1500 });  
});