exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function (resolve, reject) {
      return resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    return new Promise(function (resolve, reject) {
      var client = new window.XMLHttpRequest();
      client.open('GET', url);
      client.send();

      client.onload = function ajaxComplete() {
        if (this.status === 200) {
          var remoteData = JSON.parse(this.response),
            names = remoteData.people.map(function getNames(person) {
              return person.name;
            }).sort();
          resolve(names);
        } else {
          reject(this.statusText);
        }
      }
      client.onerror = function ajaxFail() {
        reject(this.statusText);
      }
    });
  }
};
