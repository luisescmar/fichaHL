var toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

var equals = function () {
	var innerEquiv; // the real equiv function
	var callers = []; // stack to decide between skip/abort functions
	var parents = []; // stack to avoiding loops from circular referencing
	// Call the o related callback with the given arguments.

	function bindCallbacks(o, callbacks, args) {
		var prop = toType(o);
		if (prop) {
			if (toType(callbacks[prop]) === "function") {
				return callbacks[prop].apply(callbacks, args);
			} else {
				return callbacks[prop]; // or undefined
			}
		}
	}
 
	var callbacks = function () {
		// for string, boolean, number and null
		function useStrictEquality(b, a) {
			if (b instanceof a.constructor || a instanceof b.constructor) {
				// to catch short annotaion VS 'new' annotation of a
				// declaration
				// e.g. var i = 1;
				// var j = new Number(1);
				return a == b;
			} else {
				return a === b;
			}
		}
	 
		return {
			"string": useStrictEquality,
			"boolean": useStrictEquality,
			"number": useStrictEquality,
			"null": useStrictEquality,
			"undefined": useStrictEquality,

			"nan": function (b) {
				return isNaN(b);
			},

			"date": function (b, a) {
				return QUnit.toType(b) === "date" && a.valueOf() === b.valueOf();
			},

			"regexp": function (b, a) {
				return QUnit.toType(b) === "regexp" && a.source === b.source && // the regex itself
				a.global === b.global && // and its modifers
				// (gmi) ...
				a.ignoreCase === b.ignoreCase && a.multiline === b.multiline;
			},

			// - skip when the property is a method of an instance (OOP)
			// - abort otherwise,
			// initial === would have catch identical references anyway
			"function": function () {
				var caller = callers[callers.length - 1];
				return caller !== Object && typeof caller !== "undefined";
			},

			"array": function (b, a) {
				var i, j, loop;
				var len;

				// b could be an object literal here
				if (!(toType(b) === "array")) {
					return false;
				}

				len = a.length;
				if (len !== b.length) { // safe and faster
					return false;
				}

				// track reference to avoid circular references
				parents.push(a);
				for (i = 0; i < len; i++) {
					loop = false;
					for (j = 0; j < parents.length; j++) {
						if (parents[j] === a[i]) {
							loop = true; // dont rewalk array
						}
					}
					if (!loop && !innerEquiv(a[i], b[i])) {
						parents.pop();
						return false;
					}
				}
				parents.pop();
				return true;
			},

			"object": function (b, a) {
				var i, j, loop;
				var eq = true; // unless we can proove it
				var aProperties = [],
				bProperties = []; // collection of
				// strings
				// comparing constructors is more strict than using
				// instanceof
				if (a.constructor !== b.constructor) {
					return false;
				}

				// stack constructor before traversing properties
				callers.push(a.constructor);
				// track reference to avoid circular references
				parents.push(a);

				for (i in a) { // be strict: don't ensures hasOwnProperty
					// and go deep
					loop = false;
					for (j = 0; j < parents.length; j++) {
						if (parents[j] === a[i]) loop = true; // don't go down the same path
						// twice
					}
					aProperties.push(i); // collect a's properties
					if (!loop && !innerEquiv(a[i], b[i])) {
						eq = false;
						break;
					}
				}

				callers.pop(); // unstack, we are done
				parents.pop();

				for (i in b) {
					bProperties.push(i); // collect b's properties
				}

				// Ensures identical properties name
				return eq && innerEquiv(aProperties.sort(), bProperties.sort());
			}
		};
	}();
 
	innerEquiv = function () { // can take multiple arguments
		var args = Array.prototype.slice.apply(arguments);
		if (args.length < 2) {
			return true; // end transition
		}

		return (function (a, b) {
		if (a === b) {
			return true; // catch the most you can
		} else if (a === null || b === null || typeof a === "undefined" || typeof b === "undefined" || toType(a) !== toType(b)) {
			return false; // don't lose time with error prone cases
		} else {
			return bindCallbacks(a, callbacks, [b, a]);
		}

		// apply transition with (1..n) arguments
		})(args[0], args[1]) && arguments.callee.apply(this, args.splice(1, args.length - 1));
	};
 
	return innerEquiv;
 
}();

Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
	"use strict";
	if (this == null) {
		throw new TypeError();
	}
	var t = Object(this);
	var len = t.length >>> 0;
	if (len === 0) {
		return -1;
	}
	var n = 0;
	if (arguments.length > 1) {
		n = Number(arguments[1]);
		if (n != n) { // para verificar si es NaN
			n = 0;
		} else if (n != 0 && n != Infinity && n != -Infinity) {
			n = (n > 0 || -1) * Math.floor(Math.abs(n));
		}
	}
	if (n >= len) {
		return -1;
	}
	var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
	for (; k < len; k++) {
		if (k in t && equals(t[k], searchElement)) {
			return k;
		}
	}
	return -1;
}


//deja un �nico elemento de cada
Array.prototype.noRepes = function(){
    for(var i = 0; i < this.length; i++){
        if( this.indexOf(this[i], i+1) != -1 ){
            this.splice(i,1);
            i--;
        }
    }
    return this.sort();
}

Array.prototype.unique = function(){
    for(var i = 0; i < this.length; i++){
		var index = this.indexOf(this[i], i+1);
		var repetido = false;
		while (index != -1){
			this.splice(index,1);
			repetido = true;
			index = this.indexOf(this[i], i+1);
		}
		if (repetido){
			this.splice(i, 1);
			i--;
		}
    }
	return this;
}

Array.prototype.repes = function(){
    for(var i = 0; i < this.length; i++){
		var index = this.indexOf(this[i], i+1);
		var repetido = false;
		while (index != -1){
			this.splice(index,1);
			repetido = true;
			index = this.indexOf(this[i], i+1);
		}
		if (!repetido){
			this.splice(i, 1);
			i--;
		}
    }
	return this;
}