'use strict';

const assert = require('assert');
const HRNumbers = require('../src/index');

describe('Human readable numbers specification', () => {
    
    describe('the module', () => {
        it('should provide a function for printing numbers: toHumanString', () => {
            assert.ok(typeof HRNumbers.toHumanString == 'function');
        });
    });
    
    /** TODO: add long prefix support */
    describe('toHumanString: conversion cases', () => {
        let cases = {
            '0': '0',
            '120': '120',
            '5000': '5k',
            '1800000': '1.8M',
            '35e+13': '350T',
            '1.5e+24': '1.5Y',
            '0.95': '950m',
            '0.0006': '600µ',
            '15e-8': '150n',
            '4.5e-24': '4.5y',
            '12345': '12.3k',
            '129500000': '130M',
            '-30': '-30',
            '-9500': '-9.5k',
            '-17e-10': '-1.7n',
            '4.567e+27': '4570Y',
            '-4.1359030627651384e-25': '-0.414y',
            '999999999': '1G',
            '-0.0000009999999999999999': '-1µ',
            '-0.0000010000000000000001': '-1µ',
            '0.1': '100m',
            '0.99999999999999988897769753748435': '1',
            '1.1102230246251565404236316680908e-16': '111a'
        };

        /** TODO: add more cases */
        let cases_long = {
            '0': '0',
            '120': '120',
            '5000': '5 Thousand',
            '1800000': '1.8 Million',
            '35e+13': '350 Trillion',
            '1.5e+24': '1.5 Septillion',
        };
        for (let n in cases) {
            it(`${n} should be ${cases[n]}`, () => {
                assert.strictEqual(HRNumbers.toHumanString(false, n), cases[n]);
            });
        }

        for (let n in cases_long) {
            it(`${n} should be ${cases_long[n]}`, () => {
                assert.strictEqual(HRNumbers.toHumanString(true, n), cases_long[n]);
            });
        }
    });
    
});
