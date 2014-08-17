var AjaxMixin = Ember.Mixin.create({
    xhr: function(url, type, hash) {
        hash = hash || {};
        hash.url = url;
        hash.type = type;
        hash.dataType = "json";
        return this.promise(url, type, hash);
    },
    promise: function(url, type, hash) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
          console.log("1");
          if (hash.data && type !== 'GET') {
            hash.contentType = 'application/json; charset=utf-8';
            hash.data = JSON.stringify(hash.data);
          }

          hash.success = function(json) {
            console.log("2");
            Ember.run(null, resolve, json);
          };

          hash.error = function(jqXHR, textStatus, errorThrown) {
            console.log("3");
            if (jqXHR) {
              jqXHR.then = null;
            }

            Ember.run(null, reject, jqXHR);
          };

          Ember.$.ajax(hash);
        });
    }
});

export default AjaxMixin;
