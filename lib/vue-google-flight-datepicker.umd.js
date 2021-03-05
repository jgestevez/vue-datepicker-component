(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-google-flight-datepicker"] = factory(require("vue"));
	else
		root["vue-google-flight-datepicker"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00af":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0e34":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_DialogContentMobile_vue_vue_type_style_index_0_id_5fe1b62c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("00af");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_DialogContentMobile_vue_vue_type_style_index_0_id_5fe1b62c_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_DialogContentMobile_vue_vue_type_style_index_0_id_5fe1b62c_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37c6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5903":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5a0c":
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,D:"date",h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return!e&&r&&(l=r),r||!e&&l},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=M(t,n,!0);return r&&(e.$L=r),e},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/range-date-picker/RangeDatePicker.vue?vue&type=template&id=11325f92

var _hoisted_1 = {
  class: "react-google-flight-datepicker"
};
function RangeDatePickervue_type_template_id_11325f92_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DateInputGroup = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("DateInputGroup");

  var _component_Dialog = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Dialog");

  var _component_DialogWrapper = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("DialogWrapper");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ['date-picker', {
      disabled: _ctx.disabled
    }],
    ref: "containerRef"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_DateInputGroup, {
    handleClickDateInput: _ctx.handleClickDateInput,
    showCalendarIcon: true,
    fromDate: _ctx.fromDate,
    toDate: _ctx.toDate,
    minDate: _ctx.minDate,
    maxDate: _ctx.maxDate,
    handleChangeDate: _ctx.handleChangeDate,
    startDatePlaceholder: _ctx.startDatePlaceholder,
    endDatePlaceholder: _ctx.endDatePlaceholder,
    dateFormat: _ctx.dateFormat,
    onFocus: _ctx.onDateInputFocus,
    nonFocusable: _ctx.complsOpen,
    dateInputSeperator: _ctx.dateInputSeperator,
    inputFocus: _ctx.inputFocus
  }, null, 8, ["handleClickDateInput", "fromDate", "toDate", "minDate", "maxDate", "handleChangeDate", "startDatePlaceholder", "endDatePlaceholder", "dateFormat", "onFocus", "nonFocusable", "dateInputSeperator", "inputFocus"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_DialogWrapper, {
    isMobile: _ctx.isMobile
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Dialog, {
        complsOpen: _ctx.complsOpen,
        toggleDialog: _ctx.toggleDialog,
        handleClickDateInput: _ctx.handleClickDateInput,
        inputFocus: _ctx.inputFocus,
        setInputFocus: _ctx.setInputFocus,
        onSelectDate: _ctx.onSelectDate,
        onHoverDate: _ctx.onHoverDate,
        fromDate: _ctx.fromDate,
        toDate: _ctx.toDate,
        hoverDate: _ctx.hoverDate,
        handleReset: _ctx.handleReset,
        handleChangeDate: _ctx.handleChangeDate,
        startDatePlaceholder: _ctx.startDatePlaceholder,
        endDatePlaceholder: _ctx.endDatePlaceholder,
        startWeekDay: _ctx.startWeekDay,
        minDate: _ctx.minDate,
        maxDate: _ctx.maxDate,
        weekDayFormat: _ctx.weekDayFormat,
        dateFormat: _ctx.dateFormat,
        monthFormat: _ctx.monthFormat,
        isMobile: _ctx.isMobile,
        highlightToday: _ctx.highlightToday,
        hideDialogHeader: _ctx.hideDialogHeader,
        hideDialogFooter: _ctx.hideDialogFooter,
        dateInputSeperator: _ctx.dateInputSeperator
      }, null, 8, ["complsOpen", "toggleDialog", "handleClickDateInput", "inputFocus", "setInputFocus", "onSelectDate", "onHoverDate", "fromDate", "toDate", "hoverDate", "handleReset", "handleChangeDate", "startDatePlaceholder", "endDatePlaceholder", "startWeekDay", "minDate", "maxDate", "weekDayFormat", "dateFormat", "monthFormat", "isMobile", "highlightToday", "hideDialogHeader", "hideDialogFooter", "dateInputSeperator"])];
    }),
    _: 1
  }, 8, ["isMobile"])], 2)]);
}
// CONCATENATED MODULE: ./src/components/range-date-picker/RangeDatePicker.vue?vue&type=template&id=11325f92

// CONCATENATED MODULE: ./src/helpers/index.ts
function getMonthInfo(year, month, startDay) {
  var weeks = [];
  var firstDate = new Date(year, month, 1);
  var lastDate = new Date(year, month + 1, 0);
  var numDays = lastDate.getDate();
  var start = 1;
  var end = firstDate.getDay() === 0 ? 1 : 7 - firstDate.getDay() + 1;

  if (startDay === 'sunday') {
    end = 7 - firstDate.getDay();
  }

  while (start <= numDays) {
    weeks.push({
      start: start,
      days: end - start + 1
    });
    start = end + 1;
    end += 7;
    end = start === 1 && end === 8 ? 1 : end;

    if (end > numDays) {
      end = numDays;
    }
  }

  return {
    totalWeek: weeks,
    totalDay: numDays
  };
}
function getWeekDay(startWeekDay, weekDayFormat) {
  var start = 1;

  if (startWeekDay === 'sunday') {
    start = 0;
  }

  for (var i = start; i < start + 7; i++) {}

  var arrWeekDay = weekDayFormat === 'dd' ? ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] : weekDayFormat === 'ddd' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  if (startWeekDay === 'sunday') {
    var last = arrWeekDay.pop();
    arrWeekDay.unshift(last);
  }

  return arrWeekDay;
}
function debounce(func, wait) {
  var timeout; // This is the function that is returned and will be executed many times
  // We spread (...args) to capture any number of parameters we want to pass

  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // The callback function to be executed after
    // the debounce time has elapsed
    var later = function later() {
      // null timeout to indicate the debounce ended
      timeout = undefined; // Execute the callback

      func.apply(void 0, args);
    }; // This will reset the waiting every function execution.
    // This is the step that prevents the function from
    // being executed because it will never reach the
    // inside of the previous setTimeout


    clearTimeout(timeout); // Restart the debounce waiting period.
    // setTimeout returns a truthy value (it differs in web vs Node)

    timeout = setTimeout(later, wait);
  };
}
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__("5a0c");
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// CONCATENATED MODULE: ./src/types/types.ts
var Action;

(function (Action) {
  Action["next"] = "next";
  Action["prev"] = "prev";
})(Action || (Action = {}));

var Direction;

(function (Direction) {
  Direction["from"] = "from";
  Direction["to"] = "to";
})(Direction || (Direction = {}));

var DateLabel;

(function (DateLabel) {
  DateLabel["start"] = "Start Date";
  DateLabel["end"] = "End date";
  DateLabel["date"] = "DATE";
})(DateLabel || (DateLabel = {}));

var StartWeekDay;

(function (StartWeekDay) {
  StartWeekDay["monday"] = "monday";
  StartWeekDay["sunday"] = "sunday";
})(StartWeekDay || (StartWeekDay = {}));

var WeekDayFormat;

(function (WeekDayFormat) {
  WeekDayFormat["dd"] = "dd";
})(WeekDayFormat || (WeekDayFormat = {}));

var Format;

(function (Format) {
  Format["day"] = "day";
})(Format || (Format = {}));
// CONCATENATED MODULE: ./src/components/range-date-picker/RangeDatePicker.ts




var propsSchema = {
  startDate: {
    type: Object,
    default: null
  },
  endDate: {
    type: Object,
    default: null
  },
  startDatePlaceholder: {
    type: String,
    default: 'Start date'
  },
  endDatePlaceholder: {
    type: String,
    default: 'End date'
  },
  className: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onChange: {
    type: Function,
    default: function _default() {}
  },
  onFocus: {
    type: Function,
    default: function _default() {}
  },
  startWeekDay: {
    type: String,
    default: StartWeekDay.monday
  },
  minDate: {
    type: Object,
    default: null
  },
  maxDate: {
    type: Object,
    default: null
  },
  dateFormat: {
    type: String,
    default: ''
  },
  monthFormat: {
    type: String,
    default: ''
  },
  highlightToday: {
    type: Boolean,
    default: false
  },
  dateInputSeperator: {
    type: Object,
    default: null
  },
  hideDialogHeader: {
    type: Boolean,
    default: false
  },
  hideDialogFooter: {
    type: Boolean,
    default: false
  },
  weekDayFormat: {
    type: String,
    default: 'dd'
  },
  hideDialogAfterSelectEndDate: {
    type: Boolean,
    default: false
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  onCloseCalendar: {
    type: Function,
    default: function _default() {}
  }
};
var PropsType = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineProps"])(propsSchema);
var RangeDatePicker_useRangeDatePicker = function useRangeDatePicker(props) {
  var complsOpen = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
  var containerRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
  var inputFocus = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
  var fromDate = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
  var toDate = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
  var fromDateRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
  var toDateRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
  var hoverDate = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
  var isFirstTime = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

  var setComplsOpen = function setComplsOpen(val) {
    complsOpen.value = val;
  };

  var setInputFocus = function setInputFocus(val) {
    inputFocus.value = val;
  };

  var setFromDate = function setFromDate(val) {
    fromDate.value = val;
  };

  var setToDate = function setToDate(val) {
    toDate.value = val;
  };

  var setHoverDate = function setHoverDate(val) {
    hoverDate.value = val;
  };

  var setIsFirstTime = function setIsFirstTime(val) {
    isFirstTime.value = val;
  };

  var handleDocumentClick = function handleDocumentClick(e) {
    if (containerRef.value && containerRef.value.contains(e.target) === false && window.innerWidth >= 768) {
      setComplsOpen(false);
    }
  };

  var notifyChange = function notifyChange() {
    var _startDate = fromDateRef.value ? fromDateRef.value.toDate() : null;

    var _endDate = toDateRef.value ? toDateRef.value.toDate() : null;

    props.onChange(_startDate, _endDate);
  };

  var debounceNotifyChange = debounce(notifyChange, 20);

  var updateFromDate = function updateFromDate(dateValue) {
    var shouldNotifyChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setFromDate(dateValue);
    fromDateRef.value = dateValue;

    if (shouldNotifyChange) {
      debounceNotifyChange();
    }
  };

  var updateToDate = function updateToDate(dateValue) {
    var shouldNotifyChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setToDate(dateValue);
    toDateRef.value = dateValue;

    if (shouldNotifyChange) {
      debounceNotifyChange();
    }
  };

  var toggleDialog = function toggleDialog() {
    setComplsOpen(!complsOpen.value);
  };

  var handleClickDateInput = function handleClickDateInput(inputFocus) {
    if (inputFocus === Direction.to && !fromDate.value || props.disabled) {
      return;
    }

    if (!complsOpen.value) {
      setComplsOpen(true);
    }

    setInputFocus(inputFocus);
  };

  var onSelectDate = function onSelectDate(date) {
    if (inputFocus.value) {
      if (inputFocus.value === Direction.from || fromDate.value && date.isBefore(fromDate.value, 'date')) {
        updateFromDate(date, true);

        if (toDate.value && date.isAfter(toDate.value, 'date')) {
          updateToDate(null, true);
        }

        setInputFocus(Direction.to);
      } else {
        updateToDate(date, true);
        setInputFocus(null);

        if (props.hideDialogAfterSelectEndDate) {
          setTimeout(function () {
            setComplsOpen(false);
          }, 50);
        }
      }
    } else {
      updateFromDate(date, true);
      setInputFocus(Direction.to);

      if (toDate.value && date.isAfter(toDate.value, 'date')) {
        updateToDate(null, true);
      }
    }
  };

  var onHoverDate = function onHoverDate(date) {
    setHoverDate(date);
  };

  var handleReset = function handleReset() {
    setInputFocus(Direction.from);
    setHoverDate(null);
    updateFromDate(null, true);
    updateToDate(null, true);
  };

  var handleChangeDate = function handleChangeDate(value, input) {
    var minDate = props.minDate,
        maxDate = props.maxDate;

    if (minDate && dayjs_min_default()(minDate).isAfter(value, 'date') || maxDate && dayjs_min_default()(maxDate).isBefore(value, 'date')) {
      return;
    }

    if (input === Direction.from) {
      setInputFocus(Direction.from);
      updateFromDate(value, true);

      if (value > toDate.value) {
        updateToDate(null, true);
      }
    } else {
      setInputFocus(Direction.to);
      updateToDate(value, true);
    }
  };

  var onDateInputFocus = function onDateInputFocus() {
    handleClickDateInput(Direction.from);
  };

  return {
    complsOpen: complsOpen,
    containerRef: containerRef,
    inputFocus: inputFocus,
    fromDate: fromDate,
    toDate: toDate,
    fromDateRef: fromDateRef,
    toDateRef: toDateRef,
    hoverDate: hoverDate,
    isFirstTime: isFirstTime,
    setComplsOpen: setComplsOpen,
    setInputFocus: setInputFocus,
    setFromDate: setFromDate,
    setToDate: setToDate,
    setHoverDate: setHoverDate,
    setIsFirstTime: setIsFirstTime,
    handleDocumentClick: handleDocumentClick,
    notifyChange: notifyChange,
    updateFromDate: updateFromDate,
    updateToDate: updateToDate,
    toggleDialog: toggleDialog,
    handleClickDateInput: handleClickDateInput,
    onSelectDate: onSelectDate,
    onHoverDate: onHoverDate,
    handleReset: handleReset,
    handleChangeDate: handleChangeDate,
    onDateInputFocus: onDateInputFocus
  };
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/DateInputGroup.vue?vue&type=template&id=5883e63a

var DateInputGroupvue_type_template_id_5883e63a_hoisted_1 = {
  class: "date-picker-input"
};
var _hoisted_2 = {
  class: "date-picker-date-group"
};
var _hoisted_3 = {
  key: 0,
  class: "date-input-separator"
};
function DateInputGroupvue_type_template_id_5883e63a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CalendarIcon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("CalendarIcon");

  var _component_DateInput = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("DateInput");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", DateInputGroupvue_type_template_id_5883e63a_hoisted_1, [_ctx.showCalendarIcon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_CalendarIcon, {
    key: 0,
    class: "icon-calendar mobile",
    viewBox: "0 0 24 24"
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_DateInput, {
    handleClickDateInput: _ctx.handleClickFromInput,
    showIcon: true,
    tabIndex: _ctx.nonFocusable ? '-1' : '0',
    isFocus: _ctx.inputFocus === _ctx.Direction.from,
    value: _ctx.fromDate,
    placeholder: _ctx.startDatePlaceholder,
    handleChangeDate: _ctx.handleChangeFromDate,
    dateFormat: _ctx.dateFormat,
    isSingle: _ctx.isSingle,
    name: "START_DATE",
    onFocus: _ctx.onFocus,
    nonFocusable: _ctx.nonFocusable,
    minDate: _ctx.minDate,
    maxDate: _ctx.maxDate
  }, null, 8, ["handleClickDateInput", "tabIndex", "isFocus", "value", "placeholder", "handleChangeDate", "dateFormat", "isSingle", "onFocus", "nonFocusable", "minDate", "maxDate"]), !_ctx.isSingle && _ctx.dateInputSeperator ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.dateInputSeperator), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.isSingle ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_DateInput, {
    key: 1,
    handleClickDateInput: _ctx.handleClickToInput,
    tabIndex: "0",
    isFocus: _ctx.inputFocus === _ctx.Direction.to,
    value: _ctx.toDate,
    placeholder: _ctx.endDatePlaceholder,
    handleChangeDate: _ctx.handleChangeToDate,
    dateFormat: _ctx.dateFormat,
    name: "END_DATE",
    nonFocusable: _ctx.nonFocusable,
    minDate: _ctx.minDate,
    maxDate: _ctx.maxDate,
    fromDate: _ctx.fromDate
  }, null, 8, ["handleClickDateInput", "isFocus", "value", "placeholder", "handleChangeDate", "dateFormat", "nonFocusable", "minDate", "maxDate", "fromDate"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]);
}
// CONCATENATED MODULE: ./src/components/DateInputGroup.vue?vue&type=template&id=5883e63a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/icons/CalendarIcon.vue?vue&type=template&id=72965814

