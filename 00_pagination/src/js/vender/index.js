var data = [{
        item1: 1,
        item2: 3,
        item3: 4
    },
    {
        item1: 4,
        item2: 5,
        item3: 6
    },
    {
        item1: 7,
        item2: 8,
        item3: 9
    },
    {
        item1: 10,
        item2: 11,
        item3: 12
    },
    {
        item1: 13,
        item2: 14,
        item3: 15
    },
    {
        item1: 16,
        item2: 17,
        item3: 18
    },
    {
        item1: 19,
        item2: 20,
        item3: 21
    },
    {
        item1: 22,
        item2: 23,
        item3: 24
    },
    {
        item1: 25,
        item2: 26,
        item3: 27
    },
    {
        item1: 27,
        item2: 29,
        item3: 30
    },
    {
        item1: 31,
        item2: 32,
        item3: 33
    },
    {
        item1: 34,
        item2: 35,
        item3: 36
    },
    {
        item1: 37,
        item2: 38,
        item3: 39
    },
    {
        item1: 40,
        item2: 41,
        item3: 42
    },
    {
        item1: 43,
        item2: 44,
        item3: 45
    },
    {
        item1: 46,
        item2: 47,
        item3: 48
    },
    {
        item1: 49,
        item2: 50,
        item3: 51
    },
    {
        item1: 52,
        item2: 53,
        item3: 54
    },
    {
        item1: 55,
        item2: 56,
        item3: 57
    },
    {
        item1: 58,
        item2: 59,
        item3: 60
    },
    {
        item1: 61,
        item2: 62,
        item3: 63
    },
    {
        item1: 64,
        item2: 65,
        item3: 66
    },
    {
        item1: 67,
        item2: 68,
        item3: 69
    },
    {
        item1: 7,
        item2: 8,
        item3: 9
    },
    {
        item1: 1,
        item2: 3,
        item3: 4
    },
    {
        item1: 4,
        item2: 5,
        item3: 6
    },
    {
        item1: 7,
        item2: 8,
        item3: 9
    },
    {
        item1: 1,
        item2: 3,
        item3: 4
    },
    {
        item1: 4,
        item2: 5,
        item3: 6
    },
    {
        item1: 7,
        item2: 8,
        item3: 9
    },
    {
        item1: 1,
        item2: 3,
        item3: 4
    },
    {
        item1: 4,
        item2: 5,
        item3: 6
    },
    {
        item1: 7,
        item2: 8,
        item3: 9
    },
    {
        item1: 1,
        item2: 3,
        item3: 4
    },
    {
        item1: 4,
        item2: 5,
        item3: 6
    },
    {
        item1: 7,
        item2: 8,
        item3: 9
    }
];
var pagination = {
    // 表体数据
    data: data,
    // 总条数
    total: 0,
    // 总页数
    totalPages: 0,
    // 当前页码
    pageNumber: 1,
    // 每页数据条数
    pageSize: 10,
    // 开始数据的位置
    start: 1,
    // 结束数据的位置
    end: 10,
    // 可供选择的每页的行数
    pageList: [10, 25, 50, 100],
    init: function(opt) {
        var that = this;
        // 计算总条数
        that.total = that.data.length;
        opt.totalNum.html(that.total);
        that.loadPageData(opt, that);
        // 计算页数
        that.calculateNumberList(opt);
        that.showTableData(opt);
        opt.startNum.html(that.start);
        opt.endNum.html(that.end);
        // 改变数据条数
        opt.changeList.on('change', function(e) {
            var _this = this;
            that.pageNumber = 1;
            that.changeNumber(that, _this, opt);

        });
        // 上一页
        opt.paginationList.find("li.prev").on('click', function() {
            var _this = this;
            $(_this).siblings().removeClass('active');
            $(_this).removeClass("active");
            if (that.pageNumber == 1) {
                that.pageNumber = that.totalPages;
            } else {
                that.pageNumber--;
            }
            that.loadPageData(opt, that);
            var page = opt.paginationList.find("li.page");
            for (let i = 0; i < page.length; i++) {
                if (i == that.pageNumber - 1) {
                    $(page[i]).addClass("active");
                }
            }
            that.showTableData(opt);
        });
        // 下一页
        opt.paginationList.find("li.next").on('click', function() {
            var _this = this;
            $(_this).siblings('li').removeClass("active");
            $(_this).removeClass("active");
            if (that.pageNumber == that.totalPages) {
                that.pageNumber = 1;
            } else {
                that.pageNumber++;
            }
            that.loadPageData(opt, that);
            var page = opt.paginationList.find("li.page");
            for (let i = 0; i < page.length; i++) {
                if (i == that.pageNumber - 1) {
                    $(page[i]).addClass("active");
                }
            }
            that.showTableData(opt);
        });

    },
    // 改变开始位置，结束位置
    loadPageData: function(opt, that) {
        that.start = (that.pageNumber - 1) * that.pageSize + 1;
        that.end = that.pageNumber * that.pageSize;
        if (that.end > that.total) {
            that.end = that.total;
        }
        opt.startNum.html(that.start);
        opt.endNum.html(that.end);
    },
    // 计算页码数量
    calculateNumberList: function(opt) {
        var that = this;
        // 计算总的页数 = 数据总条数 / 每页显示的条数
        that.totalPages = Math.ceil(that.total / that.pageSize);
        // 创建页数标签
        opt.paginationList.find("li.page").remove();
        if (that.pageSize >= that.total || that.data.length <= 1) {
            opt.paginationList.hide();
        } else {
            opt.paginationList.show();
            for (let i = 0; i < that.totalPages; i++) {
                opt.next.before("<li class='page'><span>" + parseInt(i + 1) + "</span></li>");
            }
            opt.paginationList
                .find("li:nth-child(2)")
                .addClass("active");
        }
        // 点击页码改变数据
        opt.paginationList.find("li.page").on("click", function() {
            var _this = this;
            var _this = this;
            $(_this)
                .siblings()
                .removeClass("active");
            $(_this).addClass("active");
            that.pageNumber = parseInt(
                $(_this)
                .find("span")
                .text()
            );
            that.loadPageData(opt, that);
            that.showTableData(opt);

        });
    },
    // 展示表格数据
    showTableData: function(opt) {
        var arr = [],
            that = this,
            len;
        arr = that.data.slice(that.start - 1, that.end);
        that.initTable(opt, arr);

    },
    initTable(opt, arr) {
        opt.table
            .find("tbody")
            .find("tr")
            .remove();
        arr.forEach(function(item, index) {
            var oTr = $("<tr></tr>");
            for (let key in item) {
                oTr.append("<td>" + item[key] + "</td>");
            }
            opt.table.find("tbody").append(oTr);
        });
    },
    changeNumber: function(that, target, opt) {
        that.pageSize = parseInt($(target)
            .find("option:selected")
            .text());
        if (that.pageSize >= that.total) {
            that.pageSize = that.total
            that.start = 1;
            that.pageNumber = 1
        }
        that.loadPageData(opt, that);
        that.calculateNumberList(opt);
        that.showTableData(opt);
    }
};

window.onload = function() {
    var option = {
        startNum: $(".start-num"),
        endNum: $(".end-num"),
        totalNum: $(".total"),
        changeList: $("#changeNumber"),
        paginationList: $("#paginationList"),
        prev: $(".prev"),
        next: $(".next"),
        table: $('#table')
    };
    pagination.init(option);
};