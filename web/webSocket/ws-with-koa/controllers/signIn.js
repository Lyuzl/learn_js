var fn_signin = async (ctx, next) => {
    var 
        email = ctx.request.body.email || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name:${email}, password: ${password}`);
    if (email === 'admin@example.com' && password === '123456'){
        //登录成功
        ctx.render('signin-ok.html', {
            name: 'Mr Lyu',
            title: 'Sign In OK!'
        });
    } else {
        //登录失败
       ctx.render('signin-failed.html', {
            title: 'Sign In Fail.'
       })
    }
}


//同signIn.js，把URL处理函数暴露出来
module.exports = {
    'POST /signin': fn_signin
};