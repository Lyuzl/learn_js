
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 注意require('koa-router')返回的是函数,相当于下面两句：
// const fn_router = require('koa-router');
// const router = fn_router();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');


//创建一个Koa对象表示web app本身
const app = new Koa();

//log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();

});
//由于middleware的顺序很重要，这个koa-bodyparser必须在router之前被注册到app对象上。
app.use(bodyParser());

//add url-route  注册一个get请求
//可以在请求路径中使用带变量的/hello/:name，变量可以通过ctx.params.name访问。
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action='/signin' method='post'>
            <p>Name: <input name='name' value='koa'></p>
            <p>Password: <input name='password' type='password'></p>
            <p><input type='submit' value='submit'></p>
        </form>`;
});

//注册一个post请求
router.post('/signin', async (ctx, next) => {
    var 
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name:${name}, password: ${password}`);
    if (name === 'koa' && password === '12345'){
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href='/'>Try again</a></p>`;
    }
});

//add router middleware:
app.use(router.routes());

//在端口3000监听
app.listen(3000);
console.log('app started at port 3000...');