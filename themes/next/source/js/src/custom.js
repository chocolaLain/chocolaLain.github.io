/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 轮播背景图片 */
$(function () {
    $.backstretch([  
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563905623123&di=e2408e3fe81b07f72935342e496f400c&imgtype=0&src=http%3A%2F%2Fimgs.aixifan.com%2Fo_1d9ojlqtn1f0k1q421ul2176v21b10.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563905190041&di=4198957d4e35f0f71ea918e14cbb221a&imgtype=0&src=http%3A%2F%2Fnewsimg.5054399.com%2Fuploads%2Fuserup%2F1807%2F16152325L49.jpg",
          "http://source.upupoo.com/theme/2000036208/previewFix.jpg",
    ], { duration: 6000, fade: 1500 });  
});

