(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proline = require("./proline");

var _helpersHelpersJs = require("./helpers/helpers.js");

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var read = {
	t1: 2,
	t1a: 3,
	t1b: 2.3,
	t2: 1.8
};

var w = bannerSize.w;
var h = bannerSize.h;

function init() {
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	return tl;
}

function standard(heros) {
	var tl = init();
	tl.from(".t1", { duration: .5, opacity: 0 }, "+=.5");

	tl.from(".t1_", { duration: .5, opacity: 0 }, "+=.5");
	tl.to([".t1_", ".t1"], { duration: .3, opacity: 0 }, "+=" + read.t1a);

	tl.from(".t1b", { duration: .5, opacity: 0 }, "+=.1");
	tl.to(".t1b", { duration: .2, opacity: 0 }, "+=" + read.t1b);
	tl.from(".hero", { duration: .6, opacity: 0, ease: "power1.out" });
	tl.from(".t2", { duration: .3, opacity: 0 }, "+=.2");
	tl.to(".t2", { duration: .3, opacity: 0 }, "+=" + read.t2);
	// tl.from(".hero", {duration:.5, opacity:0}, "+=.1")

	tl.add("heros");
	tl.from(".bg-news", { duration: .8, opacity: 0, ease: "power1.out" }, "\"heros\"");
	if (heros) {
		tl.add(heros, "heros");
	}

	tl.from(".tint", { duration: .5, opacity: 0 }, "+=.2");
	tl.from(".end", { duration: .3, opacity: 0 }, "+=.2");
	// tl.from([".tint", ".end"], {duration:.5, opacity:0}, "+=.2")

	return tl;
}

function withHeros() {
	var tl = new TimelineMax();
	tl.from(".hero-0", { duration: .3, opacity: 0, ease: "power1.out" }, "+=.1");
	tl.from(".hero-1", { duration: .3, opacity: 0, ease: "power1.out" });
	standard(tl);
}

function b_970x250() {
	withHeros();
}

function b_160x600() {
	standard();
}

function b_300x250() {
	withHeros();
}

function b_300x600() {
	withHeros();
}

function b_1000x700() {
	standard();
}

function b_970x70() {
	standard();
}

function b_320x50() {
	var phoneDuration = arguments.length <= 0 || arguments[0] === undefined ? .29 : arguments[0];

	withHeros();
}

function b_728x90(text1) {
	withHeros();
}

exports.init = init;
exports.b_160x600 = b_160x600;
exports.b_300x250 = b_300x250;
exports.b_300x600 = b_300x600;
exports.b_320x50 = b_320x50;
exports.b_728x90 = b_728x90;
exports.b_970x250 = b_970x250;
exports.b_1000x700 = b_1000x700;
exports.b_970x70 = b_970x70;
exports.origin = _helpersHelpersJs.origin;

},{"./helpers/helpers.js":2,"./proline":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function origin(el, x, y) {
	TweenLite.set(el, { transformOrigin: x + "px " + y + "px", x: -x / 2 + "px", y: -y / 2 + "px", scale: .5 });
}

exports.origin = origin;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],4:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.b_300x600)();

},{"../../_common/js/common.js":1}]},{},[4])


//# sourceMappingURL=main.js.map