var CalendarIconvue_type_template_id_72965814_hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};

var CalendarIconvue_type_template_id_72965814_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}, null, -1);

function CalendarIconvue_type_template_id_72965814_render(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", CalendarIconvue_type_template_id_72965814_hoisted_1, [CalendarIconvue_type_template_id_72965814_hoisted_2]);
}
// CONCATENATED MODULE: ./src/components/icons/CalendarIcon.vue?vue&type=template&id=72965814

// CONCATENATED MODULE: ./src/components/icons/CalendarIcon.vue

const script = {}
script.render = CalendarIconvue_type_template_id_72965814_render

/* harmony default export */ var CalendarIcon = (script);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/DateInput.vue?vue&type=template&id=8f52a988


var DateInputvue_type_template_id_8f52a988_hoisted_1 = {
  class: "selected-date"
};
var DateInputvue_type_template_id_8f52a988_hoisted_2 = {
  key: 0,
  class: "date-placeholder"
};
var DateInputvue_type_template_id_8f52a988_hoisted_3 = {
  key: 1,
  class: "change-date-group"
};
function DateInputvue_type_template_id_8f52a988_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CalendarIcon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("CalendarIcon");

  var _component_PrevIcon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("PrevIcon");

  var _component_NextIcon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("NextIcon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ['date', {
      'is-focus': _ctx.isFocus,
      'is-single': _ctx.isSingle
    }],
    role: "button",
    tabIndex: _ctx.nonFocusable ? '-1' : _ctx.tabIndex,
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.handleClickDateInput && _ctx.handleClickDateInput.apply(_ctx, arguments);
    }),
    onFocus: _cache[4] || (_cache[4] = function () {
      return _ctx.onDateInputFocus && _ctx.onDateInputFocus.apply(_ctx, arguments);
    }),
    id: _ctx.name === 'START_DATE' ? 'start-date-input-button' : 'end-date-input-button'
  }, [_ctx.showIcon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_CalendarIcon, {
    key: 0,
    class: "icon-calendar",
    viewBox: "0 0 24 24"
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", DateInputvue_type_template_id_8f52a988_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.formattedDate) + " ", 1), !_ctx.formattedDate ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", DateInputvue_type_template_id_8f52a988_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.placeholder), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), _ctx.formattedDate ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", DateInputvue_type_template_id_8f52a988_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
    class: "btn-outline change-date-button",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.prevDate && _ctx.prevDate.apply(_ctx, arguments);
    }),
    tabIndex: _ctx.nonFocusable ? '-1' : '0',
    disabled: _ctx.disablePrev
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_PrevIcon, {
    viewBox: "0 0 24 24",
    class: "icon-arrow"
  })], 8, ["tabIndex", "disabled"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
    class: "btn-outline change-date-button",
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.nextDate && _ctx.nextDate.apply(_ctx, arguments);
    }),
    tabIndex: _ctx.nonFocusable ? '-1' : '0',
    disabled: _ctx.disableNext
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_NextIcon, {
    viewBox: "0 0 24 24",
    class: "icon-arrow"
  })], 8, ["tabIndex", "disabled"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 42, ["tabIndex", "id"]);
}
// CONCATENATED MODULE: ./src/components/DateInput.vue?vue&type=template&id=8f52a988

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/arrayWithHoles/_index.mjs
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/iterableToArrayLimit/_index.mjs







function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/arrayLikeToArray/_index.mjs
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/_index.mjs






function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/nonIterableRest/_index.mjs
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray/_index.mjs




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/icons/PrevIcon.vue?vue&type=template&id=138c61ec

var PrevIconvue_type_template_id_138c61ec_hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};

var PrevIconvue_type_template_id_138c61ec_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}, null, -1);

function PrevIconvue_type_template_id_138c61ec_render(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", PrevIconvue_type_template_id_138c61ec_hoisted_1, [PrevIconvue_type_template_id_138c61ec_hoisted_2]);
}
// CONCATENATED MODULE: ./src/components/icons/PrevIcon.vue?vue&type=template&id=138c61ec

// CONCATENATED MODULE: ./src/components/icons/PrevIcon.vue

const PrevIcon_script = {}
PrevIcon_script.render = PrevIconvue_type_template_id_138c61ec_render

/* harmony default export */ var PrevIcon = (PrevIcon_script);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/icons/NextIcon.vue?vue&type=template&id=04212e60

var NextIconvue_type_template_id_04212e60_hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};

var NextIconvue_type_template_id_04212e60_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}, null, -1);

function NextIconvue_type_template_id_04212e60_render(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", NextIconvue_type_template_id_04212e60_hoisted_1, [NextIconvue_type_template_id_04212e60_hoisted_2]);
}
// CONCATENATED MODULE: ./src/components/icons/NextIcon.vue?vue&type=template&id=04212e60

// CONCATENATED MODULE: ./src/components/icons/NextIcon.vue

const NextIcon_script = {}
NextIcon_script.render = NextIconvue_type_template_id_04212e60_render

/* harmony default export */ var NextIcon = (NextIcon_script);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/DateInput.vue?vue&type=script&lang=ts







var DateInput = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    CalendarIcon: CalendarIcon,
    PrevIcon: PrevIcon,
    NextIcon: NextIcon
  },
  props: {
    handleClickDateInput: {
      type: Function,
      default: function _default() {}
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    tabIndex: {
      type: String,
      default: ''
    },
    isFocus: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    handleChangeDate: {
      type: Function,
      default: function _default() {}
    },
    dateFormat: {
      type: String,
      default: ''
    },
    isSingle: {
      type: Boolean,
      default: false
    },
    onFocus: {
      type: Function,
      default: function _default() {}
    },
    name: {
      type: String,
      default: ''
    },
    nonFocusable: {
      type: Boolean,
      default: false
    },
    fromDate: {
      type: Object,
      default: null
    },
    minDate: {
      type: Object,
      default: null
    },
    maxDate: {
      type: Object,
      default: null
    }
  },
  setup: function setup(props) {
    var formattedDate = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var disablePrev = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var disableNext = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

    var setFormattedDate = function setFormattedDate(value) {
      formattedDate.value = value;
    };

    var setDisablePrev = function setDisablePrev(value) {
      disablePrev.value = value;
    };

    var setDisableNext = function setDisableNext(value) {
      disableNext.value = value;
    };

    var fromDateAndValueWatchingFnc = function fromDateAndValueWatchingFnc() {
      if (props.value) {
        var dateFormat = props.dateFormat,
            minDate = props.minDate,
            fromDate = props.fromDate,
            _name = props.name,
            maxDate = props.maxDate;
        var text = props.value.format('ddd, DD MMM');

        if (dateFormat) {
          text = props.value.format(dateFormat);
        }

        setFormattedDate(text);

        if (minDate && dayjs_min_default()(minDate).add(1, 'day').isAfter(props.value, 'date') || _name === 'END_DATE' && props.value.isBefore(fromDate.add(1, 'day'), 'date')) {
          setDisablePrev(true);
        } else {
          setDisablePrev(false);
        }

        if (maxDate && dayjs_min_default()(maxDate).subtract(1, 'day').isBefore(props.value, 'date')) {
          setDisableNext(true);
        } else {
          setDisableNext(false);
        }
      } else {
        setFormattedDate(null);
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])([function () {
      return props.value;
    }, function () {
      return props.fromDate;
    }], function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          value = _ref2[0];

      fromDateAndValueWatchingFnc();
    });

    var prevDate = function prevDate(e) {
      var value = props.value,
          handleChangeDate = props.handleChangeDate;
      e.stopPropagation();
      handleChangeDate('prev', value);
    };

    var nextDate = function nextDate(e) {
      var value = props.value,
          handleChangeDate = props.handleChangeDate;
      e.stopPropagation();
      handleChangeDate('next', value);
    };

    var onDateInputFocus = function onDateInputFocus() {
      var onFocus = props.onFocus;
      if (onFocus) onFocus(name);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      fromDateAndValueWatchingFnc();
    });
    return {
      disablePrev: disablePrev,
      disableNext: disableNext,
      formattedDate: formattedDate,
      onDateInputFocus: onDateInputFocus,
      nextDate: nextDate,
      prevDate: prevDate
    };
  }
});
/* harmony default export */ var DateInputvue_type_script_lang_ts = (DateInput);
// CONCATENATED MODULE: ./src/components/DateInput.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/DateInput.vue



DateInputvue_type_script_lang_ts.render = DateInputvue_type_template_id_8f52a988_render

/* harmony default export */ var components_DateInput = (DateInputvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/DateInputGroup.vue?vue&type=script&lang=ts





var DateInputGroup = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    DateInput: components_DateInput,
    CalendarIcon: CalendarIcon
  },
  props: {
    handleClickDateInput: {
      type: Function,
      default: function _default() {}
    },
    showCalendarIcon: {
      type: Boolean,
      default: false
    },
    inputFocus: {
      type: String,
      default: null
    },
    fromDate: {
      type: Object,
      default: null
    },
    toDate: {
      type: Object,
      default: null
    },
    minDate: {
      type: Object,
      default: null
    },
    maxDate: {
      type: Object,
      default: null
    },
    handleChangeDate: {
      type: Function,
      default: function _default() {}
    },
    startDatePlaceholder: {
      type: String,
      default: null
    },
    endDatePlaceholder: {
      type: String,
      default: null
    },
    dateFormat: {
      type: String,
      default: ''
    },
    isSingle: {
      type: Boolean,
      default: false
    },
    onFocus: {
      type: Function,
      default: function _default() {}
    },
    nonFocusable: {
      type: Boolean,
      default: false
    },
    dateInputSeperator: {
      type: Object,
      default: null
    }
  },
  setup: function setup(props) {
    var handleClickFromInput = function handleClickFromInput() {
      props.handleClickDateInput(Direction.from);
    };

    var handleClickToInput = function handleClickToInput() {
      props.handleClickDateInput(Direction.to);
    };

    var getDateFromValue = function getDateFromValue(action, value) {
      if (action === Action.prev) {
        return dayjs_min_default()(value).subtract(1, 'day');
      }

      return dayjs_min_default()(value).add(1, 'day');
    };

    var handleChangeFromDate = function handleChangeFromDate(action, value) {
      var date = getDateFromValue(action, value);
      props.handleChangeDate(date, Direction.from);
    };

    var handleChangeToDate = function handleChangeToDate(action, value) {
      var date = getDateFromValue(action, value);
      props.handleChangeDate(date, Direction.to);
    };

    return {
      handleClickFromInput: handleClickFromInput,
      handleClickToInput: handleClickToInput,
      handleChangeFromDate: handleChangeFromDate,
      handleChangeToDate: handleChangeToDate,
      Direction: Direction
    };
  }
});
/* harmony default export */ var DateInputGroupvue_type_script_lang_ts = (DateInputGroup);
// CONCATENATED MODULE: ./src/components/DateInputGroup.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/DateInputGroup.vue



DateInputGroupvue_type_script_lang_ts.render = DateInputGroupvue_type_template_id_5883e63a_render

/* harmony default export */ var components_DateInputGroup = (DateInputGroupvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/DialogWrapper.vue?vue&type=template&id=5739dcb6

var DialogWrappervue_type_template_id_5739dcb6_hoisted_1 = {
  class: "react-google-flight-datepicker"
};
function DialogWrappervue_type_template_id_5739dcb6_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isMobile ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Teleport"], {
    key: 0,
    to: "body"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", DialogWrappervue_type_template_id_5739dcb6_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
    key: 1
  });
}
// CONCATENATED MODULE: ./src/components/DialogWrapper.vue?vue&type=template&id=5739dcb6

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/DialogWrapper.vue?vue&type=script&lang=ts

var DialogWrapper = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {}
});
/* harmony default export */ var DialogWrappervue_type_script_lang_ts = (DialogWrapper);
// CONCATENATED MODULE: ./src/components/DialogWrapper.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/DialogWrapper.vue



DialogWrappervue_type_script_lang_ts.render = DialogWrappervue_type_template_id_5739dcb6_render

/* harmony default export */ var components_DialogWrapper = (DialogWrappervue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Dialog.vue?vue&type=template&id=35d84e99

var Dialogvue_type_template_id_35d84e99_hoisted_1 = {
  key: 0,
  class: "dialog-header"
};
var Dialogvue_type_template_id_35d84e99_hoisted_2 = {
  class: "dialog-content"
};
var Dialogvue_type_template_id_35d84e99_hoisted_3 = {
  key: 1,
  class: "dialog-footer"
};
function Dialogvue_type_template_id_35d84e99_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BackIcon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("BackIcon");

  var _component_DateInputGroup = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("DateInputGroup");

  var _component_DialogContentMobile = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("DialogContentMobile");

  var _component_DialogContentDesktop = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("DialogContentDesktop");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ['dialog-date-picker', {
      open: _ctx.complsOpen,
      hide: !_ctx.complsOpen && _ctx.hideAnimation,
      single: _ctx.singleCalendar && !_ctx.isMobile
    }],
    ref: "containerRef"
  }, [!_ctx.hideDialogHeader ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", Dialogvue_type_template_id_35d84e99_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
    type: "button",
    class: "btn-outline back-button",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.toggleDialog && _ctx.toggleDialog.apply(_ctx, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_BackIcon, {
    viewBox: "0 0 492 492"
  })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_DateInputGroup, {
    inputFocus: _ctx.inputFocus,
    handleClickDateInput: _ctx.handleClickDateInput,
    fromDate: _ctx.fromDate,
    toDate: _ctx.toDate,
    minDate: _ctx.minDate,
    maxDate: _ctx.maxDate,
    handleChangeDate: _ctx.onChangeDate,
    startDatePlaceholder: _ctx.startDatePlaceholder,
    endDatePlaceholder: _ctx.endDatePlaceholder,
    dateFormat: _ctx.dateFormat,
    isSingle: _ctx.isSingle,
    nonFocusable: !_ctx.complsOpen,
    dateInputSeperator: _ctx.dateInputSeperator
  }, null, 8, ["inputFocus", "handleClickDateInput", "fromDate", "toDate", "minDate", "maxDate", "handleChangeDate", "startDatePlaceholder", "endDatePlaceholder", "dateFormat", "isSingle", "nonFocusable", "dateInputSeperator"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
    type: "button",
    class: "btn-outline reset-button",
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.handleReset && _ctx.handleReset.apply(_ctx, arguments);
    })
  }, " Reset ")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", Dialogvue_type_template_id_35d84e99_hoisted_2, [_ctx.isMobile ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_DialogContentMobile, {
    key: 0,
    fromDate: _ctx.fromDate,
    toDate: _ctx.toDate,
    hoverDate: _ctx.hoverDate,
    onSelectDate: _ctx.onSelectDate,
    startWeekDay: _ctx.startWeekDay,
    minDate: _ctx.minDate,
    maxDate: _ctx.maxDate,
    dateFormat: _ctx.dateFormat,
    weekDayFormat: _ctx.weekDayFormat,
    monthFormat: _ctx.monthFormat,
    complsOpen: _ctx.complsOpen,
    isSingle: _ctx.isSingle,
    highlightToday: _ctx.highlightToday
  }, null, 8, ["fromDate", "toDate", "hoverDate", "onSelectDate", "startWeekDay", "minDate", "maxDate", "dateFormat", "weekDayFormat", "monthFormat", "complsOpen", "isSingle", "highlightToday"])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_DialogContentDesktop, {
    key: 1,
    fromDate: _ctx.fromDate,
    toDate: _ctx.toDate,
    hoverDate: _ctx.hoverDate,
    onSelectDate: _ctx.onSelectDate,
    onHoverDate: _ctx.onHoverDate,
    startWeekDay: _ctx.startWeekDay,
    minDate: _ctx.minDate,
    maxDate: _ctx.maxDate,
    dateFormat: _ctx.dateFormat,
    weekDayFormat: _ctx.weekDayFormat,
    monthFormat: _ctx.monthFormat,
    isSingle: _ctx.isSingle,
    complsOpen: _ctx.complsOpen,
    dateChanged: _ctx.dateChanged,
    highlightToday: _ctx.highlightToday,
    singleCalendar: _ctx.singleCalendar
  }, null, 8, ["fromDate", "toDate", "hoverDate", "onSelectDate", "onHoverDate", "startWeekDay", "minDate", "maxDate", "dateFormat", "weekDayFormat", "monthFormat", "isSingle", "complsOpen", "dateChanged", "highlightToday", "singleCalendar"]))]), !_ctx.hideDialogFooter ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", Dialogvue_type_template_id_35d84e99_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
    type: "button",
    class: "submit-button",
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.toggleDialog && _ctx.toggleDialog.apply(_ctx, arguments);
    }),
    tabIndex: "0"
  }, " Done "), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
    type: "button",
    class: "btn-outline reset-button mobile",
    onClick: _cache[4] || (_cache[4] = function () {
      return _ctx.handleReset && _ctx.handleReset.apply(_ctx, arguments);
    })
  }, " Reset ")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2);
}
// CONCATENATED MODULE: ./src/components/Dialog.vue?vue&type=template&id=35d84e99

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/icons/BackIcon.vue?vue&type=template&id=6cc1e912

