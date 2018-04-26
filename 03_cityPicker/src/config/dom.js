/**
 * 根据id获取DOM元素
 * @param {String} id DOM元素的id
 * @return {Object} DOM对象
 */
function getId(id) {
    return document.getElementById(id)
}

/**
 * 通过tagName获取元素
 * 
 * @param {String} tagName 标签名 
 * @param {Object} parent 父级元素 
 * @return {Array} 根据标签名得到的元素集合
 */
function getEle(tagName, parent) {
    return parent.getElementsByTagName(tagName);
}

/**
 * 通过tagName获取元素
 * 
 * @param {String} cls 样式名 
 * @param {Object} parent 父级元素 
 * @return {Array} 根据样式名得到的元素集合
 */
function getByCls(cls, parent) {
    return parent.getElementsByClassName(cls);
}

function clearCalss(list, originCls) {
    list.forEach(function(item) {
        item.className = originCls;
    });
}
/**
 * 给DOM元素添加事件
 * 
 * @param {target}：添加事件的元素
 * @param {type}：添加的事件类型
 * @param {fn}: 执行的方法
 */
function bindEvent(target, type, fn) {
    if (target.addEventListener) {
        target.addEventListener(type, fn, false);
    } else {
        target.attachEvent('on' + type, fn);
    }
}

/**
 * 给DOM元素解除事件
 * 
 * @param {Object}：target 解除事件的元素
 * @param {String}：type 解除事件类型
 * @param {Function}: fn方法
 */
function removeEvent(target, type, fn) {

    if (target.removeEventListener) {

        target.removeEventListener(type, fn, false);

    } else {

        target.detachEvent('on' + type, fn);

    }

}

function _attr(target, attrName, value) {
    if (value) {
        return target.setAttribute(attrName, value);
    } else {
        return target.getAttribute(attrName);
    }
}