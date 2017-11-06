var fn_index = async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    });
};

//通过module.exports把两个URL处理函数暴露出来。
module.exports = {
    'GET /': fn_index
};