(() => {
    // ***** Easing functions *****
    // http://gizma.com/easing/#l
    // https://kodhus.com/easings/

    const _ease = {
        linear: (t, b, c, d) => { return c*t/d + b },
        easeInQuad: (t, b, c, d) => { t /= d; return c*t*t + b; },
        easeOutQuad: (t, b, c, d) => { t /= d; return -c * t*(t-2) + b; },
        easeInOutQuad: (t, b, c, d) => { t /= d/2; if (t < 1) return c/2*t*t + b; t--; return -c/2 * (t*(t-2) - 1) + b; },
        easeInCubic: (t, b, c, d) => {t /= d; return c*t*t*t + b; },
        easeOutCubic: (t, b, c, d) => { t /= d; t--; return c*(t*t*t + 1) + b; },
        easeInOutCubic: (t, b, c, d) => { t /= d/2; if (t < 1) return c/2*t*t*t + b; t -= 2; return c/2*(t*t*t + 2) + b; },
        easeInQuart: (t, b, c, d) => { t /= d; return c*t*t*t*t + b; },
        easeOutQuart: (t, b, c, d) => { t /= d; t--; return -c * (t*t*t*t - 1) + b; },
        easeInOutQuart: (t, b, c, d) => { t /= d/2; if (t < 1) return c/2*t*t*t*t + b; t -= 2; return -c/2 * (t*t*t*t - 2) + b; },
        easeInQuint: (t, b, c, d) => { t /= d; return c*t*t*t*t*t + b; },
        easeOutQuint: (t, b, c, d) => { t /= d; t--; return c*(t*t*t*t*t + 1) + b; },
        easeInOutQuint: (t, b, c, d) => { t /= d/2; if (t < 1) return c/2*t*t*t*t*t + b; t -= 2; return c/2*(t*t*t*t*t + 2) + b; },
        easeInSine: (t, b, c, d) => { return -c * Math.cos(t/d * (Math.PI/2)) + c + b; },
        easeOutSine : (t, b, c, d) => { return c * Math.sin(t/d * (Math.PI/2)) + b; },
        easeInOutSine: (t, b, c, d) => { return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b; },
        easeInExpo: (t, b, c, d) => { return c * Math.pow( 2, 10 * (t/d - 1) ) + b; },
        easeOutExpo: (t, b, c, d) => { return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b; },
        easeInOutExpo: (t, b, c, d) => { t /= d/2; if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b; t--; return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b; },
        easeInCirc: (t, b, c, d) => { t /= d; return -c * (Math.sqrt(1 - t*t) - 1) + b; },
        easeOutCirc: (t, b, c, d) => { t /= d; t--; return c * Math.sqrt(1 - t*t) + b; },
        easeInOutCirc: (t, b, c, d) => { t /= d/2; if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b; t -= 2; return c/2 * (Math.sqrt(1 - t*t) + 1) + b; },
        easeInBack: (t, b, c, d, s) => { if (s == undefined) {s = 1.70158;} return c*(t/=d)*t*((s+1)*t - s) + b; },
        easeOutBack: (t, b, c, d, s) => { if (s == undefined) {s = 1.70158;} return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b; },
        easeInOutBack: (t, b, c, d, s) => { if (s == undefined) {s = 1.70158;} if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b; return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b; },
        easeOutBounce: (t, b, c, d) => {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInBounce: (t, b, c, d) => { return c - _ease.easeOutBounce(d-t, 0, c, d) + b; },
        easeInOutBounce: (t, b, c, d) => { if (t < d/2) return _ease.easeInBounce(t*2, 0, c, d) * .5 + b; return _ease.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b; },
        easeInElastic: (t, b, c, d) => {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: (t, b, c, d) => {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: (t, b, c, d) => {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    }
    
    
    let sevenTweenEase = {
        plugin: (sevenTween) => {
            if(sevenTween) {
                sevenTween._easeFunctions = _ease
            }
        },
        easeFunctions: _ease
    }
    
    // Browser export as a global
    if(typeof window !== 'undefined') {
        window.sevenTweenEase = sevenTweenEase
    }
    
    // Node Export
    if (typeof(module) !== "undefined" && module.exports) {
        module.exports = sevenTweenEase;
    }
    
})()