var BackIconvue_type_template_id_6cc1e912_hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 492 492"
};

var BackIconvue_type_template_id_6cc1e912_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M464.3 207.4l.8.2H136l103.5-103.7c5-5.1 7.8-12 7.8-19.2 0-7.2-2.7-14-7.8-19l-16.1-16.2c-5-5-11.8-7.8-19-7.8-7.2 0-14 2.8-19 7.8L7.8 227C2.8 232 0 238.8 0 246c0 7.3 2.8 14 7.8 19.2l177.5 177.4c5 5 11.8 7.8 19 7.8 7.2 0 14-2.8 19-7.8l16-16.1a26.6 26.6 0 000-37.7L134.8 284.4h330a27.9 27.9 0 0027.3-27.6V234a27.3 27.3 0 00-27.7-26.6z"
}, null, -1);

function BackIconvue_type_template_id_6cc1e912_render(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", BackIconvue_type_template_id_6cc1e912_hoisted_1, [BackIconvue_type_template_id_6cc1e912_hoisted_2]);
}
// CONCATENATED MODULE: ./src/components/icons/BackIcon.vue?vue&type=template&id=6cc1e912

// CONCATENATED MODULE: ./src/components/icons/BackIcon.vue

const BackIcon_script = {}
BackIcon_script.render = BackIconvue_type_template_id_6cc1e912_render

/* harmony default export */ var BackIcon = (BackIcon_script);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/DialogContentDesktop.vue?vue&type=template&id=a786370e

var DialogContentDesktopvue_type_template_id_a786370e_hoisted_1 = {
  class: "calendar-flippers"
};
function DialogContentDesktopvue_type_template_id_a786370e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MonthCalendar = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("MonthCalendar");

  var _component_PrevIcon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("PrevIcon");

  var _component_NextIcon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("NextIcon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ['calendar-wrapper', {
      single: _ctx.singleCalendar
    }],
    ref: "containerRef",
    onKeydown: _cache[6] || (_cache[6] = function () {
      return _ctx.onKeyDown && _ctx.onKeyDown.apply(_ctx, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ['calendar-content', {
      isAnimating: _ctx.translateAmount !== 0,
      single: _ctx.singleCalendar
    }],
    style: {
      transform: "translateX(".concat(_ctx.translateAmount, "px)")
    }
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.monthArray, function (date, dateIndex) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_MonthCalendar, {
      key: dateIndex,
      hidden: dateIndex === 0 && _ctx.translateAmount <= 0,
      isAnimating: dateIndex === 0 && _ctx.translateAmount > 0,
      month: _ctx.dayjs(date).get('month'),
      year: _ctx.dayjs(date).get('year'),
      onSelectDate: _ctx.onSelectDate,
      onHoverDate: _ctx.onHoverDate,
      fromDate: _ctx.fromDate,
      toDate: _ctx.toDate,
      hoverDate: _ctx.hoverDate,
      startWeekDay: _ctx.startWeekDay,
      minDate: _ctx.minDate,
      maxDate: _ctx.maxDate,
      weekDayFormat: _ctx.weekDayFormat,
      monthFormat: _ctx.monthFormat,
      isSingle: _ctx.isSingle,
      highlightToday: _ctx.highlightToday,
      singleCalendar: _ctx.singleCalendar
    }, null, 8, ["hidden", "isAnimating", "month", "year", "onSelectDate", "onHoverDate", "fromDate", "toDate", "hoverDate", "startWeekDay", "minDate", "maxDate", "weekDayFormat", "monthFormat", "isSingle", "highlightToday", "singleCalendar"]);
  }), 128))], 6), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", DialogContentDesktopvue_type_template_id_a786370e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ['flipper-button', {
      disabled: _ctx.disablePrev
    }],
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.decreaseCurrentMonth && _ctx.decreaseCurrentMonth.apply(_ctx, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function () {
      return _ctx.onBackButtonKeyDown && _ctx.onBackButtonKeyDown.apply(_ctx, arguments);
    }),
    role: "button",
    tabIndex: "0"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_PrevIcon, {
    viewBox: "0 0 24 24"
  })], 34), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ['flipper-button', {
      disabled: _ctx.disableNext
    }],
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.increaseCurrentMonth && _ctx.increaseCurrentMonth.apply(_ctx, arguments);
    }),
    onKeydown: _cache[4] || (_cache[4] = function () {
      return _ctx.onNextButtonKeyDown && _ctx.onNextButtonKeyDown.apply(_ctx, arguments);
    }),
    role: "button",
    tabIndex: "0",
    onBlur: _cache[5] || (_cache[5] = function () {
      return _ctx.focusOnCalendar && _ctx.focusOnCalendar.apply(_ctx, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_NextIcon, {
    viewBox: "0 0 24 24"
  })], 34)])], 34);
}
// CONCATENATED MODULE: ./src/components/DialogContentDesktop.vue?vue&type=template&id=a786370e

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MonthCalendar.vue?vue&type=template&id=7bfd4708


var MonthCalendarvue_type_template_id_7bfd4708_hoisted_1 = {
  class: "month-name"
};
var MonthCalendarvue_type_template_id_7bfd4708_hoisted_2 = {
  class: "weekdays"
};
var MonthCalendarvue_type_template_id_7bfd4708_hoisted_3 = {
  class: "week-container"
};
function MonthCalendarvue_type_template_id_7bfd4708_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Week = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Week");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ['month-calendar', {
      isAnimating: _ctx.isAnimating,
      hidden: _ctx.hidden,
      single: _ctx.singleCalendar
    }],
    "data-month-index": _ctx.month + 1
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", MonthCalendarvue_type_template_id_7bfd4708_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.monthFormat ? _ctx.dayjs("".concat(_ctx.year, "-").concat(_ctx.month + 1, "-1")).format(_ctx.monthFormat) : _ctx.dayjs("".concat(_ctx.year, "-").concat(_ctx.month + 1, "-1")).format('MMMM - YYYY')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", MonthCalendarvue_type_template_id_7bfd4708_hoisted_2, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.arrWeekDay, function (day, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
      class: "weekday",
      key: index
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(day), 1);
  }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", MonthCalendarvue_type_template_id_7bfd4708_hoisted_3, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.monthInfo.totalWeek, function (week, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Week, {
      key: index,
      week: week,
      month: _ctx.month,
      year: _ctx.year,
      isFirst: index === 0,
      onSelectDate: _ctx.onSelectDate,
      onHoverDate: _ctx.onHoverDate,
      fromDate: _ctx.fromDate,
      toDate: _ctx.toDate,
      hoverDate: _ctx.hoverDate,
      totalDay: _ctx.monthInfo.totalDay,
      minDate: _ctx.minDate,
      maxDate: _ctx.maxDate,
      isSingle: _ctx.isSingle,
      weekIndex: index,
      highlightToday: _ctx.highlightToday
    }, null, 8, ["week", "month", "year", "isFirst", "onSelectDate", "onHoverDate", "fromDate", "toDate", "hoverDate", "totalDay", "minDate", "maxDate", "isSingle", "weekIndex", "highlightToday"]);
  }), 128))])], 10, ["data-month-index"]);
}
// CONCATENATED MODULE: ./src/components/MonthCalendar.vue?vue&type=template&id=7bfd4708

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Week.vue?vue&type=template&id=2f90a884

function Weekvue_type_template_id_2f90a884_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Day = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Day");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ['week', {
      first: _ctx.isFirst
    }]
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.daysInfo, function (day, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Day, {
      key: index,
      dateIndex: day.dateIndex,
      dateValue: day.dateValue,
      hoverDate: _ctx.hoverDate,
      onSelectDate: _ctx.onSelectDate,
      onHoverDate: _ctx.onHoverDate,
      selected: day.selected,
      hovered: day.hovered,
      highlight: day.highlight,
      disabled: day.disabled,
      isEndDay: day.isEndDate,
      totalDay: _ctx.totalDay,
      weekDayIndex: day.index,
      weekIndex: _ctx.weekIndex
    }, null, 8, ["dateIndex", "dateValue", "hoverDate", "onSelectDate", "onHoverDate", "selected", "hovered", "highlight", "disabled", "isEndDay", "totalDay", "weekDayIndex", "weekIndex"]);
  }), 128))], 2);
}
// CONCATENATED MODULE: ./src/components/Week.vue?vue&type=template&id=2f90a884

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/arrayWithoutHoles/_index.mjs

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/iterableToArray/_index.mjs








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/nonIterableSpread/_index.mjs
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray/_index.mjs




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Day.vue?vue&type=template&id=8db7dc54

var Dayvue_type_template_id_8db7dc54_hoisted_1 = {
  class: "text-day"
};
function Dayvue_type_template_id_8db7dc54_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ['day', {
      selected: _ctx.selected,
      hovered: _ctx.hovered,
      disabled: _ctx.disabled,
      highlight: _ctx.highlight,
      end: _ctx.isEndDay
    }],
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.selectDate && _ctx.selectDate.apply(_ctx, arguments);
    }),
    onMouseenter: _cache[2] || (_cache[2] = function () {
      return _ctx.handleHoverDate && _ctx.handleHoverDate.apply(_ctx, arguments);
    }),
    role: "button",
    tabIndex: "-1",
    "data-day-index": _ctx.dateIndex,
    "data-date-value": _ctx.dateValue
  }, [_ctx.hovered && !(_ctx.isEndDay && _ctx.dateIndex === _ctx.totalDay) && !(_ctx.dateIndex === 1 && _ctx.selected && !_ctx.isEndDay) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: ['background-day', {
      'first-day': _ctx.dateIndex === 1,
      'last-day': _ctx.dateIndex === _ctx.totalDay
    }]
  }, null, 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", Dayvue_type_template_id_8db7dc54_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.dateIndex), 1)], 42, ["data-day-index", "data-date-value"]);
}
// CONCATENATED MODULE: ./src/components/Day.vue?vue&type=template&id=8db7dc54

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Day.vue?vue&type=script&lang=ts


var Day = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    dateIndex: {
      type: Number,
      default: null
    },
    dateValue: {
      type: Object,
      default: null
    },
    isEndDay: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    hovered: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onSelectDate: {
      type: Function,
      default: function _default() {}
    },
    onHoverDate: {
      type: Function,
      default: function _default() {}
    },
    totalDay: {
      type: Number,
      default: null
    },
    highlight: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    var selectDate = function selectDate(e) {
      var disabled = props.disabled,
          onSelectDate = props.onSelectDate,
          dateValue = props.dateValue;
      e.stopPropagation();
      e.preventDefault();
      if (disabled) return;
      onSelectDate(dateValue);
    };

    var handleHoverDate = function handleHoverDate() {
      var disabled = props.disabled,
          onHoverDate = props.onHoverDate,
          dateValue = props.dateValue;
      if (disabled || !onHoverDate) return;
      onHoverDate(dateValue);
    };

    return {
      selectDate: selectDate,
      handleHoverDate: handleHoverDate
    };
  }
});
/* harmony default export */ var Dayvue_type_script_lang_ts = (Day);
// CONCATENATED MODULE: ./src/components/Day.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/Day.vue



Dayvue_type_script_lang_ts.render = Dayvue_type_template_id_8db7dc54_render

/* harmony default export */ var components_Day = (Dayvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Week.vue?vue&type=script&lang=ts










var Week = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    Day: components_Day
  },
  props: {
    isFirst: {
      type: Boolean,
      default: false
    },
    week: {
      type: Object,
      default: function _default() {}
    },
    month: {
      type: Number,
      default: null
    },
    year: {
      type: Number,
      default: null
    },
    fromDate: {
      type: Object,
      default: null
    },
    toDate: {
      type: Object,
      default: null
    },
    hoverDate: {
      type: Object,
      default: null
    },
    totalDay: {
      type: Number,
      default: null
    },
    onSelectDate: {
      type: Function,
      default: function _default() {}
    },
    onHoverDate: {
      type: Function,
      default: function _default() {}
    },
    minDate: {
      type: Object,
      default: null
    },
    maxDate: {
      type: Object,
      default: null
    },
    isSingle: {
      type: Boolean,
      default: false
    },
    weekIndex: {
      type: Number,
      default: null
    },
    highlightToday: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    var daysInfo = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      var week = props.week,
          minDate = props.minDate,
          year = props.year,
          month = props.month,
          maxDate = props.maxDate,
          toDate = props.toDate,
          fromDate = props.fromDate,
          highlightToday = props.highlightToday,
          isSingle = props.isSingle,
          hoverDate = props.hoverDate;
      return _toConsumableArray(Array(week.days).keys()).map(function (index) {
        var dateIndex = index + week.start;
        var dateValue = dayjs_min_default()("".concat(year, "-").concat(month + 1, "-").concat(dateIndex));
        var disabled = minDate && dateValue.isBefore(minDate, 'date') || maxDate && dateValue.isAfter(maxDate, 'date');
        var selected = dateValue.isSame(fromDate, 'date') || dateValue.isSame(toDate, 'date');
        var hovered = false;
        var highlight = highlightToday && dateValue.isSame(new Date(), 'date');

        if (fromDate && !fromDate.isSame(toDate, 'date') && !isSingle) {
          if (toDate && !fromDate.isAfter(dateValue, 'date') && !toDate.isBefore(dateValue, 'date')) {
            hovered = true;
          }

          if (!toDate && !dateValue.isBefore(fromDate, 'date') && !(hoverDate && hoverDate.isBefore(dateValue, 'date')) && fromDate.isBefore(hoverDate, 'date')) {
            hovered = true;
          }
        }

        var isEndDate = false;

        if (dateValue.isSame(toDate, 'date') || !toDate && dateValue.isSame(hoverDate, 'date')) {
          isEndDate = true;
        }

        return {
          index: index,
          dateIndex: dateIndex,
          dateValue: dateValue,
          selected: selected,
          hovered: hovered,
          highlight: highlight,
          disabled: disabled,
          isEndDate: isEndDate
        };
      });
    });
    return {
      daysInfo: daysInfo
    };
  }
});
/* harmony default export */ var Weekvue_type_script_lang_ts = (Week);
// CONCATENATED MODULE: ./src/components/Week.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/Week.vue



