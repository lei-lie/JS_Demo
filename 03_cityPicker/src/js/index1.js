var cityPicker = {
    currentProvince: [],
    currentCity: [],
    currentArea: [],
    currentStreet: []
};
window.onload = function() {
    var oTab = getId("tab");
    var aItem = getEle("li", oTab);
    var oContainer = getId("tabContent");
    var aContent = getByCls("content", oContainer);
    var oProvince = getId("privonceCon");
    var oCity = getId('cityCon');
    var oArea = getId("areaCon");
    var oStreet = getId("streetCon");
    tab(aItem, aContent);
    loadProvince(oProvince, oCity, oArea, oStreet, aItem, aContent);
};
/**
 * tab选项卡效果
 * 
 * @param {Array} aItem tab页签li的集合
 * @param {Array} aContent tab content
 */
function tab(aItem, aContent) {
    for (let i = 0; i < aItem.length; i++) {
        aItem[i].index = i;
        aItem[i].onclick = function() {
            /* for (let j = 0; j < aItem.length; j++) {
                aItem[j].className = "item";
                aContent[j].className = "content";
            } */
            clearCls(aItem, aContent);
            this.className = "item active";
            aContent[this.index].className = "content active";
        };
    }
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
 * 初始化加载省级数据
 * 
 * @param {Object} oProvince 省级数据的容器标签
 */
function loadProvince(oProvince, oCity, oArea, oStreet, aItem, aContent) {
    oProvince.innerHTML = "";
    data.forEach(function(item, index) {
        var oText = document.createElement("span");
        oText.innerHTML = item.name;
        oText.setAttribute("data-code", item.code);
        oText.setAttribute("data-index", index);
        oText.onclick = function() {
            var that = this;
            var aText = getEle("span", oProvince) ? getEle("span", oProvince) : [];
            oCity.innerHTML = "";
            setCity(that, oCity, oArea, oStreet, aItem, aContent, aText);
        };
        oProvince.appendChild(oText);
    });
}
/**
 * 点击省份加载地级市数据
 * 
 * @param {any} that  当前点击的省份
 * @param {any} oCity 地级市容器
 * @param {any} aText 所有的省份
 * @param {any} oArea 县级容器
 * @param {any} oStreet 乡级容器
 * @param {any} aItem tab页签集合
 * @param {any} aContent tab content
 */
function setCity(that, oCity, oArea, oStreet, aItem, aContent, aText) {
    for (let i = 0; i < aText.length; i++) {
        aText[i].className = "";
    }
    that.className = "active";
    var index = parseInt(_attr(that, "data-index"));
    clearCls(aItem, aContent);
    aItem[1].className = "item active";
    aContent[1].className = "content active";
    var aCity = data[index].children;
    cityPicker.currentProvince = data[index];
    cityPicker.currentCity = aCity;
    for (let j = 0; j < aCity.length; j++) {
        var oText = document.createElement("span");
        oText.innerHTML = aCity[j].name;
        oText.setAttribute("data-code", aCity[j].code);
        oText.setAttribute("data-index", j);
        oText.onclick = function() {
            var that = this;
            var cityList = getEle("span", oCity) ? getEle("span", oCity) : [];
            oArea.innerHTML = "";
            setArea(that, cityList, oArea, oStreet, aItem, aContent);
        };
        oCity.appendChild(oText);
    }
}
/**
 * 点击市加载县级数据
 * 
 * @param {any} that 当前点击的城市
 * @param {any} cityList 城市列表数据
 * @param {any} oArea 县级容器
 * @param {any} oStreet 乡级容器
 * @param {any} aItem tab页签集合
 * @param {any} aContent  tab content
 */
function setArea(that, cityList, oArea, oStreet, aItem, aContent) {
    for (var j = 0; j < cityList.legnth; j++) {
        cityList[j].className = "";
    }
    that.className = "active";
    var index = parseInt(_attr(that, "data-index"));
    clearCls(aItem, aContent);
    aItem[2].className = "item active";
    aContent[2].className = "content active";
    var aArea = cityPicker.currentCity[index].children;
    cityPicker.currentArea = aArea;
    for (let z = 0; z < aArea.length; z++) {
        var oText = document.createElement("span");
        oText.innerHTML = aArea[z].name;
        oText.setAttribute("data-code", aArea[z].code);
        oText.setAttribute("data-index", z);
        oText.onclick = function() {
            var that = this;
            var List = getEle("span", oArea) ? getEle("span", oArea) : [];
            oStreet.innerHTML = "";
            setStreet(that, List, oStreet, aItem, aContent);
        };
        oArea.appendChild(oText);
    }
}
/**
 * 点击县加载乡级数据
 * 
 * @param {any} that 当前点击的县
 * @param {any} list 县级列表数据
 * @param {any} oStreet 乡级容器
 * @param {any} aItem tab页签集合
 * @param {any} aContent  tab content
 */
function setStreet(that, List, oStreet, aItem, aContent) {
    for (var j = 0; j < List.legnth; j++) {
        List[j].className = "";
    }
    that.className = "active";
    var index = parseInt(_attr(that, "data-index"));
    clearCls(aItem, aContent);
    aItem[3].className = "item active";
    aContent[3].className = "content active";
    var aStreet = cityPicker.currentArea[index].children;
    cityPicker.currentStreet = aStreet;
    for (let z = 0; z < aStreet.length; z++) {
        var oText = document.createElement("span");
        oText.innerHTML = aStreet[z].name;
        oText.setAttribute("data-code", aStreet[z].code);
        oText.setAttribute("data-index", z);
        oStreet.appendChild(oText);
    }
}