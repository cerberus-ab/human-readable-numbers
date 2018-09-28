;(function() {
    
    // known SI prefixes, multiple of 3
    var PREFIXES = {
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
    
    function getExponent(n) {
        return Number.parseFloat(n).toExponential().match(/[eE]([\+\-]\d+)$/)[1];
    }
    
    function roundSignificand(s) {
        // expects the significand in range [1..1000)
        return parseFloat(s.toPrecision(3));
    }
    
    function toHumanString(n) {
        var e = Math.min(3 * Math.floor(getExponent(n) / 3), 24);
        return roundSignificand(n / Math.pow(10, e)) + PREFIXES[e];
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