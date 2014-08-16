import AjaxMixin from 'js/mixins/ajax';

var AccountsRoute = Ember.Route.extend(AjaxMixin, {
    model: function() {
        //Ember.run(self.people, self.people.pushObject, thing);
        console.warn("IN the model hook");
        return this.xhr('/api/accounts', 'get').then(function(response) {
            things.forEach(function(thing) {
                console.warn(thing);
                console.warn(thing.name);
            });
            return [];
        });
    }
});

export default AccountsRoute;
