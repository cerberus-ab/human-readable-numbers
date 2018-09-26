(function() {
    
    // known SI prefixes, multiple of 3
    var prefixes = {
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
        '-6': '&mu;',
        '-9': 'n',
        '-12': 'p',
        '-15': 'f',
        '-18': 'a',
        '-21': 'z',
        '-24': 'y'
    };
    
    function toHumanString(number) {
        var e = 3 * Math.floor(number.toExponential().match(/[eE]([\+\-]\d+)$/)[1] / 3);
        return number / Math.pow(10, e) + prefixes[e];
    }

    // define the module as AMD, commonJS or global
    if (typeof define == 'function' && define.amd) {
        define([], function() {
            return toHumanString;
        });
    } else if (typeof exports != 'undefined') {
        exports = module.exports = toHumanString;
    } else {
        this.toHumanString = toHumanString;
    }

}).call(this);