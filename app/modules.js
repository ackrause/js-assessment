exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    return {
      sayIt: function sayIt() {
        return this.greeting + ', ' + this.name;
      },

      greeting: str1,
      name: str2
    };
  }
};
