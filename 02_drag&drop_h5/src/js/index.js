window.onload = function() {
    var oDrag = document.getElementById("drag");
    var oDrop = document.getElementById("drop")
        // 元素拖动时，执行的操作
    oDrag.ondragstart = function(e) {
            var target = e.target;
            target.classList.add('drag');
            target.innerHTML = 'dragged';
        }
        // 放到何处
    oDrag.ondragover = function(e) {
        // 默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方
        e.preventDefault();
    }
    oDrag.ondrop = function(e) {
        var el = e.target;
        el.classList.remove('drag')
        el.innerHTML = "droped";
        if (e.target.nodeName === "LI") {
            e.target.parentNode.insertBefore(el, e.target); //将源对象元素插入到目标元素前面
        }
    }
};