Weekvue_type_script_lang_ts.render = Weekvue_type_template_id_2f90a884_render

/* harmony default export */ var components_Week = (Weekvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MonthCalendar.vue?vue&type=script&lang=ts





var MonthCalendar = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    Week: components_Week
  },
  props: {
    month: {
      type: Number,
      default: null
    },
    year: {
      type: Number,
      default: null
    },
    onSelectDate: {
      type: Function,
      default: function _default() {}
    },
    onHoverDate: {
      type: Function,
      default: function _default() {}
    },
    fromDate: {
      type: Object,
      default: null
    },
    toDate: {
      type: Object,
      default: null
    },
    hoverDate: {
      type: Object,
      default: null
    },
    hidden: {
      type: Boolean,
      default: false
    },
    isAnimating: {
      type: Boolean,
      default: false
    },
    startWeekDay: {
      type: String,
      default: null
    },
    minDate: {
      type: Object,
      default: null
    },
    maxDate: {
      type: Object,
      default: null
    },
    monthFormat: {
      type: String,
      default: ''
    },
    weekDayFormat: {
      type: String,
      default: ''
    },
    isSingle: {
      type: Boolean,
      default: false
    },
    highlightToday: {
      type: Boolean,
      default: false
    },
    singleCalendar: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    var arrWeekDay = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return getWeekDay(props.startWeekDay, props.weekDayFormat);
    });
    var monthInfo = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return getMonthInfo(props.year, props.month, props.startWeekDay) || {};
    });
    return {
      arrWeekDay: arrWeekDay,
      monthInfo: monthInfo,
      dayjs: dayjs_min_default.a
    };
  }
});
/* harmony default export */ var MonthCalendarvue_type_script_lang_ts = (MonthCalendar);
// CONCATENATED MODULE: ./src/components/MonthCalendar.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/MonthCalendar.vue



MonthCalendarvue_type_script_lang_ts.render = MonthCalendarvue_type_template_id_7bfd4708_render

/* harmony default export */ var components_MonthCalendar = (MonthCalendarvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/DialogContentDesktop.vue?vue&type=script&lang=ts






var DialogContentDesktop = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    MonthCalendar: components_MonthCalendar,
    NextIcon: NextIcon,
    PrevIcon: PrevIcon
  },
  props: {
    fromDate: {
      type: Object,
      default: null
    },
    toDate: {
      type: Object,
      default: null
    },
    hoverDate: {
      type: Object,
      default: null
    },
    onSelectDate: {
      type: Function,
      default: function _default() {}
    },
    onHoverDate: {
      type: Function,
      default: function _default() {}
    },
    startWeekDay: {
      type: String,
      default: null
    },
    minDate: {
      type: Object,
      default: null
    },
    maxDate: {
      type: Object,
      default: null
    },
    monthFormat: {
      type: String,
      default: ''
    },
    isSingle: {
      type: Boolean,
      default: false
    },
    complsOpen: {
      type: Boolean,
      default: false
    },
    dateChanged: {
      type: Object,
      default: null
    },
    highlightToday: {
      type: Boolean,
      default: false
    },
    singleCalendar: {
      type: Boolean,
      default: false
    },
    weekDayFormat: {
      type: String,
      default: ''
    }
  },
  setup: function setup(props) {
    var containerRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    var translateAmount = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
    var monthArray = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])([]);
    var focusDate = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(dayjs_min_default()().clone());
    var disablePrev = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var disableNext = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var wrapperWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);

    var setTranslateAmount = function setTranslateAmount(val) {
      translateAmount.value = val;
    };

    var setMonthArray = function setMonthArray(val) {
      monthArray.value = val;
    };

    var setFocusDate = function setFocusDate(val) {
      focusDate.value = val;
    };

    var setDisablePrev = function setDisablePrev(val) {
      disablePrev.value = val;
    };

    var setDisableNext = function setDisableNext(val) {
      disableNext.value = val;
    };

    var setWrapperWidth = function setWrapperWidth(val) {
      wrapperWidth.value = val;
    };

    var getArrayMonth = function getArrayMonth(date, singleCalendar) {
      var prevMonth = dayjs_min_default()(date).subtract(1, 'month');
      var nextMonth = dayjs_min_default()(date).add(1, 'month');
      var futureMonth = dayjs_min_default()(date).add(2, 'month');

      if (singleCalendar) {
        return [prevMonth, focusDate.value, nextMonth];
      } else {
        return [prevMonth, focusDate.value, nextMonth, futureMonth];
      }
    };

    var containerRefWatchingFnc = function containerRefWatchingFnc() {
      if (containerRef.value) {
        var style = window.getComputedStyle(containerRef.value);

        var _translateAmount = props.singleCalendar ? containerRef.value.offsetWidth + parseInt(style.marginLeft) - 8 : containerRef.value.offsetWidth / 2;

        setWrapperWidth(_translateAmount);
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(containerRef, function () {
      containerRefWatchingFnc();
    });

    var complsOpenWatchingFnc = function complsOpenWatchingFnc() {
      setFocusDate(props.fromDate || dayjs_min_default()());
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.complsOpen;
    }, function () {
      complsOpenWatchingFnc();
    });

    var focusDateWatchingFnc = function focusDateWatchingFnc() {
      var minDate = props.minDate,
          maxDate = props.maxDate,
          singleCalendar = props.singleCalendar;

      if (minDate && focusDate.value.isBefore(dayjs_min_default()(minDate).add(1, 'month'), 'month')) {
        setDisablePrev(true);
      } else {
        setDisablePrev(false);
      }

      if (maxDate && focusDate.value.isAfter(dayjs_min_default()(maxDate).subtract(2, 'month'), 'month')) {
        setDisableNext(true);
      } else {
        setDisableNext(false);
      }

      var arrayMonth = getArrayMonth(focusDate.value, singleCalendar);
      setMonthArray(arrayMonth);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(focusDate, function () {
      focusDateWatchingFnc();
    });

    var increaseFocusDate = function increaseFocusDate(date) {
      if (dayjs_min_default.a.isDayjs(date)) {
        setFocusDate(date);
      } else {
        var nextDate = dayjs_min_default()(focusDate.value).add(1, 'month');
        setFocusDate(nextDate);
      }
    };

    var decreaseFocusDate = function decreaseFocusDate(date) {
      if (dayjs_min_default.a.isDayjs(date)) {
        setFocusDate(date);
      } else {
        var prevDate = dayjs_min_default()(focusDate.value).subtract(1, 'month');
        setFocusDate(prevDate);
      }
    };

    var increaseCurrentMonth = function increaseCurrentMonth(date) {
      if (disableNext.value) return;
      setTranslateAmount(-wrapperWidth.value);
      setTimeout(function () {
        increaseFocusDate(date);
        setTranslateAmount(0);
      }, 200);
    };

    var decreaseCurrentMonth = function decreaseCurrentMonth(date) {
      if (disablePrev.value) return;
      setTranslateAmount(wrapperWidth.value);
      setTimeout(function () {
        decreaseFocusDate(date);
        setTranslateAmount(0);
      }, 200);
    };

    var dateChangedWatchingFnc = function dateChangedWatchingFnc() {
      var dateChanged = props.dateChanged;

      if (dateChanged) {
        if (dayjs_min_default()(dateChanged).isBefore(focusDate.value, 'month')) {
          decreaseCurrentMonth(dateChanged);
        }

        if (dayjs_min_default()(dateChanged).isAfter(focusDate.value.add(1, 'month'), 'month')) {
          increaseCurrentMonth(dayjs_min_default()(dateChanged).subtract(1, 'month'));
        }
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.dateChanged;
    }, function (dateChanged) {
      dateChangedWatchingFnc();
    });

    var onBackButtonKeyDown = function onBackButtonKeyDown(e) {
      if (e.keyCode === 32 || e.keyCode === 13) {
        e.preventDefault();
        decreaseCurrentMonth();
        return false;
      }
    };

    var onNextButtonKeyDown = function onNextButtonKeyDown(e) {
      if (e.keyCode === 32 || e.keyCode === 13) {
        e.preventDefault();
        increaseCurrentMonth();
        return false;
      }
    };

    var focusOnCalendar = function focusOnCalendar() {
      if (containerRef.value) {
        var selectedButton = containerRef.value.querySelector('.day.selected');

        if (!selectedButton) {
          selectedButton = containerRef.value.querySelector('.month-calendar:not(.hidden) .day:not(.disabled)');
        }

        if (selectedButton) {
          selectedButton.focus();
        }
      }
    };

    var onKeyDown = function onKeyDown(e) {
      var maxDate = props.maxDate,
          minDate = props.minDate;
      var allowKeyCodes = [9, 32, 37, 38, 39, 40];
      var target = e.target;

      if (allowKeyCodes.indexOf(e.keyCode) === -1 || !target.getAttribute('data-day-index')) {
        return true;
      }

      e.preventDefault();
      var calendarContainer = target.parentElement.parentElement.parentElement.parentElement;
      var dayIndex = parseInt(target.getAttribute('data-day-index'));
      var dateValue = target.getAttribute('data-date-value');
      var date = dayjs_min_default()(dateValue);
      var lastDateOfMonth = date.add(1, 'month').set('date', 0).get('date');
      var nextDayIndex = -1;
      var increaseAmount = 0;

      switch (e.keyCode) {
        case 9:
          {
            var doneButton = calendarContainer.parentElement.parentElement.parentElement.querySelector('.submit-button');

            if (doneButton) {
              doneButton.focus();
              return true;
            }

            break;
          }

        case 32:
          target.click();
          break;

        case 37:
          increaseAmount = -1;
          break;

        case 38:
          increaseAmount = -7;
          break;

        case 39:
          increaseAmount = 1;
          break;

        case 40:
          increaseAmount = 7;
          break;

        default:
          break;
      }

      nextDayIndex = dayIndex + increaseAmount;

      if (nextDayIndex > 0 && nextDayIndex <= lastDateOfMonth) {
        var _target$parentElement, _target$parentElement2;

        var selector = ".day[data-day-index=\"".concat(nextDayIndex, "\"]");
        var dayElement = target === null || target === void 0 ? void 0 : (_target$parentElement = target.parentElement) === null || _target$parentElement === void 0 ? void 0 : (_target$parentElement2 = _target$parentElement.parentElement) === null || _target$parentElement2 === void 0 ? void 0 : _target$parentElement2.querySelector(selector);

        if (dayElement) {
          dayElement.focus();
        }
      } else {
        var nextDate = date.add(increaseAmount, 'day');

        if (increaseAmount > 0 && Math.ceil(nextDate.diff(focusDate.value, 'month', true)) > 1) {
          if (maxDate && dayjs_min_default()(nextDate).isAfter(maxDate, 'month')) return false;
          increaseCurrentMonth();
        } else if (increaseAmount < 0 && Math.ceil(focusDate.value.diff(nextDate, 'month', true)) > 0) {
          if (minDate && dayjs_min_default()(nextDate).isBefore(minDate, 'month')) return false;
          decreaseCurrentMonth();
        }

        setTimeout(function () {
          var query = ".month-calendar[data-month-index=\"".concat(nextDate.get('month') + 1, "\"] .day[data-day-index=\"").concat(nextDate.get('date'), "\"]");
          var dayElement = calendarContainer === null || calendarContainer === void 0 ? void 0 : calendarContainer.querySelector(query);

          if (dayElement) {
            dayElement.focus();
          }
        }, 200);
      }

      return false;
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      containerRefWatchingFnc();
      complsOpenWatchingFnc();
      focusDateWatchingFnc();
      dateChangedWatchingFnc();
    });
    return {
      getArrayMonth: getArrayMonth,
      increaseFocusDate: increaseFocusDate,
      decreaseFocusDate: decreaseFocusDate,
      increaseCurrentMonth: increaseCurrentMonth,
      decreaseCurrentMonth: decreaseCurrentMonth,
      onBackButtonKeyDown: onBackButtonKeyDown,
      onNextButtonKeyDown: onNextButtonKeyDown,
      focusOnCalendar: focusOnCalendar,
      onKeyDown: onKeyDown,
      monthArray: monthArray,
      dayjs: dayjs_min_default.a,
      translateAmount: translateAmount,
      focusDate: focusDate,
      disablePrev: disablePrev,
      disableNext: disableNext,
      wrapperWidth: wrapperWidth,
      containerRef: containerRef
    };
  }
});
/* harmony default export */ var DialogContentDesktopvue_type_script_lang_ts = (DialogContentDesktop);
// CONCATENATED MODULE: ./src/components/DialogContentDesktop.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/DialogContentDesktop.vue



DialogContentDesktopvue_type_script_lang_ts.render = DialogContentDesktopvue_type_template_id_a786370e_render

/* harmony default export */ var components_DialogContentDesktop = (DialogContentDesktopvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/DialogContentMobile.vue?vue&type=template&id=5fe1b62c

var DialogContentMobilevue_type_template_id_5fe1b62c_hoisted_1 = {
  style: {
    "height": "100%"
  }
};
var DialogContentMobilevue_type_template_id_5fe1b62c_hoisted_2 = {
  class: "calendar-wrapper"
};
var DialogContentMobilevue_type_template_id_5fe1b62c_hoisted_3 = {
  class: "calendar-content"
};
var _hoisted_4 = {
  class: "weekdays mobile"
};
function DialogContentMobilevue_type_template_id_5fe1b62c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MonthCalendar = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("MonthCalendar");

  var _component_RecycleScroller = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("RecycleScroller");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", DialogContentMobilevue_type_template_id_5fe1b62c_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", DialogContentMobilevue_type_template_id_5fe1b62c_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", DialogContentMobilevue_type_template_id_5fe1b62c_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_4, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.arrWeekDay, function (day, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
      class: "weekday",
      key: index
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(day), 1);
  }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_RecycleScroller, {
    ref: "listRef",
    class: "scroller",
    items: _ctx.row,
    "key-field": "index"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function (_ref) {
      var item = _ref.item;
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_MonthCalendar, {
        month: item.month,
        year: item.year,
        onSelectDate: _ctx.onSelectDate,
        fromDate: _ctx.fromDate,
        toDate: _ctx.toDate,
        hoverDate: _ctx.hoverDate,
        startWeekDay: _ctx.startWeekDay,
        minDate: _ctx.minDate,
        maxDate: _ctx.maxDate,
        monthFormat: _ctx.monthFormat,
        isSingle: _ctx.isSingle,
        highlightToday: _ctx.highlightToday,
        key: item.index
      }, null, 8, ["month", "year", "onSelectDate", "fromDate", "toDate", "hoverDate", "startWeekDay", "minDate", "maxDate", "monthFormat", "isSingle", "highlightToday"])])];
    }),
    _: 1
  }, 8, ["items"])])])]);
}
// CONCATENATED MODULE: ./src/components/DialogContentMobile.vue?vue&type=template&id=5fe1b62c

