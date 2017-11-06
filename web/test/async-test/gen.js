//注意generator函数的定义后面加了个*号！
// function* gen(x){
//     try {
//         var y = yield x * x;
//     } catch (error) {
//         console.log(error);
//     }
// }

// var g = gen();
// g.next();
// g.next();

var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = gen();
var result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});

