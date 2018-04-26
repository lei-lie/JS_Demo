window.onload = function() {
    var oDrag = getId('drag');
    var aDrag = getEle("li", oDrag);
    var oDrop = getId("drop"),
        aDrop = getEle("li", oDrop) || [];
    for (var i = 0; i < aDrag.length; i++) {
        var item = aDrag[i];
        item.setAttribute('draggable', true);
        item.ondragstart = function(e) {
            e.dataTransfer.setData('dragId', this.id)
            e.target.classList.add("blink");
        }
        oDrop.ondragover = function(e) {
            e.preventDefault();
        };

        oDrop.ondrop = function(e) {
            var id = e.dataTransfer.getData("dragId");
            var ele = getId(id);
            var target = document.createElement('li')
            oDrop.appendChild(target);
            target.setAttribute('id', 'drag_' + id)
            ele.parentNode.removeChild(ele)
            target.setAttribute("draggable", true);
            aDrop = getEle('li', oDrop);
            e.target.classList.remove("blink");
        };
    }

    for (var j = 0; j < aDrop.length; j++) {
        var item1 = aDrop[j];
        item1.ondragstart = function(e) {
            e.dataTransfer.setData("dropId", this.id);
            e.target.classList.add("blink");
        };
        oDrag.ondragover = function(e) {
            e.preventDefault();
        };
        oDrag.ondrop = function(e) {
            var id = e.dataTransfer.getData("dropId");
            var ele = getId(id);
            var target = document.createElement("li");
            oDrag.appendChild(target);
            target.setAttribute("id", "drop_" + id);
            ele.parentNode.removeChild(ele);
            target.setAttribute("draggable", true);
            aDrag = getEle("li", oDrag);
            e.target.classList.remove("blink");
        };
    }

};
/**
 * 根据id获取DOM元素
 * 
 * @param {String} id 元素的id
 * @returns 
 */
function getId(id) {
    return document.getElementById(id);
}
/**
 * 根据样标签获取DOM元素
 * 
 * @param {String} tagName 样式名称
 * @param {Object} parent 父级元素
 */
function getEle(tagName, parent) {
    return parent.getElementsByTagName(tagName);
}