// CONCATENATED MODULE: ./node_modules/vue3-resize/dist/vue3-resize.esm.js


function getInternetExplorerVersion() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  const trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    const rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  const edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  } // other browser


  return -1;
}

let isIE;

function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
}

var vue3_resize_esm_script = {
  name: 'ResizeObserver',
  props: {
    showTrigger: {
      type: Boolean,
      default: false
    }
  },
  emits: ['notify'],

  setup(props, {
    emit
  }) {
    let _w = 0;
    let _h = 0;
    const elRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    let _resizeObject = null;

    const compareAndNotify = () => {
      if (_w !== elRef.value.offsetWidth || _h !== elRef.value.offsetHeight) {
        _w = elRef.value.offsetWidth;
        _h = elRef.value.offsetHeight;
        emit('notify', {
          width: _w,
          height: _h
        });
      }
    };

    const addResizeHandlers = () => {
      _resizeObject.contentDocument.defaultView.addEventListener('resize', compareAndNotify);

      compareAndNotify();
    };

    const removeResizeHandlers = () => {
      if (_resizeObject && _resizeObject.onload) {
        if (!isIE && _resizeObject.contentDocument) {
          _resizeObject.contentDocument.defaultView.removeEventListener('resize', compareAndNotify);
        }

        elRef.value.removeChild(_resizeObject);
        _resizeObject.onload = null;
        _resizeObject = null;
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
      initCompat();
      _w = elRef.value.offsetWidth;
      _h = elRef.value.offsetHeight;
      const object = document.createElement('object');
      _resizeObject = object;
      object.setAttribute('aria-hidden', 'true');
      object.setAttribute('tabindex', '-1');
      object.onload = addResizeHandlers;
      object.type = 'text/html';

      if (isIE) {
        elRef.value.appendChild(object);
      }

      object.data = 'about:blank';

      if (!isIE) {
        elRef.value.appendChild(object);
      }

      if (props.showTrigger) {
        compareAndNotify();
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeUnmount"])(() => {
      removeResizeHandlers();
    });
    return {
      elRef
    };
  }

};

const vue3_resize_esm_hoisted_1 = {
  ref: "elRef",
  class: "vue3-resize-observer",
  tabindex: "-1"
};
function vue3_resize_esm_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", vue3_resize_esm_hoisted_1, null, 512
  /* NEED_PATCH */
  );
}

vue3_resize_esm_script.render = vue3_resize_esm_render;
vue3_resize_esm_script.__file = "src/package/ResizeObserver/ResizeObserver.vue";

vue3_resize_esm_script.install = function (app) {
  app.component(vue3_resize_esm_script.name, vue3_resize_esm_script);
};

var version = "0.2.0";

const vue3_resize_esm_install = app => {
  app.use(vue3_resize_esm_script);
}; // Plugin


const Vue3Resize = {
  version,
  install: vue3_resize_esm_install
};

/* harmony default export */ var vue3_resize_esm = (Vue3Resize);

//# sourceMappingURL=vue3-resize.esm.js.map

// CONCATENATED MODULE: ./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.esm.js



var config = {
  itemsLimit: 1000
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function vue3_virtual_scroller_esm_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return vue3_virtual_scroller_esm_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vue3_virtual_scroller_esm_arrayLikeToArray(o, minLen);
}

function vue3_virtual_scroller_esm_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = vue3_virtual_scroller_esm_unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _typeof$1(obj) {
  if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") {
    _typeof$1 = function _typeof$1(obj) {
      return _typeof(obj);
    };
  } else {
    _typeof$1 = function _typeof$1(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
    };
  }

  return _typeof$1(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function vue3_virtual_scroller_esm_toConsumableArray(arr) {
  return vue3_virtual_scroller_esm_arrayWithoutHoles(arr) || vue3_virtual_scroller_esm_iterableToArray(arr) || vue3_virtual_scroller_esm_nonIterableSpread();
}

function vue3_virtual_scroller_esm_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function vue3_virtual_scroller_esm_iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function vue3_virtual_scroller_esm_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function processOptions(value) {
  var options;

  if (typeof value === 'function') {
    // Simple options (callback-only)
    options = {
      callback: value
    };
  } else {
    // Options object
    options = value;
  }

  return options;
}

function throttle(callback, delay) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout;
  var lastState;
  var currentArgs;

  var throttled = function throttled(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    currentArgs = args;
    if (timeout && state === lastState) return;
    var leading = options.leading;

    if (typeof leading === 'function') {
      leading = leading(state, lastState);
    }

    if ((!timeout || state !== lastState) && leading) {
      callback.apply(void 0, [state].concat(vue3_virtual_scroller_esm_toConsumableArray(currentArgs)));
    }

    lastState = state;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(void 0, [state].concat(vue3_virtual_scroller_esm_toConsumableArray(currentArgs)));
      timeout = 0;
    }, delay);
  };

  throttled._clear = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return throttled;
}

function deepEqual(val1, val2) {
  if (val1 === val2) return true;

  if (_typeof$1(val1) === 'object') {
    // eslint-disable-next-line no-restricted-syntax
    for (var key in val1) {
      if (!deepEqual(val1[key], val2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

var VisibilityState = /*#__PURE__*/function () {
  function VisibilityState(el, options, vnode) {
    _classCallCheck(this, VisibilityState);

    this.el = el;
    this.observer = null;
    this.frozen = false;
    this.createObserver(options, vnode);
  }

  _createClass(VisibilityState, [{
    key: "createObserver",
    value: function createObserver(options) {
      var _this = this;

      if (this.observer) {
        this.destroyObserver();
      }

      if (this.frozen) return;
      this.options = processOptions(options);

      this.callback = function (result, entry) {
        _this.options.callback(result, entry);

        if (result && _this.options.once) {
          _this.frozen = true;

          _this.destroyObserver();
        }
      }; // Throttle


      if (this.callback && this.options.throttle) {
        var _ref = this.options.throttleOptions || {},
            _leading = _ref.leading;

        this.callback = throttle(this.callback, this.options.throttle, {
          leading: function leading(state) {
            return _leading === 'both' || _leading === 'visible' && state || _leading === 'hidden' && !state;
          }
        });
      }

      this.oldResult = undefined;
      this.observer = new IntersectionObserver(function (entries) {
        var entry = entries[0];

        if (entries.length > 1) {
          var intersectingEntry = entries.find(function (e) {
            return e.isIntersecting;
          });

          if (intersectingEntry) {
            entry = intersectingEntry;
          }
        }

        if (_this.callback) {
          // Use isIntersecting if possible because browsers can report isIntersecting as true, but intersectionRatio as 0, when something very slowly enters the viewport.
          var result = entry.isIntersecting && entry.intersectionRatio >= _this.threshold;
          if (result === _this.oldResult) return;
          _this.oldResult = result;

          _this.callback(result, entry);
        }
      }, this.options.intersection); // Wait for the element to be in document

      setTimeout(function () {
        if (_this.observer) {
          _this.observer.observe(_this.el);
        }
      });
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      } // Cancel throttled call


      if (this.callback && this.callback._clear) {
        this.callback._clear();

        this.callback = null;
      }
    }
  }, {
    key: "threshold",
    get: function get() {
      return this.options.intersection && this.options.intersection.threshold || 0;
    }
  }]);

  return VisibilityState;
}();

function mounted(el, _ref2, vnode) {
  var value = _ref2.value;
  if (!value) return;

  if (typeof IntersectionObserver === 'undefined') {
    console.warn('[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill');
  } else {
    var state = new VisibilityState(el, value, vnode);
    el._vue_visibilityState = state;
  }
}

function unmounted(el) {
  var state = el._vue_visibilityState;

  if (state) {
    state.destroyObserver();
    delete el._vue_visibilityState;
  }
}

function componentUpdated(el, _ref3, vnode) {
  var value = _ref3.value,
      oldValue = _ref3.oldValue;
  if (deepEqual(value, oldValue)) return;
  var state = el._vue_visibilityState;

  if (!value) {
    unmounted(el);
    return;
  }

  if (state) {
    state.createObserver(value, vnode);
  } else {
    mounted(el, {
      value: value
    }, vnode);
  }
}

var ObserveVisibility = {
  mounted: mounted,
  componentUpdated: componentUpdated,
  unmounted: unmounted
};

var vue3_virtual_scroller_esm_props = {
  items: {
    type: Array,
    required: true
  },
  keyField: {
    type: String,
    default: 'id'
  },
  direction: {
    type: String,
    default: 'vertical',
    validator: function validator(value) {
      return ['vertical', 'horizontal'].includes(value);
    }
  }
};
var scrollParent = function scrollParent() {
  var regex = /(auto|scroll)/;

  function parents(node, ps) {
    if (node.parentNode === null) {
      return ps;
    }

    return parents(node.parentNode, ps.concat([node]));
  }

  function style(node, prop) {
    return getComputedStyle(node, null).getPropertyValue(prop);
  }

  function overflow(node) {
    return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
  }

  function scroll(node) {
    return regex.test(overflow(node));
  }

  function scrollParent(node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return;
    }

    var ps = parents(node.parentNode, []);

    for (var i = 0; i < ps.length; i += 1) {
      if (scroll(ps[i])) {
        return ps[i];
      }
    }

    return document.scrollingElement || document.documentElement;
  }

  return scrollParent;
};
function simpleArray() {
  return this.items.length && _typeof(this.items[0]) !== 'object';
}

var supportsPassive = false;

if (typeof window !== 'undefined') {
  supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
}

var uid = 0;
var vue3_virtual_scroller_esm_script = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'RecycleScroller',
  components: {
    ResizeObserver: vue3_resize_esm_script
  },
  directives: {
    ObserveVisibility: ObserveVisibility
  },
  props: _objectSpread2({}, vue3_virtual_scroller_esm_props, {
    itemSize: {
      type: Number,
      default: null
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: 'size'
    },
    typeField: {
      type: String,
      default: 'type'
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: false
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: false
    }
  }),
  emits: ['visible', 'hidden', 'resize', 'update'],
  data: function data() {
    return {
      pool: [],
      totalSize: 0,
      ready: false,
      hoverKey: null
    };
  },
  computed: {
    sizes: function sizes() {
      if (this.itemSize === null) {
        var sizes = {
          '-1': {
            accumulator: 0
          }
        };
        var items = this.items;
        var field = this.sizeField;
        var minItemSize = this.minItemSize;
        var computedMinSize = 10000;
        var accumulator = 0;
        var current;

        for (var i = 0, l = items.length; i < l; i++) {
          current = items[i][field] || minItemSize;

          if (current < computedMinSize) {
            computedMinSize = current;
          }

          accumulator += current;
          sizes[i] = {
            accumulator: accumulator,
            size: current
          };
        } // eslint-disable-next-line


        this.$_computedMinItemSize = computedMinSize;
        return sizes;
      }

      return [];
    },
    simpleArray: simpleArray
  },
  watch: {
    items: function items() {
      this.updateVisibleItems(true);
    },
    pageMode: function pageMode() {
      this.applyPageMode();
      this.updateVisibleItems(false);
    },
    sizes: {
      handler: function handler() {
        this.updateVisibleItems(false);
      },
      deep: true
    }
  },
  created: function created() {
    this.$_startIndex = 0;
    this.$_endIndex = 0;
    this.$_views = new Map();
    this.$_unusedViews = new Map();
    this.$_scrollDirty = false;
    this.$_lastUpdateScrollPosition = 0; // In SSR mode, we also prerender the same number of item for the first render
    // to avoir mismatch between server and client templates

    if (this.prerender) {
      this.$_prerender = true;
      this.updateVisibleItems(false);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.applyPageMode();
    this.$nextTick(function () {
      // In SSR mode, render the real number of visible items
      _this.$_prerender = false;

      _this.updateVisibleItems(true);

      _this.ready = true;
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.removeListeners();
  },
  methods: {
    addView: function addView(pool, index, item, key, type) {
      var view = {
        item: item,
        position: 0
      };
      view.nr = {
        id: uid++,
        index: index,
        used: true,
        key: key,
        type: type
      };
      pool.push(view);
      return view;
    },
    unuseView: function unuseView(view) {
      var fake = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var unusedViews = this.$_unusedViews;
      var type = view.nr.type;
      var unusedPool = unusedViews.get(type);

      if (!unusedPool) {
        unusedPool = [];
        unusedViews.set(type, unusedPool);
      }

      unusedPool.push(view);

      if (!fake) {
        view.nr.used = false;
        view.position = -9999;
        this.$_views.delete(view.nr.key);
      }
    },
    handleResize: function handleResize() {
      this.$emit('resize');
      if (this.ready) this.updateVisibleItems(false);
    },
    handleScroll: function handleScroll(event) {
      var _this2 = this;

      if (!this.$_scrollDirty) {
        this.$_scrollDirty = true;
        requestAnimationFrame(function () {
          _this2.$_scrollDirty = false;

          var _this2$updateVisibleI = _this2.updateVisibleItems(false, true),
              continuous = _this2$updateVisibleI.continuous; // It seems sometimes chrome doesn't fire scroll event :/
          // When non continous scrolling is ending, we force a refresh


          if (!continuous) {
            clearTimeout(_this2.$_refreshTimout);
            _this2.$_refreshTimout = setTimeout(_this2.handleScroll, 100);
          }
        });
      }
    },
    handleVisibilityChange: function handleVisibilityChange(isVisible, entry) {
      var _this3 = this;

      if (this.ready) {
        if (isVisible || entry.boundingClientRect.width !== 0 || entry.boundingClientRect.height !== 0) {
          this.$emit('visible');
          requestAnimationFrame(function () {
            _this3.updateVisibleItems(false);
          });
        } else {
          this.$emit('hidden');
        }
      }
    },
    updateVisibleItems: function updateVisibleItems(checkItem) {
      var checkPositionDiff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var itemSize = this.itemSize;
      var minItemSize = this.$_computedMinItemSize;
      var typeField = this.typeField;
      var keyField = this.simpleArray ? null : this.keyField;
      var items = this.items;
      var count = items.length;
      var sizes = this.sizes;
      var views = this.$_views;
      var unusedViews = this.$_unusedViews;
      var pool = this.pool;
      var startIndex, endIndex;
      var totalSize;

      if (!count) {
        startIndex = endIndex = totalSize = 0;
      } else if (this.$_prerender) {
        startIndex = 0;
        endIndex = this.prerender;
        totalSize = null;
      } else {
        var scroll = this.getScroll(); // Skip update if use hasn't scrolled enough

        if (checkPositionDiff) {
          var positionDiff = scroll.start - this.$_lastUpdateScrollPosition;
          if (positionDiff < 0) positionDiff = -positionDiff;

          if (itemSize === null && positionDiff < minItemSize || positionDiff < itemSize) {
            return {
              continuous: true
            };
          }
        }

        this.$_lastUpdateScrollPosition = scroll.start;
        var buffer = this.buffer;
        scroll.start -= buffer;
        scroll.end += buffer; // Variable size mode

        if (itemSize === null) {
          var h;
          var a = 0;
          var b = count - 1;
          var i = ~~(count / 2);
          var oldI; // Searching for startIndex

          do {
            oldI = i;
            h = sizes[i].accumulator;

            if (h < scroll.start) {
              a = i;
            } else if (i < count - 1 && sizes[i + 1].accumulator > scroll.start) {
              b = i;
            }

            i = ~~((a + b) / 2);
          } while (i !== oldI);

          i < 0 && (i = 0);
          startIndex = i; // For container style

          totalSize = sizes[count - 1].accumulator; // Searching for endIndex

          for (endIndex = i; endIndex < count && sizes[endIndex].accumulator < scroll.end; endIndex++) {
          }

          if (endIndex === -1) {
            endIndex = items.length - 1;
          } else {
            endIndex++; // Bounds

            endIndex > count && (endIndex = count);
          }
        } else {
          // Fixed size mode
          startIndex = ~~(scroll.start / itemSize);
          endIndex = Math.ceil(scroll.end / itemSize); // Bounds

          startIndex < 0 && (startIndex = 0);
          endIndex > count && (endIndex = count);
          totalSize = count * itemSize;
        }
      }

      if (endIndex - startIndex > config.itemsLimit) {
        this.itemsLimitError();
      }

      this.totalSize = totalSize;
      var view;
      var continuous = startIndex <= this.$_endIndex && endIndex >= this.$_startIndex;

      if (this.$_continuous !== continuous) {
        if (continuous) {
          views.clear();
          unusedViews.clear();

          for (var _i = 0, l = pool.length; _i < l; _i++) {
            view = pool[_i];
            this.unuseView(view);
          }
        }

        this.$_continuous = continuous;
      } else if (continuous) {
        for (var _i2 = 0, _l = pool.length; _i2 < _l; _i2++) {
          view = pool[_i2];

          if (view.nr.used) {
            // Update view item index
            if (checkItem) {
              view.nr.index = items.findIndex(function (item) {
                return keyField ? item[keyField] === view.item[keyField] : item === view.item;
              });
            } // Check if index is still in visible range


            if (view.nr.index === -1 || view.nr.index < startIndex || view.nr.index >= endIndex) {
              this.unuseView(view);
            }
          }
        }
      }

      var unusedIndex = continuous ? null : new Map();
      var item, type, unusedPool;
      var v;

      for (var _i3 = startIndex; _i3 < endIndex; _i3++) {
        item = items[_i3];
        var key = keyField ? item[keyField] : item;

        if (key == null) {
          throw new Error("Key is ".concat(key, " on item (keyField is '").concat(keyField, "')"));
        }

        view = views.get(key);

        if (!itemSize && !sizes[_i3].size) {
          if (view) this.unuseView(view);
          continue;
        } // No view assigned to item


        if (!view) {
          type = item[typeField];
          unusedPool = unusedViews.get(type);

          if (continuous) {
            // Reuse existing view
            if (unusedPool && unusedPool.length) {
              view = unusedPool.pop();
              view.item = item;
              view.nr.used = true;
              view.nr.index = _i3;
              view.nr.key = key;
              view.nr.type = type;
            } else {
              view = this.addView(pool, _i3, item, key, type);
            }
          } else {
            // Use existing view
            // We don't care if they are already used
            // because we are not in continous scrolling
            v = unusedIndex.get(type) || 0;

            if (!unusedPool || v >= unusedPool.length) {
              view = this.addView(pool, _i3, item, key, type);
              this.unuseView(view, true);
              unusedPool = unusedViews.get(type);
            }

            view = unusedPool[v];
            view.item = item;
            view.nr.used = true;
            view.nr.index = _i3;
            view.nr.key = key;
            view.nr.type = type;
            unusedIndex.set(type, v + 1);
            v++;
          }

          views.set(key, view);
        } else {
          view.nr.used = true;
          view.item = item;
        } // Update position


        if (itemSize === null) {
          view.position = sizes[_i3 - 1].accumulator;
        } else {
          view.position = _i3 * itemSize;
        }
      }

      this.$_startIndex = startIndex;
      this.$_endIndex = endIndex;
      if (this.emitUpdate) this.$emit('update', startIndex, endIndex); // After the user has finished scrolling
      // Sort views so text selection is correct

      clearTimeout(this.$_sortTimer);
      this.$_sortTimer = setTimeout(this.sortViews, 300);
      return {
        continuous: continuous
      };
    },
    getListenerTarget: function getListenerTarget() {
      var target = scrollParent(this.$el); // Fix global scroll target for Chrome and Safari

      if (window.document && (target === window.document.documentElement || target === window.document.body)) {
        target = window;
      }

      return target;
    },
    getScroll: function getScroll() {
      var el = this.$el,
          direction = this.direction;
      var isVertical = direction === 'vertical';
      var scrollState;

      if (this.pageMode) {
        var bounds = el.getBoundingClientRect();
        var boundsSize = isVertical ? bounds.height : bounds.width;
        var start = -(isVertical ? bounds.top : bounds.left);
        var size = isVertical ? window.innerHeight : window.innerWidth;

        if (start < 0) {
          size += start;
          start = 0;
        }

        if (start + size > boundsSize) {
          size = boundsSize - start;
        }

        scrollState = {
          start: start,
          end: start + size
        };
      } else if (isVertical) {
        scrollState = {
          start: el.scrollTop,
          end: el.scrollTop + el.clientHeight
        };
      } else {
        scrollState = {
          start: el.scrollLeft,
          end: el.scrollLeft + el.clientWidth
        };
      }

      return scrollState;
    },
    applyPageMode: function applyPageMode() {
      if (this.pageMode) {
        this.addListeners();
      } else {
        this.removeListeners();
      }
    },
    addListeners: function addListeners() {
      this.listenerTarget = this.getListenerTarget();
      this.listenerTarget.addEventListener('scroll', this.handleScroll, supportsPassive ? {
        passive: true
      } : false);
      this.listenerTarget.addEventListener('resize', this.handleResize);
    },
    removeListeners: function removeListeners() {
      if (!this.listenerTarget) {
        return;
      }

      this.listenerTarget.removeEventListener('scroll', this.handleScroll);
      this.listenerTarget.removeEventListener('resize', this.handleResize);
      this.listenerTarget = null;
    },
    scrollToItem: function scrollToItem(index) {
      var scroll;

      if (this.itemSize === null) {
        scroll = index > 0 ? this.sizes[index - 1].accumulator : 0;
      } else {
        scroll = index * this.itemSize;
      }

      this.scrollToPosition(scroll);
    },
    scrollToPosition: function scrollToPosition(position) {
      if (this.direction === 'vertical') {
        this.$el.scrollTop = position;
      } else {
        this.$el.scrollLeft = position;
      }
    },
    itemsLimitError: function itemsLimitError() {
      var _this4 = this;

      setTimeout(function () {
        console.log('It seems the scroller element isn\'t scrolling, so it tries to render all the items at once.', 'Scroller:', _this4.$el);
        console.log('Make sure the scroller has a fixed height (or width) and \'overflow-y\' (or \'overflow-x\') set to \'auto\' so it can scroll correctly and only render the items visible in the scroll viewport.');
      });
      throw new Error('Rendered items limit reached');
    },
    sortViews: function sortViews() {
      this.pool.sort(function (viewA, viewB) {
        return viewA.nr.index - viewB.nr.index;
      });
    }
  }
});

var vue3_virtual_scroller_esm_hoisted_1 = {
  key: 0,
  class: "vue-recycle-scroller__slot"
};
var vue3_virtual_scroller_esm_hoisted_2 = {
  key: 1,
  class: "vue-recycle-scroller__slot"
};
function vue3_virtual_scroller_esm_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ResizeObserver = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ResizeObserver");

  var _directive_observe_visibility = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("observe-visibility");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["vue-recycle-scroller", _defineProperty({
      ready: _ctx.ready,
      'page-mode': _ctx.pageMode
    }, "direction-".concat(_ctx.direction), true)],
    onScrollPassive: _cache[2] || (_cache[2] = function () {
      return _ctx.handleScroll.apply(_ctx, arguments);
    })
  }, [_ctx.$slots.before ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", vue3_virtual_scroller_esm_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "before")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    ref: "wrapper",
    style: _defineProperty({}, _ctx.direction === 'vertical' ? 'minHeight' : 'minWidth', _ctx.totalSize + 'px'),
    class: "vue-recycle-scroller__item-wrapper"
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.pool, function (view) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
      key: view.nr.id,
      style: _ctx.ready ? {
        transform: "translate".concat(_ctx.direction === 'vertical' ? 'Y' : 'X', "(").concat(view.position, "px)")
      } : null,
      class: ["vue-recycle-scroller__item-view", {
        hover: _ctx.hoverKey === view.nr.key
      }],
      onMouseenter: function onMouseenter($event) {
        return _ctx.hoverKey = view.nr.key;
      },
      onMouseleave: _cache[1] || (_cache[1] = function ($event) {
        return _ctx.hoverKey = null;
      })
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
      item: view.item,
      index: view.nr.index,
      active: view.nr.used
    })], 46
    /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */
    , ["onMouseenter"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 4
  /* STYLE */
  ), _ctx.$slots.after ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", vue3_virtual_scroller_esm_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "after")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ResizeObserver, {
    onNotify: _ctx.handleResize
  }, null, 8
  /* PROPS */
  , ["onNotify"])], 34
  /* CLASS, HYDRATE_EVENTS */
  )), [[_directive_observe_visibility, _ctx.handleVisibilityChange]]);
}

