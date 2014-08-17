import AjaxMixin from 'js/mixins/ajax';

var AccountsRoute = Ember.Route.extend(AjaxMixin, {
    model: function() {
        var accounts = [];
        var self = this;
        $.getJSON('/api/accounts', function(response) {
            response.forEach(function(account) {
                Ember.run(accounts, accounts.pushObject, account);
            });
        }, this);
        return accounts;
    }
});

export default AccountsRoute;
