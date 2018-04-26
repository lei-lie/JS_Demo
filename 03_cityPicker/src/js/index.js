/* http://www.cnblogs.com/coolslider/p/7076390.html */

var cityPicker = {
    data: [],
    curProvince: [],
    curCity: [],
    curArea: [],
    curStreet: []
};
window.onload = function() {
    var oProvince = getId('province')
        // 格式化数据
        //cityPicker.data = nomarlizeData();
        //console.log(cityPicker.data);
    initProvince(oProvince, data);
};

function loadCity(target) {
    // 选中索引
    var index = target.selectedIndex;
    // 选中文本
    var text = target.options[index].text;
    // 选中值
    var value = target.options[index].value;
    cityPicker.curProvince = data[index - 1];
    setCity(data, index);
}

function setCity(data, index) {
    var city = getId('city');
    city.innerHTML = '';
    var first = document.createElement("option");
    first.innerHTML = "=请选择城市=";
    city.appendChild(first);
    var children = data[index - 1].children;

    children.forEach(function(item, index) {
        var op = document.createElement('option');
        op.innerHTML = item.name;
        op.value = item.code
        city.appendChild(op)
    })
    cityPicker.curCity = children;
}

function loadArea(target) {
    // 选中索引
    var index = target.selectedIndex;
    // 选中文本
    var text = target.options[index].text;
    // 选中值
    var value = target.options[index].value;
    cityPicker.curArea = cityPicker.curCity[index - 1].children;
    setArea(cityPicker.curArea, index);
}

function setArea(data, index) {
    var area = getId('area')
    area.innerHTML = "";
    var first = document.createElement("option");
    first.innerHTML = "=请选择区县=";
    area.appendChild(first);
    data.forEach(function(item, index) {
        var op = document.createElement("option");
        op.innerHTML = item.name;
        op.value = item.code;
        area.appendChild(op);
    });
}

function loadStreet(target) {
    // 选中索引
    var index = target.selectedIndex;
    // 选中文本
    var text = target.options[index].text;
    // 选中值
    var value = target.options[index].value;
    cityPicker.curStreet = cityPicker.curArea[index - 1].children;
    setStreet(cityPicker.curStreet, index);
}

function setStreet(data, index) {
    var street = getId("street");
    street.innerHTML = "";
    var first = document.createElement("option");
    first.innerHTML = "=请选择乡镇、街道=";
    street.appendChild(first);
    data.forEach(function(item, index) {
        var op = document.createElement("option");
        op.innerHTML = item.name;
        op.value = item.code;
        street.appendChild(op);
    });
}

/**
 * 初始化省级下拉选项框
 * 
 * @param {Object} target 省级下拉选择框
 * @param {Array} data 所有的城市数据
 */
function initProvince(target, data) {
    target.innerHTML = ''
    var first = document.createElement("option");
    first.innerHTML = "=请选择城市=";
    target.appendChild(first);
    data.forEach(function(item, index) {
        var op = document.createElement('option')
        op.innerHTML = item.name;
        op.value = item.code
        target.appendChild(op);
    });
}

/**
 * 将省市县街道数据整合在一起
 * 
 * @returns {Array} 返回整合后的数据
 */
function nomarlizeData() {
    var province = generateProvince(provinces)
        //generateCity(provinces, province);
        //generateArea(areas, province);
        //generateStreet(streets, province);
        //generateVillage(villages, province)
    return province;
}

/**
 * 格式化省级数据
 * 
 * @param {Array} data 省级数据
 * @returns {Array} list 返回新的省份数据
 */
function generateProvince(data) {
    var list = []
    data.forEach(function(item, index) {
        list.push({
            name: item.name,
            code: item.code,
            children: []
        })

    });
    generateCity(list)
    return list
}
/**
 * 整合省级、市级数据
 * 
 * @param {Array} data 市级数据
 * @param {Array} parent  整合好的省级数据
 */
