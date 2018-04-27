# JQuery实现仿Bootstrap-Table的分页效（00_pagination）
## 要点
1.计算总页数
> 总页数 = 数据总条数 / 每页显示的数据条数， 结果向上取整
2.计算数据开始位置、结束位置
> 开始位置 = （当前页码 - 1）* 当前展示的数据条数 + 1
结束位置 = 当前页码 * 当前展示的数据条数

3.计算当前页码
> 当点击上一页，当前页码减一，当页码值等于第一页的页码值时，将当前页码置为最后一页的页码值；
当点击下一页，当前页码加一，当页码值等于最后一页的页码值，则将当前页码值置为首页的页码值；

4.根据数据开始位置和结束为止，加载表格当前页的数据
> 使用Array对象的slice(start，end),方法提取当前需要的表格数据；
即是： 
`arr.slice(start-1, end)`
减1的原因是源数据的索引是从0开始的，而本例中的数据开始位置是从1开始的；

5.每次改变数据条数的时候，将页码置为1;

6.页码列表展示
> 根据当前数据条数是否大于等于总数据条数，若大于等于则隐藏，反之显示或者是判断表格数据的长度是否小于等于1，若是则隐藏，反之显示；
# 原生JavaScript实现随机生成字母数字验证码(01_randomValidateCode)
## 实现思路
## 产生4位随机的组合验证码
1. 定义一个数码数组arr，用于盛放'a-z', 'A-Z', '0-9'，这个数组长度为62;
2. 先定义一个空数组result，用于盛放产生的4位随机码；
4. 实现一个循环次数是4的循环，在该循环中随机产生一个[0,62]的数字，用于获取1中数码数组arr的元素，然后将得到的随机数码放到2中定义的数组中，知道循环结束；
5. 循环结束后，调用数组的join方法，将result数组中的元素进行拼接，得到最终的随机验证码；

# HTML5拖放 API 学习笔记（02_drag&drop_h5）
## 参考资料
http://www.w3school.com.cn/html5/html_5_draganddrop.asp
##  简单拖放规则
1. 对需要进行拖放的元素，将draggable 属性值置为true,允许元素可拖放；
2. 给元素绑定开始拖动事件（ondragstart），规定当元素被拖动时，会发生什么;
3. 给元素绑定拖动经过事件(ondragover),规定在何处放置被拖动的数据.默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，必须阻止对元素的默认处理方式。`event.preventDefault()`
4. 进行放置操作，即是给元素绑定ondrop事件，规定放置被拖动元素时，需要进行的操作；

#  原生JavaScript实现城市四级联动(03_cityPicker)
## 数据来源
demo数据来源于：https://github.com/visugar/FrontEnd-examples/blob/master/01%E7%9C%81%E5%B8%82%E5%8C%BA%E4%B8%89%E7%BA%A7%E8%81%94%E5%8A%A8/city02.js
## 参考资料
https://blog.csdn.net/majormayer/article/details/51132338
## 思路
### 下拉选择效果
1. 页面初始化时，先加载省级数据；
2. 当选择某个省时，加载对应地级市的数据；
3. 当选择某个地级市时，加载对应的县级数据；
4. 当选择某个县级时，加载对应的乡级数据；
###tab选项卡效果 
1. 页面初始化时，先加载省级数据；
2. 当点击某个省时，加载对应地级市的数据；
3. 当点击某个地级市时，加载对应的县级数据；
4. 当点击某个县级时，加载对应的乡级数据；
### 按字母顺序加载城市列表
在页面初始化时，默认展示热门城市的数据；

初始化页面时，先将数据进行分组，在分组之前要排除热门城市的数据，对剩余的数据进行分组，分组方法是dividArr;

在点击tab切换页签时，将内容添加到对应的容器内；
# 原生JavaScript实现图片懒加载(04_imgLazyLoad)

## 原文地址
https://github.com/visugar/FrontEnd-examples/blob/master/07lazyLoading/index.html

## 实现思路
1. 在img元素时，自定义一个属性data-src，用于存放图片的地址；
2. 获取屏幕可视区域的尺寸；
3. 获取元素到窗口边缘的距离；
4. 判断元素时候再可视区域内，在则将data-src的值赋给src,否则，不执行其他操作；
实质： 当图片在可视区域内时，才加载，否则不加载；
