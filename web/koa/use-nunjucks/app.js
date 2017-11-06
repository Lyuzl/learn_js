const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

//测试
var s = env.render('hello.html', {name: '阿悄'});
    s = env.render('hello.html', {name: '<script>阿悄<script>'});
console.log(s);

    s = env.render('extend.html', {
        header: 'Hello',
        body: 'today is shi jiu da'
    });
console.log(s);

    s = env.render('score.html', {
        name: 'MIKU',
        score: 99
    })
console.log(s);