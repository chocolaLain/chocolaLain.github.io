/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 轮播背景图片 */
$(function () {
    $.backstretch([  
          "https://tsundora.com/image/2014/06/strike_witches_435-1024x666.jpg",
          "https://blog-001.west.edge.storage-yahoo.jp/res/blog-af-dc/blacksisterred/folder/1199014/67/36181567/img_0",
          "http://pi67irekk.bkt.clouddn.com/18-11-17/37361663.jpg"
    ], { duration: 6000, fade: 1500 });  
});