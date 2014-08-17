import AjaxMixin from 'js/mixins/ajax';

var AccountsRoute = Ember.Route.extend(AjaxMixin, {
    model: function() {
        return this.xhr('/api/accounts', 'GET');
    }
});

export default AccountsRoute;
