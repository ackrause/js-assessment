exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum : function(arr) {
    return arr.reduce(function sum(partial, addend) {
      return partial + addend;
    }, 0);
  },

  remove : function(arr, item) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        result.push(arr[i]);
      }
    }

    return result;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i,1);
        i--;
      }
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var result = arr1.slice();

    for (var i = 0; i < arr2.length; i++) {
      result.push(arr2[i]);
    }

    return result;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.reduce(function count(total, current) {
      return current === item ? total + 1 : total;
    }, 0);
  },

  duplicates : function(arr) {
    var counts = {},
      dupes = [];

    for (var i = 0; i < arr.length; i++) {
      counts[arr[i]] = counts[arr[i]] ? counts[arr[i]] + 1 : 1;
    }

    for (var item in counts) {
      if (counts[item] > 1) {
        dupes.push(window.parseInt(item));
      }
    }

    return dupes;
  },

  square : function(arr) {
    return arr.map(function square(n) {
      return n*n;
    });
  },

  findAllOccurrences : function(arr, target) {
    var indices = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        indices.push(i);
      }
    }

    return indices;
  }
};
