;(function() {
    
    // known SI prefixes, multiple of 3
    const SHORT_PREFIXES = {
        '24': 'Y',
        '21': 'Z',
        '18': 'E',
        '15': 'P',
        '12': 'T',
        '9': 'G',
        '6': 'M',
        '3': 'k',
        '0': '',
        '-3': 'm',
        '-6': 'µ',
        '-9': 'n',
        '-12': 'p',
        '-15': 'f',
        '-18': 'a',
        '-21': 'z',
        '-24': 'y'
    };

    /** I only care about big numbers for now */
    const LONG_PREFIXES = {
        '24': ' Septillion',
        '21': ' Sextillion',
        '18': ' Quintillion',
        '15': ' Quadrillion',
        '12': ' Trillion',
        '9': ' Billion',
        '6': ' Million',
        '3': ' Thousand',
        '0': '',
        '-3': 'm',
        '-6': 'µ',
        '-9': 'n',
        '-12': 'p',
        '-15': 'f',
        '-18': 'a',
        '-21': 'z',
        '-24': 'y'
    };
    
    function getExponent(n) {
        if (n === 0) {
            return 0;
        }
        return Math.floor(Math.log10(Math.abs(n)));
    }
    
    function precise(n) {
        return Number.parseFloat(n.toPrecision(3));
    }
    
    function toHumanString(long, sn) {
        if (long === true) {
            var PREFIXES = LONG_PREFIXES;
        } else {
            var PREFIXES = SHORT_PREFIXES;
        }
        var n = precise(Number.parseFloat(sn));
        var e = Math.max(Math.min(3 * Math.floor(getExponent(n) / 3), 24), -24);
        return precise(n / Math.pow(10, e)).toString() + PREFIXES[e];
    }
    
    // the module exports
    var HRNumbers = {
        toHumanString: toHumanString
    };

    // define the module as AMD, commonJS or global
    if (typeof define == 'function' && define.amd) {
        define([], function() {
            return HRNumbers;
        });
    } else if (typeof exports != 'undefined') {
        exports = module.exports = HRNumbers;
    } else {
        this.HRNumbers = HRNumbers;
    }

}.call(this));
