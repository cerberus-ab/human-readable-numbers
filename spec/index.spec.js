'use strict';

const assert = require('assert');
const HRNumbers = require('../src/index');

describe('Human readable numbers specification', () => {
    
    describe('the module', () => {
        it('should provide a function for printing numbers: toHumanString', () => {
            assert.ok(typeof HRNumbers.toHumanString == 'function');
        });
    });
    
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
            '4.567e+27': '4570Y'
            '-4.1359030627651384e-25': '-0.414y'
        };
        for (let n in cases) {
            it(`${n} should be ${cases[n]}`, () => {
                assert.strictEqual(HRNumbers.toHumanString(n), cases[n]);
            });
        }
    });
    
});
