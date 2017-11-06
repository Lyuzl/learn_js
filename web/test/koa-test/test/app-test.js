const
    request = require('supertest'),
    app = require('../app');

describe('#test koa server', () => {

    let server = app.listen(9900);

    it('test GET /', async () => {
        let res = await request(server)
            .get('/')
            .expect('Content-Type', /text\/html/)
            .expect(200, '<h1>Hello, world!</h1>')
    })

    it('test GET /path?name=Lyu', async () => {
        let res = await request(server)
            .get('/path?name=Lyu')
            .expect('Content-Type', /text\/html/)
            .expect(200, '<h1>Hello, Lyu!</h1>')
    })
});