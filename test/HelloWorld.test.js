let assert = require('assert');
let HelloWorld = require('../src/HelloWorld.js');

describe('Hello World', function () {
    describe("SayHi", function () {
        it("returns 'Hello World'.", function (){
            assert.equal(new HelloWorld().SayHi(), 'Hello World');
        })
    })
})