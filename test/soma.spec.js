const { expect } = require('code')
const Lab = require('lab')
const lab = exports.lab = Lab.script()

const { soma } = require('../soma')

lab.test('returns true when 1 + 1 equals 2', (done) => {

    expect(soma(1,1)).to.equal(2)
    
})