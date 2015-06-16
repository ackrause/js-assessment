exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var id;

    function counter() {
      console.log(start++);
      if (start <= end) {
        id = window.setTimeout(counter, 100);
      }
    }

    counter();

    return {
      cancel: function cancel() {
        id && window.clearInterval(id);
      }
    }
  }
};
