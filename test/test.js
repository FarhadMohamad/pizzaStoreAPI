const assert = require('assert');
const should = require('should');
const expect = require('chai').expect;
const { pizzas } = require('../data/pizzas')

console.log(Object.keys(pizzas[0]).length);

    describe('Scenario 1', function() {
      //  let pizzaName = pizzas[0][2].name;
        it('Pizza 2 is pepperoni', function() {
          //  expect(pizzaName).to.equal('pepperoni');

       // });

        it('Length Equals', function() {
            expect(Object.keys(pizzas[0])).to.have.lengthOf(3);

        });

        it('Property Equals', function() {
            expect(pizzas[0][0]).to.have.property('name').with.lengthOf(7);
        });
    });



