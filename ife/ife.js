var menu = [
    ['零基础学院',
        ['basicAcademy/beautifulWeb/index.html', '美丽的页面'],
        ['basicAcademy/layout_float_position/resume.html', '布局简历'],
        ['basicAcademy/js_16/js_16.html', '加减乘除']
    ],
    ['MVVM设计学院',
        //
        // ['demo/component/101/index.html', '简易电子时钟'],
        // ['demo/component/201/index.html', '绘制七巧板'],
        // ['demo/ife/task_3_33_1.html', 'SVG 实践'],
        // // ['demo/ife/task_3_38_1.html', '排序表格'],
        // ['demo/ife/task_3_39_1.html', '首行冻结的表格'],
        // // ['demo/ife/task_3_41_1.html', '日历组件Ⅱ'],
        // // ['demo/ife/task_3_42_1.html', '日历组件Ⅲ'],
        // ['demo/algorithms/sort.html', '排序可视化'],
        // ['demo/ife/task_3_37_1.html', '浮出层'],
        // ['demo/component/111/index.html', '滚动条'],
        // ['components/calendar/demo.html', '日历组件'],
        // ['demo/component/401/index.html', '滑动轮播图'],
        // ['components/fadeslide/index.html', '渐显渐隐轮播图']
    ],
    // ['Vue 相关', ['components/cssfilter/app/index.html', 'Filter生成器']],
    // ['Node 相关', ['https://github.com/hollowtree/koa-blog', '一个博客']]
];
var list = "";
for (var i = 0; i < menu.length; i++) {
    for (var j = 0; j < menu[i].length; j++) {
        if (j == 0) {
            list += '<div class="myMenu"><dt class="fMenu">' + menu[i][0] + '</dt><div class="sMenu">';
        } else {
            list += '<dd><a href="' + menu[i][j][0] + '" target="_blank">' + j + ")  " + menu[i][j][1] + '</a></dd>';
        }
    }
    list += '</div></div>';
}
list = '<a href=\"https://github.com/SQYun/ife2018/tree/master/" target=\"_blank\" class=\"github-link\"></a><div class="menu"><dl>' + list + '</dl></div>';
window.onload = function () {
    var listDom = document.getElementById('list');
    listDom.innerHTML= list;
};