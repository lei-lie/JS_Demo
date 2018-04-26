window.onload = function() {
    var oTab = getId("tab");
    var aItem = getEle("li", oTab);
    var oContainer = getId("tabContent");
    var aContent = getByCls("content", oContainer);
    var arr = list.slice();
    arr.shift();
    var data = dividArr(arr, 4);
    tab(aItem, aContent, data);

    loadHotCity(aContent[0]);
};
/**
 * tab选项卡效果
 * 
 * @param {Array} aItem tab页签li的集合
 * @param {Array} aContent tab content
 * @param {Array} group 分组后的数组
 */
function tab(aItem, aContent, group) {
    for (let i = 0; i < aItem.length; i++) {
        aItem[i].index = i;
        aItem[i].onclick = function() {
            var that = this;
            clearCls(aItem, aContent);
            this.className = "item active";
            aContent[this.index].className = "content active";
            switchCity(that, i, group);
        };
    }
}

function switchCity(target, index, group) {
    var oContainer = getId("tabContent");
    var aContent = getByCls("content", oContainer);
    if (index == 0) {
        aContent[0].innerHTML = '';
        loadHotCity(aContent[0]);
    } else {
        aContent[index].innerHTML = '';
        group[index - 1].forEach(function(item, a) {
            var dl = document.createElement('dl')
            var dt = document.createElement('dt');
            dt.innerHTML = item.name;
            dl.appendChild(dt);
            item.citys.forEach(function(i, b) {
                var dd = document.createElement('dd');
                dd.innerHTML = i;
                dd.setAttribute('data-index', b)
                dl.appendChild(dd)
            });

            aContent[index].appendChild(dl);
        });
    }
}
/**
 * 将一个数组分为n份
 * @param {Array} arr 需要进行分组的数组
 * @param {Number} n 每组元素个数
 * @return {Array} 分组后的新数组
 */
function dividArr(arr, n) {
    var x = 0,
        y = x + n;
    var result = [],
        len = arr.length;

    if (y >= len) {
        return result.push(arr)
    }
    while (y < len) {
        result.push(arr.slice(x, y));
        x = x + n;
        y = x + n;
        if (y > len) {
            y = len;
            result.push(arr.slice(x, y));
            break;
        }
    }

    return result;
}

/**
 * 清除tab页签的高亮显示效果
 * 
 * @param {Array} aItem Item tab页签li的集合
 * @param {Array} aContent tab content
 */
function clearCls(aItem, aContent) {
    for (let i = 0; i < aItem.length; i++) {
        aItem[i].className = "item";
        aContent[i].className = "content";
    }
}
/**
 * 初始化加载热门城市
 * 
 * @param {Object} hotCity 热门城市
 */
function loadHotCity(hotCity) {
    var hotCitys = list[0];
    hotCity.innerHTML = '';
    var dl = document.createElement("dl");
    hotCity.appendChild(dl)
    var dt = document.createElement('dt')
    dt.innerHTML = list[0].name;
    dl.appendChild(dt);
    hotCitys.citys.forEach(function(item, index) {
        var oText = document.createElement('dd');
        oText.innerHTML = item;
        oText.setAttribute('data-index', index)
        dl.appendChild(oText);
    });
}