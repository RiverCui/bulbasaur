// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\n/*\n * \u5927\u5BB6\u597D\uFF0C\u6211\u662FRiver\n * \u73B0\u5728\u6765\u7ED9\u4F60\u753B\u4E00\u4E2A\n * \u5999\u86D9\u79CD\u5B50\uFF01\n */\n.skin*{box-sizing: border-box;margin: 0;padding: 0;}\n.skin*::before,.skin*::after{box-sizing: border-box;}\n\n.skin{\n    background: #7fc9ac;\n    min-height: 200vh;\n    position: relative;\n    z-index: -5;\n}\n@media (max-width:500px){\n    .skin{\n        zoom: 50%;\n    }\n}\n\n/*\n * \u753B\u5C0F\u9F3B\u5B50\n */\n.nose{\n    width: 12px;\n    height: 3px;\n    position: absolute;\n    background: #000;\n    left: 50%;\n    top: 400px;\n    margin-left: -6px;\n}\n.nose.left{\n    transform: translateX(-10px) rotate(50deg);\n}\n.nose.right{\n    transform: translateX(10px) rotate(-50deg);\n}\n/*\n * \u753B\u7709\u6BDB\n */\n.eyebrow{\n    border: 3px solid #000;\n    width: 90px;\n    height: 90px;\n    position: absolute;\n    left: 50%;\n    top: 260px;\n    margin-left: -45px;\n    border-radius: 500px/1000px;\n    z-index: 10;\n}\n.eyebrow.left{\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    border-top-color: transparent;\n    transform: translateX(-110px) rotate(-15deg);\n}\n.eyebrow.right{\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    transform: translateX(110px) rotate(15deg);\n}\n/*\n* \u753B\u773C\u775B\n*/\n.eye{\n    width: 130px;\n    height: 150px;\n    background: #fff;\n    border: 3px solid black;\n    position: absolute;\n    left: 50%;\n    top: 210px;\n    margin-left: -65px;\n}\n.eye.left{\n    border-radius: 150% 600% 100% 100%;\n    transform: translateX(-150px);\n    overflow: hidden;\n}\n.eye.right{\n    border-radius: 600% 150% 100% 100%;\n    transform: translateX(150px);\n    overflow: hidden;\n}\n/*\n* \u52A0\u4E00\u5BF9\u7C89\u8272\u7684\u773C\u73E0\n*/\n.left .pupil{\n    background: #c03e5a;\n    width: 110px;\n    height: 200px;\n    border-radius: 100% 25% 0 20%;\n    position: absolute;\n    right: 0;\n    top: -10px;\n}\n.right .pupil{\n    background: #c03e5a;\n    width: 110px;\n    height: 200px;\n    border-radius: 25% 100% 20% 0;\n    position: absolute;\n    left: 0;\n    top: -10px;\n}\n/*\n* \u53CC\u773C\u65E0\u795E\uFF1F\n*/\n.left .pupil::before{\n    content: '';\n    display: block;\n    background: #fff;\n    width: 20px;\n    height: 70px;\n    border-radius: 50%;\n    position: absolute;\n    right: 25%;\n    top: 35px;\n}\n.right .pupil::before{\n    content: '';\n    display: block;\n    background: #fff;\n    width: 20px;\n    height: 70px;\n    border-radius: 50%;\n    position: absolute;\n    left: 25%;\n    top: 35px;\n}\n/*\n* \u753B\u4E0A\u5634\u5507\n*/\n.mouth{\n    width: 450px;\n    height: 120px;\n    position: absolute;\n    left: 50%;\n    top: 410px;\n    margin-left: -225px;\n    overflow: hidden;\n}\n.mouth .up{\n    border: 4px solid #000;\n    background: #7fc9ac;\n    width: 450px;\n    height: 300px;\n    border-radius: 500px/50px;\n    position: absolute;\n    top: -280px;\n    overflow: hidden;\n    z-index: -1;\n}\n/*\n* \u52A0\u4E24\u9897\u7259\u9F7F\n*/\n.mouth .tooth1{\n    width: 30px;\n    height: 30px;\n    background: #fff;\n    position: absolute;\n    left: 50%;\n    top: -15px;\n    margin-left: -15px;\n    border-radius: 50% 300%;\n    transform: translateX(-120px) translateY(15px) rotate(45deg);\n    z-index: -2;\n}\n.mouth .tooth2{\n    width: 30px;\n    height: 30px;\n    background: #fff;\n    position: absolute;\n    left: 50%;\n    top: -15px;\n    margin-left: -15px;\n    border-radius: 50% 300%;\n    transform: translateX(120px) translateY(15px) rotate(45deg);\n    z-index: -2;\n}\n/*\n* \u753B\u4E0B\u5634\u5507\n*/\n.mouth .down{\n    border: 4px solid #000;\n    width: 450px;\n    height: 300px;\n    border-radius: 500px/200px;\n    position: absolute;\n    top: -200px;\n    background: #4d3337;\n    z-index: -3;\n    overflow: hidden;\n}\n/*\n* \u518D\u52A0\u4E0A\u820C\u5934\n*/\n.mouth .down .tongue{\n    border: 1px solid hotpink;\n    background: #dc7e80;\n    width: 400px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    top: 230px;\n    margin-left: -200px;\n    border-radius: 500% / 500%;\n}\n/*\n* \u8FD8\u6709\u5999\u86D9\u79CD\u5B50\u72EC\u7279\u7684\u82B1\u7EB9\n*/\n.patch1{\n    background: #157270;\n    width: 130px;\n    height: 90px;\n    position: absolute;\n    left: 50%;\n    top: 135px;\n    clip-path: polygon(79% 4%, 95% 43%, 56% 91%, 20% 96%, 8% 45%);\n}\n.patch2{\n    background: #157270;\n    width: 70px;\n    height: 70px;\n    position: absolute;\n    left: 50%;\n    top: 200px;\n    margin-left: -75px;\n    clip-path: polygon(16% 25%, 53% 37%, 58% 65%, 35% 85%, 3% 40%);\n}\n.patch3{\n    background: #157270;\n    width: 70px;\n    height: 70px;\n    position: absolute;\n    left: 50%;\n    top: 250px;\n    clip-path: polygon(90% 25%, 85% 73%, 50% 100%, 29% 53%);\n}\n/*\n* \u73B0\u5728\u5B83\u5BB3\u7F9E\u4E86\uFF01\n*/\n.face{\n    background: #e98387;\n    width: 100px;\n    height: 20px;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    top: 370px;\n    margin-left: -50px;\n}\n.face.left{\n    transform: translateX(-180px);\n}\n.face.right{\n    transform: translateX(180px);\n}\n@keyframes move {\n    0%,100%{\n        width: 100px;\n        height: 20px;\n    }\n    50% {\n        width: 120px;\n        height: 25px;\n    }\n}\n.face:hover{\n    animation: move 500ms infinite linear;\n}\n/*\n* \u6478\u6478\u5B83\u7684\u5C0F\u8138\u86CB\n*/\n";
exports.default = string;
},{}],"HdJB":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    n: 1,
    init: function init() {
        player.ui.demo.innerText = _css2.default.substr(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
        player.bindEvents();
        player.play();
    },
    bindEvents: function bindEvents() {
        for (var key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                var value = player.events[key]; // pause / play / slow
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: function run() {
        player.n += 1;
        if (player.n > _css2.default.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = _css2.default.substr(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: function play() {
        window.clearInterval(player.id);
        player.id = setInterval(player.run, player.time);
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    slow: function slow() {
        player.pause();
        player.time = 200;
        player.play();
    },
    normal: function normal() {
        player.pause();
        player.time = 50;
        player.play();
    },
    fast: function fast() {
        player.pause();
        player.time = 0;
        player.play();
    }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.fe64d72a.map