vue3_virtual_scroller_esm_script.render = vue3_virtual_scroller_esm_render;
vue3_virtual_scroller_esm_script.__file = "src/components/RecycleScroller.vue";

var script$1 = {
  name: 'DynamicScroller',
  components: {
    RecycleScroller: vue3_virtual_scroller_esm_script
  },
  provide: function provide() {
    var _this = this;

    var vscrollResizeObserver = undefined;

    if (typeof ResizeObserver !== 'undefined') {
      vscrollResizeObserver = new ResizeObserver(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            if (entry.target) {
              var event = new CustomEvent('resize', {
                detail: {
                  contentRect: entry.contentRect
                }
              });
              entry.target.dispatchEvent(event);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }

    return {
      vscrollData: this.vscrollData,
      vscrollParent: this,
      vscrollResizeObserver: vscrollResizeObserver,
      onUpdateScroll: function onUpdateScroll(cb) {
        return _this.vScrollMap.push(cb);
      }
    };
  },
  inheritAttrs: false,
  props: _objectSpread2({}, vue3_virtual_scroller_esm_props, {
    minItemSize: {
      type: [Number, String],
      required: true
    }
  }),
  emits: ['vscroll:update', 'resize', 'visible'],
  data: function data() {
    return {
      vscrollData: {
        active: true,
        sizes: {},
        validSizes: {},
        keyField: this.keyField,
        simpleArray: false
      },
      vScrollMap: []
    };
  },
  computed: {
    simpleArray: simpleArray,
    itemsWithSize: function itemsWithSize() {
      var result = [];
      var items = this.items,
          keyField = this.keyField,
          simpleArray = this.simpleArray;
      var sizes = this.vscrollData.sizes;

      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var id = simpleArray ? i : item[keyField];
        var size = sizes[id];

        if (typeof size === 'undefined' && !this.$_undefinedMap[id]) {
          size = 0;
        }

        result.push({
          item: item,
          id: id,
          size: size
        });
      }

      return result;
    },
    listeners: function listeners() {
      var listeners = {};

      for (var key in this.$attrs) {
        if (key.startsWith('on')) {
          if (key !== 'onResize' && key !== 'onVisible') {
            listeners[key] = this.$attrs;
          }
        }
      }

      return listeners;
    }
  },
  watch: {
    items: function items() {
      this.forceUpdate(false);
    },
    simpleArray: {
      handler: function handler(value) {
        this.vscrollData.simpleArray = value;
      },
      immediate: true
    },
    direction: function direction(value) {
      this.forceUpdate(true);
    }
  },
  created: function created() {
    this.$_updates = [];
    this.$_undefinedSizes = 0;
    this.$_undefinedMap = {};
  },
  activated: function activated() {
    this.vscrollData.active = true;
  },
  deactivated: function deactivated() {
    this.vscrollData.active = false;
  },
  methods: {
    onScrollerResize: function onScrollerResize() {
      var scroller = this.$refs.scroller;

      if (scroller) {
        this.forceUpdate();
      }

      this.$emit('resize');
    },
    onScrollerVisible: function onScrollerVisible() {
      this.vScrollUpdate(false);
      this.$emit('visible');
    },
    vScrollUpdate: function vScrollUpdate() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var data = {
        force: force
      };
      this.$emit('vscroll:update', data);
      this.vScrollMap.forEach(function (callback) {
        return callback(data);
      });
    },
    forceUpdate: function forceUpdate() {
      var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (clear || this.simpleArray) {
        this.vscrollData.validSizes = {};
      }

      this.vScrollUpdate(true);
    },
    scrollToItem: function scrollToItem(index) {
      var scroller = this.$refs.scroller;
      if (scroller) scroller.scrollToItem(index);
    },
    getItemSize: function getItemSize(item) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var id = this.simpleArray ? index != null ? index : this.items.indexOf(item) : item[this.keyField];
      return this.vscrollData.sizes[id] || 0;
    },
    scrollToBottom: function scrollToBottom() {
      var _this2 = this;

      if (this.$_scrollingToBottom) return;
      this.$_scrollingToBottom = true;
      var el = this.$el; // Item is inserted to the DOM

      this.$nextTick(function () {
        el.scrollTop = el.scrollHeight + 5000; // Item sizes are computed

        var cb = function cb() {
          el.scrollTop = el.scrollHeight + 5000;
          requestAnimationFrame(function () {
            el.scrollTop = el.scrollHeight + 5000;

            if (_this2.$_undefinedSizes === 0) {
              _this2.$_scrollingToBottom = false;
            } else {
              requestAnimationFrame(cb);
            }
          });
        };

        requestAnimationFrame(cb);
      });
    }
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_RecycleScroller = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("RecycleScroller");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_RecycleScroller, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    ref: "scroller",
    items: $options.itemsWithSize,
    "min-item-size": $props.minItemSize,
    direction: _ctx.direction,
    "key-field": "id"
  }, _ctx.$attrs, {
    onResize: $options.onScrollerResize,
    onVisible: $options.onScrollerVisible
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toHandlers"])($options.listeners)), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function (_ref) {
      var itemWithSize = _ref.item,
          index = _ref.index,
          active = _ref.active;
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {
        item: itemWithSize.item,
        index: index,
        active: active,
        itemWithSize: itemWithSize
      })];
    }),
    before: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "before")];
    }),
    after: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "after")];
    }),
    _: 1
  }, 16
  /* FULL_PROPS */
  , ["items", "min-item-size", "direction", "onResize", "onVisible"]);
}

script$1.render = render$1;
script$1.__file = "src/components/DynamicScroller.vue";

