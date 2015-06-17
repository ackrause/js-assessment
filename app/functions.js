exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(phrase) {
      return str + ', ' + phrase;
    };
  },

  makeClosures : function(arr, fn) {
    return arr.map(function makeClosure(item) {
      return function() {
        return fn(item);
      }
    });
  },

  partial : function(fn, str1, str2) {
    return function() {
      var args = Array.prototype.slice.apply(arguments);
      args = ([str1, str2]).concat(args);
      return fn.apply(this, args);
    }
  },

  useArguments : function() {
    var args = Array.prototype.slice.apply(arguments);

    return args.reduce(function sum(partial, addend) {
      return partial + addend;
    }, 0);
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var outerArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
      var innerArgs = Array.prototype.slice.apply(arguments),
        args = outerArgs.concat(innerArgs);
      return fn.apply(this, args);
    }
  },

  curryIt : function(fn) {

  }
};