function generateCity(data) {
    /* for (let i = 0; i < parent.length; i++) {
        let item = parent[i];
        for (let j = 0; j < data.length; j++) {
            if (item.code == data[j].provinceCode) {
                item.children.push({
                    name: data[j].name,
                    code: data[j].code,
                    provinceCode: data[j].provinceCode,
                    children: []
                });
            }
        }
    } */
    data.forEach(function(b) {
        // city
        citys.forEach(function(c) {
            if (c.provinceCode == b.code) {
                b.children.push({
                    name: c.name,
                    code: c.code,
                    provinceCode: c.provinceCode,
                    children: []
                });
                // area
                b.children.forEach(function(d) {
                    areas.forEach(function(e) {
                        if (e.cityCode == d.code) {
                            d.children.push({
                                name: e.name,
                                code: e.code,
                                cityCode: e.cityCode,
                                provinceCode: e.provinceCode,
                                children: []
                            });
                            // street
                            d.children.forEach(function(f) {
                                streets.forEach(function(g) {
                                    if (g.areaCode == f.code) {
                                        f.children.push({
                                            name: g.name,
                                            code: g.code,
                                            areaCode: g.areaCode,
                                            cityCode: g.cityCode,
                                            provinceCode: g.provinceCode,
                                            children: []
                                        });
                                        // villages
                                        f.children.forEach(function(h) {
                                            villages.forEach(function(i) {
                                                if (i.streetCode == h.code) {
                                                    h.children.push({
                                                        name: i.name,
                                                        code: i.code,
                                                        streetCode: i.streetCode,
                                                        areaCode: i.areaCode,
                                                        cityCode: i.cityCode,
                                                        provinceCode: i.provinceCode,
                                                        children: []
                                                    });
                                                }
                                            });
                                        })
                                    }
                                })
                            })
                        }
                    });
                });
            }
        });
    });
}

/**
 * 整合省级、市级、县级数据
 * 
 * @param {Array} data  县级数据
 * @param {Array} parent 整合后的省级、市级数据
 */
function generateArea(data, parent) {
    parent.forEach(function(i, a) {
        i.children.forEach(function(j, b) {
            data.forEach(function(z, c) {
                if (z.cityCode == j.code) {
                    j.children.push({
                        name: z.name,
                        code: z.code,
                        cityCode: z.cityCode,
                        provinceCode: z.provinceCode,
                        children: []
                    });
                }
            });
        });
    });
}

/**
 * 整合省级，市级，县级、乡级数据
 * 
 * @param {any} data 乡级数据
 * @param {any} parent 整合好的省级、市级、县级数据
 */
function generateStreet(data, parent) {

    parent.forEach(function(i, a) {
        i.children.forEach(function(j, b) {
            j.children.forEach(function(z, c) {
                data.forEach(function(n, e) {
                    if (n.areaCode == z.code) {
                        z.children.push({
                            name: n.name,
                            code: n.code,
                            areaCode: n.areaCode,
                            cityCode: n.cityCode,
                            provinceCode: n.provinceCode,
                            children: []
                        });
                        z.children.forEach(function(m, f) {
                            villages.forEach(function(o, g) {
                                if (o.streetCode == m.code) {
                                    m.children.push({
                                        name: o.name,
                                        code: o.code,
                                        streetCode: o.streetCode,
                                        areaCode: o.areaCode,
                                        cityCode: o.cityCode,
                                        provinceCode: o.provinceCode,
                                        children: []
                                    });
                                }
                            });
                        });

                    }
                })
            });
        });
    });
}
/**
 * 整合省级，市级，县级、乡级、村级数据
 * 
 * @param {any} data 村级数据
 * @param {any} parent 整合好的省级、市级、县级、乡级数据
 */
function generateVillage(data, parent) {
    debugger
    parent.forEach(function(i, a) {
        i.children.forEach(function(j, b) {
            j.children.forEach(function(z, c) {
                z.children.forEach(function(n, e) {
                    data.forEach(function(m, f) {
                        if (m.streetCode == n.code) {
                            n.children.push({
                                name: m.name,
                                code: m.code,
                                streetCode: m.streetCode,
                                areaCode: m.areaCode,
                                cityCode: m.cityCode,
                                provinceCode: m.provinceCode,
                                children: []
                            });
                        }
                    });
                });
            });
        });
    });
}