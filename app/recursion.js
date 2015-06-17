exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [],
      dirs = [];

    processDir(data);

    function processDir(dir) {
      var files = dir.files;
      dirs.push(dir.dir);

      for (var i = 0; i < files.length; i++) {
        if (typeof files[i] === 'string') {
          if (typeof dirName === 'undefined' || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else if (typeof files[i] === 'object') {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    return listOfFiles;
  },

  permute: function(arr) {
    var permutationCache = {},
      permutations = createPermutations(arr.join(''));

    return permutations.map(function splitPermutations(perm) {
      return perm.split('');
    });

    function createPermutations(string) {
      var permutations = [],
        firstChar,
        prevPermutations;

      if (string.length === 0) {
        return [''];
      }

      if (permutationCache[string]) {
        return permutationCache[string];
      }

      for (var i = 0; i < string.length; i++) {
        firstChar = string[i];
        prevPermutations = createPermutations(string.slice(0,i) + string.slice(i+1));

        for (var p = 0; p < prevPermutations.length; p++) {
          permutations.push(firstChar + prevPermutations[p]);
        }
      }

      permutationCache[string] = permutations;
      return permutations;
    }
  },

  fibonacci: function(n) {
    var fibs = [0, 1]

    calculateFibs(n);

    return fibs[n];

    function calculateFibs(n) {
      for (var i = 2; i <= n; i++) {
        fibs[i] = fibs[i-1] + fibs[i-2];
      }
    }
  },

  validParentheses: function(n) {
    return permuteParens(n);

    function permuteParens(n) {
      var permutations = {},
        prevPermutations,
        base;

      if (n < 1) {
        return [''];
      }

      prevPermutations = permuteParens(n-1);
      for (var p = 0; p < prevPermutations.length; p++) {
        base = prevPermutations[p]
        permutations['()' + base] = true;
        for (var i = 1; i < base.length; i++) {
          permutations[base.slice(0,i) + '()' + base.slice(i)] = true;
        }
      }
      return Object.keys(permutations);
    }
  }
};
