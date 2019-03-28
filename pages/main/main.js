const app = getApp()

Page({
    data: {
        radioItems: [
            { name: '男', value: 0, checked: false },
            { name: '女', value: 1, checked: false }
        ],
        colleges: [
            {name:'建筑学院',value:0},
            {name:'机械工程学院',value:1},
            {name:'能源与环境学院',value:2},
            {name:'信息科学与工程学院',value:3},
            {name:'电子科学与工程学院',value:4},
            {name:'数学学院',value:5},
            {name:'自动化学院',value:6},
            {name:'物理学院',value:7},
            {name:'生物科学与医学工程学院',value:8},
            {name:'材料科学与工程学院',value:9},
            {name:'经济管理学院',value:10},
            {name:'电气工程学院',value:11},
            {name:'外国语学院',value:12},
            {name:'化学化工学院',value:13},
            {name:'交通学院',value:14},
            {name:'仪器科学与工程学院',value:15},
            {name:'法学院',value:16},
            {name:'医学院',value:17},
            {name:'公共卫生学院',value:18},
            {name:'海外教育学院',value:19},
            {name:'软件学院',value:20},
            {name:'微电子学院',value:21},
            {name:'马克思主义学院',value:22},
            {name:'网络空间安全学院',value:23},
            {name:'人工智能学院',value:24},
            {name:'东南大学雷恩研究生学院',value:25},
            {name:'东南大学—蒙纳士大学苏州联合研究生院',value:26},
        ],
        college:'',
    },

    bindPickerChangeCollege: function (e) {
        console.log(this.data.colleges)

        this.setData({
    
        })
    }
})