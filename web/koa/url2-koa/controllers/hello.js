var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

//同index.js，把URL处理函数暴露出来
module.exports = {
    'GET /hello/:name': fn_hello
};