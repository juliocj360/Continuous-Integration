const { expect } = require('chai')
const { calculator } = require('../index.js')

describe('calculator', () => {
  describe('add', () => {
    it('correctly adds ', () => {
      const res = calculator.add(2, 3);
      expect(res).to.equal(5)
    });
  })
  describe('subtract', () => {
    it('correctly subtracts ', () => {
      const res = calculator.subtract(3, 2);
      expect(res).to.equal(1)
    });
  })
  describe('multiply', () => {
    it('correctly multiplys ', () => {
      const res = calculator.multiply(2, 3);
      expect(res).to.equal(6)
    });
  })
  describe('divide', () => {
    it('correctly divides ', () => {
      const res = calculator.divide(6, 3);
      expect(res).to.equal(2)
    });
  })
})