var DynamicScrollerItem = {
  name: 'DynamicScrollerItem',
  inject: ['vscrollData', 'vscrollParent', 'onUpdateScroll', 'vscrollResizeObserver'],
  props: {
    item: {
      required: true
    },
    watchData: {
      type: Boolean,
      default: false
    },

    /**
     * Indicates if the view is actively used to display an item.
     */
    active: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      default: undefined
    },
    sizeDependencies: {
      type: [Array, Object],
      default: null
    },
    emitResize: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    id: function id() {
      return this.vscrollData.simpleArray ? this.index : this.item[this.vscrollData.keyField];
    },
    size: function size() {
      return this.vscrollData.validSizes[this.id] && this.vscrollData.sizes[this.id] || 0;
    },
    finalActive: function finalActive() {
      return this.active && this.vscrollData.active;
    }
  },
  watch: {
    watchData: 'updateWatchData',
    id: function id() {
      if (!this.size) {
        this.onDataUpdate();
      }
    },
    finalActive: function finalActive(value) {
      if (!this.size) {
        if (value) {
          if (!this.vscrollParent.$_undefinedMap[this.id]) {
            this.vscrollParent.$_undefinedSizes++;
            this.vscrollParent.$_undefinedMap[this.id] = true;
          }
        } else {
          if (this.vscrollParent.$_undefinedMap[this.id]) {
            this.vscrollParent.$_undefinedSizes--;
            this.vscrollParent.$_undefinedMap[this.id] = false;
          }
        }
      }

      if (this.vscrollResizeObserver) {
        if (value) {
          this.observeSize();
        } else {
          this.unobserveSize();
        }
      } else if (value && this.$_pendingVScrollUpdate === this.id) {
        this.updateSize();
      }
    }
  },
  created: function created() {
    var _this = this;

    if (this.$isServer) return;
    this.$_forceNextVScrollUpdate = null;
    this.updateWatchData();

    if (!this.vscrollResizeObserver) {
      var _loop = function _loop(k) {
        _this.$watch(function () {
          return _this.sizeDependencies[k];
        }, _this.onDataUpdate);
      };

      for (var k in this.sizeDependencies) {
        _loop(k);
      }

      this.onUpdateScroll('vscroll:update', this.onVscrollUpdate);
    }
  },
  mounted: function mounted() {
    if (this.vscrollData.active) {
      this.updateSize();
      this.observeSize();
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.unobserveSize();
  },
  methods: {
    updateSize: function updateSize() {
      if (this.finalActive) {
        if (this.$_pendingSizeUpdate !== this.id) {
          this.$_pendingSizeUpdate = this.id;
          this.$_forceNextVScrollUpdate = null;
          this.$_pendingVScrollUpdate = null;
          this.computeSize(this.id);
        }
      } else {
        this.$_forceNextVScrollUpdate = this.id;
      }
    },
    updateWatchData: function updateWatchData() {
      var _this2 = this;

      if (this.watchData) {
        this.$_watchData = this.$watch('data', function () {
          _this2.onDataUpdate();
        }, {
          deep: true
        });
      } else if (this.$_watchData) {
        this.$_watchData();
        this.$_watchData = null;
      }
    },
    onVscrollUpdate: function onVscrollUpdate(_ref) {
      var force = _ref.force;

      // If not active, sechedule a size update when it becomes active
      if (!this.finalActive && force) {
        this.$_pendingVScrollUpdate = this.id;
      }

      if (this.$_forceNextVScrollUpdate === this.id || force || !this.size) {
        this.updateSize();
      }
    },
    onDataUpdate: function onDataUpdate() {
      this.updateSize();
    },
    computeSize: function computeSize(id) {
      var _this3 = this;

      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
        if (_this3.id === id) {
          var width = _this3.$el.offsetWidth;
          var height = _this3.$el.offsetHeight;

          _this3.applySize(width, height);
        }

        _this3.$_pendingSizeUpdate = null;
      }).then();
    },
    applySize: function applySize(width, height) {
      var size = Math.round(this.vscrollParent.direction === 'vertical' ? height : width);

      if (size && this.size !== size) {
        if (this.vscrollParent.$_undefinedMap[this.id]) {
          this.vscrollParent.$_undefinedSizes--;
          this.vscrollParent.$_undefinedMap[this.id] = undefined;
        }

        this.vscrollData.sizes[this.id] = size;
        this.vscrollData.validSizes[this.id] = true;
        if (this.emitResize) this.$emit('resize', this.id);
      }
    },
    observeSize: function observeSize() {
      if (!this.vscrollResizeObserver) return;
      this.vscrollResizeObserver.observe(this.$el.parentNode);
      this.$el.parentNode.addEventListener('resize', this.onResize);
    },
    unobserveSize: function unobserveSize() {
      if (!this.vscrollResizeObserver) return;
      this.vscrollResizeObserver.unobserve(this.$el.parentNode);
      this.$el.parentNode.removeEventListener('resize', this.onResize);
    },
    onResize: function onResize(event) {
      var _event$detail$content = event.detail.contentRect,
          width = _event$detail$content.width,
          height = _event$detail$content.height;
      this.applySize(width, height);
    }
  },
  render: function render() {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(this.tag, null, this.$slots.default());
  }
};

var vue3_virtual_scroller_esm_version = "0.2.1";

function registerComponents(app, prefix) {
  app.component("".concat(prefix, "recycle-scroller"), vue3_virtual_scroller_esm_script);
  app.component("".concat(prefix, "RecycleScroller"), vue3_virtual_scroller_esm_script);
  app.component("".concat(prefix, "dynamic-scroller"), script$1);
  app.component("".concat(prefix, "DynamicScroller"), script$1);
  app.component("".concat(prefix, "dynamic-scroller-item"), DynamicScrollerItem);
  app.component("".concat(prefix, "DynamicScrollerItem"), DynamicScrollerItem);
}

var vue3_virtual_scroller_esm_plugin = {
  version: vue3_virtual_scroller_esm_version,
  install: function install(app, options) {
    var finalOptions = Object.assign({}, {
      installComponents: true,
      componentsPrefix: ''
    }, options);

    for (var key in finalOptions) {
      if (typeof finalOptions[key] !== 'undefined') {
        config[key] = finalOptions[key];
      }
    }

    if (finalOptions.installComponents) {
      registerComponents(app, finalOptions.componentsPrefix);
    }
  }
};

/* harmony default export */ var vue3_virtual_scroller_esm = (vue3_virtual_scroller_esm_plugin);

//# sourceMappingURL=vue3-virtual-scroller.esm.js.map

// EXTERNAL MODULE: ./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css
var vue3_virtual_scroller = __webpack_require__("37c6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/DialogContentMobile.vue?vue&type=script&lang=ts






var DialogContentMobile = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  // eslint-disable-next-line vue/no-unused-components
  components: {
    RecycleScroller: vue3_virtual_scroller_esm_script,
    MonthCalendar: components_MonthCalendar
  },
  props: {
    fromDate: {
      type: Object,
      default: null
    },
    toDate: {
      type: Object,
      default: null
    },
    hoverDate: {
      type: Object,
      default: null
    },
    onSelectDate: {
      type: Function,
      default: function _default() {}
    },
    // onHoverDate: {
    //   type: Function,
    //   default: () => {}
    // },
    startWeekDay: {
      type: String,
      default: null
    },
    minDate: {
      type: Object,
      default: null
    },
    maxDate: {
      type: Object,
      default: null
    },
    monthFormat: {
      type: String,
      default: ''
    },
    isSingle: {
      type: Boolean,
      default: false
    },
    complsOpen: {
      type: Boolean,
      default: false
    },
    // dateChanged: {
    //   type: Object as () => dayjs.Dayjs,
    //   default: null
    // },
    highlightToday: {
      type: Boolean,
      default: false
    },
    // singleCalendar: {
    //   type: Boolean,
    //   default: false
    // },
    weekDayFormat: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    list: function list() {
      var data = [];

      for (var i = 0; i < 100; i++) {
        data.push({
          id: i + 1,
          text: 'text' + i
        });
      }

      return data;
    }
  },
  setup: function setup(props) {
    var rowCount = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(2400);

    var setRowCount = function setRowCount(val) {
      rowCount.value = val;
    };

    var minYear = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.minDate ? dayjs_min_default()(props.minDate).year() : 1900;
    });
    var minMonth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.minDate ? dayjs_min_default()(props.minDate).month() : 0;
    });
    var listRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    var arrWeekDay = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return getWeekDay(props.startWeekDay, props.weekDayFormat);
    });

    var complsOpenWatchingFnc = function complsOpenWatchingFnc() {
      var fromDate = props.fromDate,
          complsOpen = props.complsOpen,
          minDate = props.minDate;

      if (listRef.value && complsOpen) {
        var date = fromDate ? dayjs_min_default()(fromDate) : dayjs_min_default()();
        var monthDiff = date.diff(dayjs_min_default()('1900-01-01'), 'month');

        if (minDate) {
          monthDiff = date.diff(dayjs_min_default()(minDate), 'month');
        } // listRef.value.scrollToItem(monthDiff + 1, 'smart')


        listRef.value.scrollToItem(monthDiff, 'smart');
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.complsOpen;
    }, function () {
      complsOpenWatchingFnc();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      var maxDate = props.maxDate,
          minDate = props.minDate;

      if (maxDate) {
        var _minDate = minDate ? dayjs_min_default()(minDate) : dayjs_min_default()('1900-01-01');

        setRowCount(dayjs_min_default()(maxDate).diff(_minDate, 'month') + 1);
      }

      complsOpenWatchingFnc();
    });

    var getMonthYearFromIndex = function getMonthYearFromIndex(index) {
      var _index = index + minMonth.value;

      var year = minYear.value + Math.floor(_index / 12);
      var month = _index % 12;
      return {
        year: year,
        month: month
      };
    };

    function getItemSize(index) {
      var _getMonthYearFromInde = getMonthYearFromIndex(index),
          year = _getMonthYearFromInde.year,
          month = _getMonthYearFromInde.month;

      var _getMonthInfo = getMonthInfo(year, month, 'monday'),
          totalWeek = _getMonthInfo.totalWeek;

      return totalWeek.length * 48 + 34;
    }

    var row = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      var data = [];

      for (var index = 0; index < rowCount.value; index++) {
        var _getMonthYearFromInde2 = getMonthYearFromIndex(index),
            year = _getMonthYearFromInde2.year,
            month = _getMonthYearFromInde2.month;

        var size = getItemSize(index);
        data.push({
          year: year,
          month: month,
          index: index,
          size: size
        });
      }

      return data;
    });
    return {
      minYear: minYear,
      rowCount: rowCount,
      minMonth: minMonth,
      listRef: listRef,
      getMonthYearFromIndex: getMonthYearFromIndex,
      // getWeekDay,
      arrWeekDay: arrWeekDay,
      getItemSize: getItemSize,
      row: row
    };
  }
});
/* harmony default export */ var DialogContentMobilevue_type_script_lang_ts = (DialogContentMobile);
// CONCATENATED MODULE: ./src/components/DialogContentMobile.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/components/DialogContentMobile.vue?vue&type=style&index=0&id=5fe1b62c&lang=css
var DialogContentMobilevue_type_style_index_0_id_5fe1b62c_lang_css = __webpack_require__("0e34");

// CONCATENATED MODULE: ./src/components/DialogContentMobile.vue





DialogContentMobilevue_type_script_lang_ts.render = DialogContentMobilevue_type_template_id_5fe1b62c_render

/* harmony default export */ var components_DialogContentMobile = (DialogContentMobilevue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Dialog.vue?vue&type=script&lang=ts





var Dialog = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    DateInputGroup: components_DateInputGroup,
    DialogContentMobile: components_DialogContentMobile,
    DialogContentDesktop: components_DialogContentDesktop,
    BackIcon: BackIcon
  },
  props: {
    complsOpen: {
      type: Boolean,
      default: false
    },
    inputFocus: {
      type: String,
      default: null
    },
    fromDate: {
      type: Object,
      default: null
    },
    toDate: {
      type: Object,
      default: null
    },
    hoverDate: {
      type: Object,
      default: null
    },
    toggleDialog: {
      type: Function,
      default: function _default() {}
    },
    handleClickDateInput: {
      type: Function,
      default: function _default() {}
    },
    onSelectDate: {
      type: Function,
      default: function _default() {}
    },
    onHoverDate: {
      type: Function,
      default: function _default() {}
    },
    handleReset: {
      type: Function,
      default: function _default() {}
    },
    handleChangeDate: {
      type: Function,
      default: function _default() {}
    },
    startDatePlaceholder: {
      type: String,
      default: null
    },
    endDatePlaceholder: {
      type: String,
      default: null
    },
    startWeekDay: {
      type: String,
      default: null
    },
    minDate: {
      type: Object,
      default: null
    },
    maxDate: {
      type: Object,
      default: null
    },
    dateFormat: {
      type: String,
      default: ''
    },
    monthFormat: {
      type: String,
      default: ''
    },
    isSingle: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    highlightToday: {
      type: Boolean,
      default: false
    },
    weekDayFormat: {
      type: String,
      default: ''
    },
    hideDialogHeader: {
      type: Boolean,
      default: false
    },
    hideDialogFooter: {
      type: Boolean,
      default: false
    },
    dateInputSeperator: {
      type: Object,
      default: null
    },
    singleCalendar: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    var hideAnimation = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var dateChanged = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    var containerRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();

    var setHideAnimation = function setHideAnimation(val) {
      hideAnimation.value = val;
    };

    var setDateChanged = function setDateChanged(val) {
      dateChanged.value = val;
    };

    var onChangeDate = function onChangeDate(date, value) {
      setDateChanged(date);
      props.handleChangeDate(date, value);
    };

    var complsOpenWatchingFnc = function complsOpenWatchingFnc() {
      if (props.complsOpen && !hideAnimation.value) {
        setHideAnimation(true);
      }

      if (props.complsOpen) {
        setTimeout(function () {
          if (containerRef.value && containerRef.value.getElementById) {
            var startDateInput = containerRef.value.getElementById('start-date-input-button');

            if (startDateInput) {
              startDateInput.focus();
            }
          }
        }, 50);
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.complsOpen;
    }, function (complsOpen) {
      complsOpenWatchingFnc();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      complsOpenWatchingFnc();
    });
    return {
      containerRef: containerRef,
      onChangeDate: onChangeDate,
      hideAnimation: hideAnimation,
      dateChanged: dateChanged,
      setHideAnimation: setHideAnimation
    };
  }
});
/* harmony default export */ var Dialogvue_type_script_lang_ts = (Dialog);
// CONCATENATED MODULE: ./src/components/Dialog.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/Dialog.vue



Dialogvue_type_script_lang_ts.render = Dialogvue_type_template_id_35d84e99_render

/* harmony default export */ var components_Dialog = (Dialogvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/helpers/useResize.ts

var useResize_useResize = function useResize(props) {
  var isMobile = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

  var setIsMobile = function setIsMobile(val) {
    isMobile.value = val;
  };

  var handleResize = function handleResize() {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeUnmount"])(function () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize);
    }
  });
  return {
    isMobile: isMobile
  };
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/range-date-picker/RangeDatePicker.vue?vue&type=script&lang=ts








