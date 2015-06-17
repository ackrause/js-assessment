exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    var args = Array.prototype.slice.call(arguments, 2);
    return fn.apply(obj, args);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var result = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(key + ': ' + obj[key]);
      }
    }

    return result;
  }
};
