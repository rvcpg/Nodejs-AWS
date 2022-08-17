const assert = require('assert');
const { expect } = require('chai');
const { add } = require('../src/app');

describe('addition function', () => {
    it('should add 2 numbers together', () => {
        const result = add(2,2);
        //assert.equal(result, 4);
        expect(result).to.be.eq(4);

    });
    it('should also be able to print a single number', () => {
        const result = add(2);
        expect(result).to.be.eq(2);

    });
    it('should also handle 0 numbers', () => {
        const result = add();
        expect(result).to.be.eq(0);
    });

});