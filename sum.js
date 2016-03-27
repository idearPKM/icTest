var a = 3
var b = 2
var sum = 0

function plus () {
  sum = a + b
  return sum
}
console.log(plus())

var assert = require('assert')
describe('Summary', function () {
  describe('sum', function () {
    it('3+2 = 5', function () {
      assert.equal(plus(), 5)
    })
  })
})
