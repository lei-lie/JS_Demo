window.onload = function() {
    var content = document.getElementById("content");
    // 阻止document对象的默认事件
    document.ondragover = function(e) {
        e.preventDefault();
    };
    // 阻止照片在新窗口中打开
    document.ondrop = function(e) {
        e.preventDefault();
    }
    content.ondragover = function(e) {
        e.preventDefault();
    }
    content.ondrop = function(e) {
        // 获取图片路径
        var imgsFile = e.dataTransfer.files[0];
        //创建一个fileReader对象的实例
        var fs = new FileReader();
        fs.readAsDataURL(imgsFile);
        // 当图片资源加载完成后，将图片显示在content中
        fs.onload = function(e) {
            // 创建图片实例
            var img = new Image();
            img.src = fs.result;
            content.appendChild(img);
        }
    }
};

function upload() {
    var aImg = document.getElementsByTagName('img') || [];
    if (aImg.length <= 0) {
        alert('请将图片拖入内容区！')
    } else {
        for (var i = 0; i < aImg.length; i++) {
            console.log(aImg[i].getAttribute("src"));
        }
    }

}