var RangeDatePicker = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: propsSchema,
  components: {
    DateInputGroup: components_DateInputGroup,
    DialogWrapper: components_DialogWrapper,
    Dialog: components_Dialog
  },
  setup: function setup(props) {
    var _useRangeDatePicker = RangeDatePicker_useRangeDatePicker(props),
        complsOpen = _useRangeDatePicker.complsOpen,
        containerRef = _useRangeDatePicker.containerRef,
        inputFocus = _useRangeDatePicker.inputFocus,
        fromDate = _useRangeDatePicker.fromDate,
        toDate = _useRangeDatePicker.toDate,
        fromDateRef = _useRangeDatePicker.fromDateRef,
        toDateRef = _useRangeDatePicker.toDateRef,
        hoverDate = _useRangeDatePicker.hoverDate,
        isFirstTime = _useRangeDatePicker.isFirstTime,
        setComplsOpen = _useRangeDatePicker.setComplsOpen,
        setInputFocus = _useRangeDatePicker.setInputFocus,
        setFromDate = _useRangeDatePicker.setFromDate,
        setToDate = _useRangeDatePicker.setToDate,
        setHoverDate = _useRangeDatePicker.setHoverDate,
        setIsFirstTime = _useRangeDatePicker.setIsFirstTime,
        handleDocumentClick = _useRangeDatePicker.handleDocumentClick,
        notifyChange = _useRangeDatePicker.notifyChange,
        updateFromDate = _useRangeDatePicker.updateFromDate,
        updateToDate = _useRangeDatePicker.updateToDate,
        toggleDialog = _useRangeDatePicker.toggleDialog,
        handleClickDateInput = _useRangeDatePicker.handleClickDateInput,
        onSelectDate = _useRangeDatePicker.onSelectDate,
        onHoverDate = _useRangeDatePicker.onHoverDate,
        handleReset = _useRangeDatePicker.handleReset,
        handleChangeDate = _useRangeDatePicker.handleChangeDate,
        onDateInputFocus = _useRangeDatePicker.onDateInputFocus;

    var _useResize = useResize_useResize(),
        isMobile = _useResize.isMobile;

    var startDateWatchingFnc = function startDateWatchingFnc() {
      var startDate = props.startDate;

      var _startDateJs = startDate ? dayjs_min_default()(startDate) : null;

      fromDateRef.value = _startDateJs;
      updateFromDate(_startDateJs, false);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.startDate;
    }, function () {
      startDateWatchingFnc();
    });

    var endDateWatchingFnc = function endDateWatchingFnc() {
      var endDate = props.endDate;

      var _endDateJs = endDate ? dayjs_min_default()(endDate) : null;

      toDateRef.value = _endDateJs;
      updateToDate(_endDateJs, false);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.endDate;
    }, function () {
      endDateWatchingFnc();
    });

    var complsOpenWatchingFnc = function complsOpenWatchingFnc() {
      if (!complsOpen && isFirstTime) {
        var startDate = props.startDate,
            endDate = props.endDate;
        props.onCloseCalendar(startDate, endDate);
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(complsOpen, function (complsOpen, oldVal) {
      complsOpenWatchingFnc();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(inputFocus, function (inputFocus) {
      if (isFirstTime) {
        var onFocus = props.onFocus;
        var input = inputFocus === Direction.from ? 'Start Date' : inputFocus === Direction.to ? 'End Date' : '';
        onFocus(input);
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      setIsFirstTime(true);
      document.addEventListener('click', handleDocumentClick);
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      var endDate = props.endDate,
          isOpen = props.isOpen,
          startDate = props.startDate;
      setComplsOpen(isOpen);
      startDateWatchingFnc();
      endDateWatchingFnc(); // complsOpenWatchingFnc()
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeUnmount"])(function () {
      document.removeEventListener('click', handleDocumentClick);
    });
    return {
      complsOpen: complsOpen,
      containerRef: containerRef,
      inputFocus: inputFocus,
      fromDate: fromDate,
      toDate: toDate,
      fromDateRef: fromDateRef,
      toDateRef: toDateRef,
      hoverDate: hoverDate,
      isFirstTime: isFirstTime,
      isMobile: isMobile,
      setComplsOpen: setComplsOpen,
      setInputFocus: setInputFocus,
      setFromDate: setFromDate,
      setToDate: setToDate,
      setHoverDate: setHoverDate,
      setIsFirstTime: setIsFirstTime,
      handleDocumentClick: handleDocumentClick,
      notifyChange: notifyChange,
      updateFromDate: updateFromDate,
      updateToDate: updateToDate,
      toggleDialog: toggleDialog,
      handleClickDateInput: handleClickDateInput,
      onSelectDate: onSelectDate,
      onHoverDate: onHoverDate,
      handleReset: handleReset,
      handleChangeDate: handleChangeDate,
      onDateInputFocus: onDateInputFocus
    };
  }
});
/* harmony default export */ var RangeDatePickervue_type_script_lang_ts = (RangeDatePicker);
// CONCATENATED MODULE: ./src/components/range-date-picker/RangeDatePicker.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/range-date-picker/RangeDatePicker.vue



RangeDatePickervue_type_script_lang_ts.render = RangeDatePickervue_type_template_id_11325f92_render

/* harmony default export */ var range_date_picker_RangeDatePicker = (RangeDatePickervue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/single-date-picker/SingleDatePicker.vue?vue&type=template&id=8cb2e99c

var SingleDatePickervue_type_template_id_8cb2e99c_hoisted_1 = {
  class: "react-google-flight-datepicker"
};
function SingleDatePickervue_type_template_id_8cb2e99c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DateInputGroup = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("DateInputGroup");

  var _component_Dialog = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Dialog");

  var _component_DialogWrapper = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("DialogWrapper");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SingleDatePickervue_type_template_id_8cb2e99c_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ['date-picker', _ctx.className, {
      disabled: _ctx.disabled
    }],
    ref: "containerRef"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_DateInputGroup, {
    handleClickDateInput: _ctx.handleClickDateInput,
    showCalendarIcon: "",
    fromDate: _ctx.fromDate,
    minDate: _ctx.minDate,
    maxDate: _ctx.maxDate,
    handleChangeDate: _ctx.onSelectDate,
    startDatePlaceholder: _ctx.startDatePlaceholder,
    dateFormat: _ctx.dateFormat,
    onFocus: _ctx.onDateInputFocus,
    isSingle: ""
  }, null, 8, ["handleClickDateInput", "fromDate", "minDate", "maxDate", "handleChangeDate", "startDatePlaceholder", "dateFormat", "onFocus"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_DialogWrapper, {
    isMobile: _ctx.isMobile
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Dialog, {
        complsOpen: _ctx.complsOpen,
        toggleDialog: _ctx.toggleDialog,
        handleClickDateInput: _ctx.handleClickDateInput,
        inputFocus: "from",
        onSelectDate: _ctx.onSelectDate,
        onHoverDate: _ctx.onHoverDate,
        fromDate: _ctx.fromDate,
        hoverDate: _ctx.hoverDate,
        handleReset: _ctx.handleReset,
        handleChangeDate: _ctx.onSelectDate,
        startDatePlaceholder: _ctx.startDatePlaceholder,
        startWeekDay: _ctx.startWeekDay,
        minDate: _ctx.minDate,
        maxDate: _ctx.maxDate,
        dateFormat: _ctx.dateFormat,
        monthFormat: _ctx.monthFormat,
        isMobile: _ctx.isMobile,
        highlightToday: _ctx.highlightToday,
        isSingle: "",
        weekDayFormat: _ctx.weekDayFormat,
        singleCalendar: _ctx.singleCalendar
      }, null, 8, ["complsOpen", "toggleDialog", "handleClickDateInput", "onSelectDate", "onHoverDate", "fromDate", "hoverDate", "handleReset", "handleChangeDate", "startDatePlaceholder", "startWeekDay", "minDate", "maxDate", "dateFormat", "monthFormat", "isMobile", "highlightToday", "weekDayFormat", "singleCalendar"])];
    }),
    _: 1
  }, 8, ["isMobile"])], 2)]);
}
// CONCATENATED MODULE: ./src/components/single-date-picker/SingleDatePicker.vue?vue&type=template&id=8cb2e99c

// CONCATENATED MODULE: ./src/components/single-date-picker/SingleDatePicker.ts




var SingleDatePicker_propsSchema = {
  startDate: {
    type: Object,
    default: null
  },
  startDatePlaceholder: {
    type: String,
    default: DateLabel.date
  },
  className: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onChange: {
    type: Function,
    default: function _default() {}
  },
  onFocus: {
    type: Function,
    default: function _default() {}
  },
  startWeekDay: {
    type: String,
    default: StartWeekDay.monday
  },
  minDate: {
    type: Object,
    default: null
  },
  maxDate: {
    type: Object,
    default: null
  },
  dateFormat: {
    type: String,
    default: ''
  },
  monthFormat: {
    type: String,
    default: ''
  },
  weekDayFormat: {
    type: String,
    default: WeekDayFormat.dd
  },
  highlightToday: {
    type: Boolean,
    default: false
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  onCloseCalendar: {
    type: Function,
    default: function _default() {}
  },
  singleCalendar: {
    type: Boolean,
    default: false
  }
};
var SingleDatePicker_PropsType = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineProps"])(SingleDatePicker_propsSchema);
var SingleDatePicker_useSingleDatePicker = function useSingleDatePicker(props) {
  var complsOpen = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
  var containerRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
  var fromDate = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
  var fromDateRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
  var hoverDate = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
  var isFirstTime = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

  var setComplsOpen = function setComplsOpen(val) {
    complsOpen.value = val;
  };

  var setFromDate = function setFromDate(val) {
    fromDate.value = val;
  };

  var setHoverDate = function setHoverDate(val) {
    hoverDate.value = val;
  };

  var setIsFirstTime = function setIsFirstTime(val) {
    isFirstTime.value = val;
  };

  var handleDocumentClick = function handleDocumentClick(e) {
    if (containerRef.value && containerRef.value.contains(e.target) === false && window.innerWidth >= 768) {
      setComplsOpen(false);
    }
  };

  var notifyChange = function notifyChange() {
    var _startDate = fromDateRef.value ? fromDateRef.value.toDate() : null;

    props.onChange(_startDate);
  };

  var debounceNotifyChange = debounce(notifyChange, 20);

  var updateFromDate = function updateFromDate(dateValue) {
    var shouldNotifyChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setFromDate(dateValue);
    fromDateRef.value = dateValue;

    if (shouldNotifyChange) {
      debounceNotifyChange();
    }
  };

  var handleClickDateInput = function handleClickDateInput() {
    if (props.disabled) return;

    if (!complsOpen.value) {
      setComplsOpen(true);
    }

    props.onFocus(DateLabel.start);
  };

  var onSelectDate = function onSelectDate(date) {
    var minDate = props.minDate,
        maxDate = props.maxDate;

    if (minDate && dayjs_min_default()(minDate).isAfter(date, 'date') || maxDate && dayjs_min_default()(maxDate).isBefore(date, 'date')) {
      return;
    }

    updateFromDate(date, true);
  };

  var onHoverDate = function onHoverDate(date) {
    setHoverDate(date);
  };

  var handleReset = function handleReset() {
    updateFromDate(null, true);
    setHoverDate(null);
  };

  var onDateInputFocus = function onDateInputFocus() {
    handleClickDateInput();
  };

  var toggleDialog = function toggleDialog() {
    setComplsOpen(!complsOpen.value);
  };

  return {
    complsOpen: complsOpen,
    containerRef: containerRef,
    fromDate: fromDate,
    fromDateRef: fromDateRef,
    hoverDate: hoverDate,
    isFirstTime: isFirstTime,
    notifyChange: notifyChange,
    debounceNotifyChange: debounceNotifyChange,
    updateFromDate: updateFromDate,
    handleClickDateInput: handleClickDateInput,
    setIsFirstTime: setIsFirstTime,
    setHoverDate: setHoverDate,
    handleDocumentClick: handleDocumentClick,
    onSelectDate: onSelectDate,
    onHoverDate: onHoverDate,
    handleReset: handleReset,
    onDateInputFocus: onDateInputFocus,
    setComplsOpen: setComplsOpen,
    setFromDate: setFromDate,
    toggleDialog: toggleDialog
  };
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/single-date-picker/SingleDatePicker.vue?vue&type=script&lang=ts








var SingleDatePicker = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    DateInputGroup: components_DateInputGroup,
    DialogWrapper: components_DialogWrapper,
    Dialog: components_Dialog
  },
  props: SingleDatePicker_propsSchema,
  setup: function setup(props) {
    var _useSingleDatePicker = SingleDatePicker_useSingleDatePicker(props),
        complsOpen = _useSingleDatePicker.complsOpen,
        isFirstTime = _useSingleDatePicker.isFirstTime,
        containerRef = _useSingleDatePicker.containerRef,
        fromDate = _useSingleDatePicker.fromDate,
        fromDateRef = _useSingleDatePicker.fromDateRef,
        hoverDate = _useSingleDatePicker.hoverDate,
        notifyChange = _useSingleDatePicker.notifyChange,
        debounceNotifyChange = _useSingleDatePicker.debounceNotifyChange,
        updateFromDate = _useSingleDatePicker.updateFromDate,
        handleClickDateInput = _useSingleDatePicker.handleClickDateInput,
        setIsFirstTime = _useSingleDatePicker.setIsFirstTime,
        setHoverDate = _useSingleDatePicker.setHoverDate,
        handleDocumentClick = _useSingleDatePicker.handleDocumentClick,
        onSelectDate = _useSingleDatePicker.onSelectDate,
        onHoverDate = _useSingleDatePicker.onHoverDate,
        handleReset = _useSingleDatePicker.handleReset,
        onDateInputFocus = _useSingleDatePicker.onDateInputFocus,
        setComplsOpen = _useSingleDatePicker.setComplsOpen,
        setFromDate = _useSingleDatePicker.setFromDate,
        toggleDialog = _useSingleDatePicker.toggleDialog;

    var _useResize = useResize_useResize(),
        isMobile = _useResize.isMobile;

    var startDateWatchingFnc = function startDateWatchingFnc() {
      var startDate = props.startDate;

      var _startDateJs = startDate ? dayjs_min_default()(startDate) : null;

      fromDateRef.value = _startDateJs;
      setFromDate(_startDateJs);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.startDate;
    }, function () {
      startDateWatchingFnc();
    });

    var complsOpenWatchingFnc = function complsOpenWatchingFnc() {
      if (!complsOpen && isFirstTime) {
        props.onCloseCalendar(props.startDate);
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(complsOpen, function () {
      complsOpenWatchingFnc();
    });

    var isOpenWatchingFnc = function isOpenWatchingFnc() {
      setComplsOpen(props.isOpen);
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.isOpen;
    }, function () {
      isOpenWatchingFnc();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      setComplsOpen(props.isOpen);
      setIsFirstTime(true);

      if (props.startDate) {
        updateFromDate(dayjs_min_default()(props.startDate), false);
      }

      startDateWatchingFnc();
      complsOpenWatchingFnc();
      isOpenWatchingFnc();
      document.addEventListener('click', handleDocumentClick);
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeUnmount"])(function () {
      document.removeEventListener('click', handleDocumentClick);
    });
    return {
      complsOpen: complsOpen,
      isFirstTime: isFirstTime,
      containerRef: containerRef,
      fromDate: fromDate,
      fromDateRef: fromDateRef,
      hoverDate: hoverDate,
      notifyChange: notifyChange,
      debounceNotifyChange: debounceNotifyChange,
      updateFromDate: updateFromDate,
      handleClickDateInput: handleClickDateInput,
      setIsFirstTime: setIsFirstTime,
      setHoverDate: setHoverDate,
      handleDocumentClick: handleDocumentClick,
      onSelectDate: onSelectDate,
      onHoverDate: onHoverDate,
      handleReset: handleReset,
      onDateInputFocus: onDateInputFocus,
      setComplsOpen: setComplsOpen,
      setFromDate: setFromDate,
      toggleDialog: toggleDialog,
      isMobile: isMobile
    };
  }
});
/* harmony default export */ var SingleDatePickervue_type_script_lang_ts = (SingleDatePicker);
// CONCATENATED MODULE: ./src/components/single-date-picker/SingleDatePicker.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/single-date-picker/SingleDatePicker.vue



SingleDatePickervue_type_script_lang_ts.render = SingleDatePickervue_type_template_id_8cb2e99c_render

/* harmony default export */ var single_date_picker_SingleDatePicker = (SingleDatePickervue_type_script_lang_ts);
// EXTERNAL MODULE: ./src/scss/style.scss
var style = __webpack_require__("5903");

// CONCATENATED MODULE: ./src/install.ts



var VueGoogleFlightDatePicker = {
  install: function install(app, options) {
    app.component('RangeDatePicker', range_date_picker_RangeDatePicker);
    app.component('SingleDatePicker', single_date_picker_SingleDatePicker);
  }
};
/* harmony default export */ var src_install = (VueGoogleFlightDatePicker);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_install);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});