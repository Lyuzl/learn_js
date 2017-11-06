
//第一步，创建一个sequelize对象实例：
const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

//第二步，定义模型Pet，告诉Sequelize如何映射数据库表
var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {  //我们传入{ timestamps: false }是为了关闭Sequelize的自动添加timestamp的功能
    timestamps: false 
});

//第三步，添加数据
var now = Date.now();
//可以用Promise的方式写
// Pet.create({
//     id: 'g-' + now,
//     name: 'Christophe',
//     gender: true,
//     birth: '2007-11-01',
//     createdAt: now,
//     updatedAt: now,
//     version: 1
// }).then(function(p){
//     console.log('created. ' + JSON.stringify(p));
// }).catch(function(err){
//     console.log('failed: ' + err);
// });

//也可以用await方式写： 添加
// (async () => {
//     var dog = await Pet.create({
//         id: '002',
//         name: 'Odie',
//         gender: true,
//         birth: '2008-11-01',
//         createdAt: now,
//         updatedAt: now,
//         version: 1
//     });
//     console.log('created:' + JSON.stringify(dog));
// })();

// //查询
// (async () => {
//     var pets = await Pet.findAll({
//         where: {
//             name: 'Gaffey'
//         }
//     });
//     console.log(`find ${pets.length} pets:`);
//     for(let p of pets){
//         console.log(JSON.stringify(p));
//     }
// })();

var queryPetById = (async (id) => {
    var pet = await Pet.findById(id);     
    console.log(`find: ` + JSON.stringify(pet));
    return pet;
});

//queryPetById('001');

//更新
(async () => {
    var p = await queryPetById('001');
    p.gender = true;
    p.birth = '2017-10-24';
    p.updatedAt = now;
    p.version++;
    await p.save();
})();

//删除
(async () => {
    var p = await queryPetById('g-1508834725068');
    await p.destroy();
})();