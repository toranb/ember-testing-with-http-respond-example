var AjaxMixin = Ember.Mixin.create({
    xhr: function(url, type, hash) {
        console.warn("in the xhr");
        hash = hash || {};
        hash.url = url;
        hash.type = type;
        hash.dataType = "json";
        console.warn(url);
        console.warn(type);
        console.warn(hash);
        return this.promise(url, type, hash);
    },
    promise: function(url, type, hash) {
        console.warn("in the pro 1");
        return new Ember.RSVP.Promise(function(resolve, reject) {
            console.warn("in the pro 2");
            hash.success = function(json) {
              console.warn("now doing the resolve step");
              return Ember.run(null, resolve, json);
            };
            hash.error = function(json) {
                console.warn("now doing the ERROR step");
                if (json && json.then) {
                    json.then = null;
                }
                return Ember.run(null, reject, json);
            };
            $.ajax(hash);
        });
    }
});

export default AjaxMixin;
