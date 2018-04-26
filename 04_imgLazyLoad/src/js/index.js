//当页面加载或页面滚动或窗口大小改变时,调用懒加载初始化方法
window.onload = window.onresize = window.onscroll = function() {
    loazyLoad.init();
};
/**
 * 根据id获取DOM元素
 * 
 * @param {String} id 需要获取的元素的id
 */
function getId(id) {
    return document.getElementById(id);
}
/**
 * 根据样式名获取DOM元素
 * 
 * @param {String} cls 需要获取元素的样式名
 * @returns 
 */
function getEleByCls(cls) {
    return document.getElementsByClassName(cls);
}
var loazyLoad = {
    // 屏幕可视窗口高度
    wh: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    // 屏幕可视窗口宽度
    ww: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    init: function() {
        var that = this;
        // 获取所有的图片
        var aImg = getEleByCls("lazy-img");
        for (var i = 0; i < aImg.length; i++) {
            if ((that.getClientRect(aImg[i]).top > 0 && that.getClientRect(aImg[i]).top < this.wh) || (that.getClientRect(aImg[i]).bottom > 0 && this.getClientRect(aImg[i]).bottom < that.wh)) {
                //如果图片出现在浏览器可视区域中则用img标签中自定义的data-src值去替src路径
                aImg[i].src = aImg[i].dataset.src;
            }
        }
    },
    // 获取元素到窗口边缘的距离
    getClientRect: function(target) {
        return {
            top: target.getBoundingClientRect().top,
            right: target.getBoundingClientRect().right,
            bottom: target.getBoundingClientRect().bottom,
            left: target.getBoundingClientRect().left
        };
    }
}