var hello = require('../hello');
const assert = require('assert');


describe('#async hello', () => {
    describe('#Calculate()', () => {
        //写try catch方式测试
        it('test async function', function(done){
            (async function() {
                try {
                    let r = await hello();
                    assert.strictEqual(r, 15);
                    done();
                } catch (error) {
                    done(error);
                }
            })();
        });

        //直接当成同步方式测试
        it('#async function', async () => {
            let r = await hello();
            assert.strictEqual(r, 15);
        });

        it('#sync function', () => {
            assert(true);
        });
    });
});
