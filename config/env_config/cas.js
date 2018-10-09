let evn = {
    NODE_ENV:'cas',
    IS_MOCK:true, // 是否开启mock数据
    TITLE: '平台管理系统',
    URL:'',
    IMGURL: '',
};

try {
    var info = require('../../evn');
} catch (error) {
    var info = {};
}

for(var k in info){
    evn[k] = info[k];
}

module.exports = evn;