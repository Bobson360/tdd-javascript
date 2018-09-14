const { expect } = require('code')
const Lab = require('lab')
const lab = exports.lab = Lab.script()

const { soma } = require('../soma')

lab.test('returns true when 1 + 1 equals 2', () => {

    expect(soma(1,1)).to.equal(2)
    
})

lab.test('Rodar sem parametros', () => {

    expect(soma()).to.equal(0)
    
})